// any actions we want to fire off will go in here; this is where well make all our http requests
//well use axios , there is fetch api or others aswell
//install axios -- well be makign a asynchronouse request --> i.e. to localhost 8000/api/leads
//rsrch this asyncrhonous vs not

//well use dispatch action to reducer; such as getleads --> then the prmisback (.then) will give response
//we want to dispatch get leads action to the reducer so dispatch( pass in object with type); memeber in reducer
//were evaluating a action.type so it fires the return in index.js
//the payload are the leads returned from server (response data from server0 (again closely alinged to reducers/index.js)
//.catch in case theres a error; eventually will make errors reducer that sends to our components

//So how do we actually call this? looking at /api/leads component (the leads tab) -->
// see src/omponents/leads/leads.js; in order to wrk with redux from any component need to use connect


import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
    //putting in component level state (has nothing to do with redux)
    axios
        .get("/api/leads/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// DELETE LEAD
//the endpoint here is the 1st argument for delete
export const deleteLead = id => (dispatch, getState) => {
    axios
        .delete(`/api/leads/${id}/`, tokenConfig(getState))
        //the above gets or deletes from server & belowe deletes from UI (independent)
        //replace .delete with .get to see how itl stay in server and not ui
        .then(res => {
            dispatch(createMessage({ deleteLead: "Lead Deleted" }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch(err => console.log(err));
};
//we blv the console.log eror is visible at redux-extension/console
// ADD LEAD
export const addLead = lead => (dispatch, getState) => {
    axios
        .post("/api/leads/", lead, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addLead: "Lead Added" }));
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
    //  So, we replaced  console.log(err.response.data)); with the above
    //when you get an error, it should get added to state

};