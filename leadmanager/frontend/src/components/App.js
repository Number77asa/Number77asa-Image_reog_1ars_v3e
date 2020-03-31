import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//bring in the below to make the alerts component for data transfer errors
//Since we already have a provider we use alias AlertProvider
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

/*so it assumes estamos in /components folder?*/
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";


//so we want to bring our store.js and the provider from react-redux (package that integrates two together//

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth'


//import '/home/adduser/imagereog1ars-app3/loader.js'
//leader.js is believed to be needed fot jquery-static $ to work 

//this provider (above) we need to wrap around everything below; it takes in the redux store//

//So redux (chrom tool) tab:
//the diff: if you cr8 action like submit form & call action ; changes state --> youll see it in "Diff"

//& any action you commit or create will be shown here: //



/*provide toma store como prop; abajo*/

///Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }


    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component=
                                        {Dashboard} />
                                    <Route exact path="/register" component=
                                        {Register} />
                                    <Route exact path="/login" component=
                                        {Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        );
    }
}
/* we want ot insert main app into elmement with ID of app, next well cr8 a html file where this div with id of app resides*/
ReactDOM.render(<App />, document.getElementById("app"));

