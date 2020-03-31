//bring in axios so we can make requests
import axios from "axios";
import { returnErrors } from "./messages";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";
//lets create a action ; CHECK TOKEN & LOAD USER
// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });
    //tonces ahora stamos listos para hacer el request to get the user , load the user; elije un endpoing and send the config with it.
    //that will giv us promise back so .then , get a result..that result we want to dispatch a action with type user_loaded
    //and at the same level is payload, which is response data.
    //now if something goes wrong then catch error, else it wont triger
    axios
        .get("/api/auth/user", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
            //if theres an error in console (else this will not run)..remember this message from server
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            //the above just puts the error into the state, but we also want to call the Auth error if were not loged in
            dispatch({
                type: AUTH_ERROR
            });
        });

};

// LOGIN USER --note esto no es un Axios request es el comienzo de un processo despues de user
//takes in username&password to validate the user against backend
export const login = (username, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request Body--> creates variable called body, set it to JSON.stringy and create object {username, password}
    const body = JSON.stringify({ username, password });
    //so now that you have body go to request, not body is a parameter below.
    //if its good --> respnse dispatches the type LOGINSUCESSS


    //tonces ahora stamos listos para hacer el request to get the user , load the user; elije un endpoing and send the config with it.
    //that will giv us promise back so .then , get a result..that result we want to dispatch a action with type user_loaded
    //and at the same level is payload, which is response data.
    //now if something goes wrong then catch error, else it wont triger
    axios
        .post("/api/auth/login", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            //if theres an error in console (else this will not run)..remember this message from server
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

// REGISTER USER
//takes in username&password to validate the user against backend
export const register = ({ username, password, email }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request Body
    const body = JSON.stringify({ username, email, password });
    //so now that you have body go to request, not body is a parameter below.
    //if its good --> respnse dispatches the type LOGINSUCESSS


    //tonces ahora stamos listos para hacer el request to get the user , load the user; elije un endpoing and send the config with it.
    //that will giv us promise back so .then , get a result..that result we want to dispatch a action with type user_loaded
    //and at the same level is payload, which is response data.
    //now if something goes wrong then catch error, else it wont triger
    axios
        .post("/api/auth/register", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    //tonces ahora stamos listos para hacer el request to get the user , load the user; elije un endpoing and send the config with it.
    //that will giv us promise back so .then , get a result..that result we want to dispatch a action with type user_loaded
    //and at the same level is payload, which is response data.
    //now if something goes wrong then catch error, else it wont triger
    axios
        .post("/api/auth/logout/", null, tokenConfig(getState))
        .then(res => {
            dispatch({ type: 'CLEAR_LEADS' });
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // If token, add to headers config
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
};