import React from "react";
//member we need to get the auth state; check to see if were authenticated
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//the component passed in is whatever is in app.js; here its {Dashboard}
//we also need auth from redux..the auth state
//if theres any other props that are added, well use the rest operator for that ..rest
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            //if its between firing event or action and getting response from request, it will be in loading state
            if (auth.isLoading) {
                return <h2>Loading...</h2>;
                //else if not loged in , redirect
            } else if (!auth.isAuthenticated) {
                return <Redirect to="/login" />;
            } else {
                return <Component {...props} />;
            }
        }}
    //Route above will include any of hte rest parameters passed in , and render-returns the component
    />
);

//takes in state and we want the auth from the auth reducer

const mapStateToProps = state => ({
    auth: state.auth
});

//below gives us access to this.props.auth
export default connect(mapStateToProps)(PrivateRoute);