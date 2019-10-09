import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

/*so it assumes estamos in /components folder?*/
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

/*provide toma store como prop; abajo*/

class App extends Component {
    render() {
        return (

            <Fragment>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </Fragment>

        );
    }
}
/* we want ot insert main app into elmement with ID of app, next well cr8 a html file where this div with id of app resides*/
ReactDOM.render(<App />, document.getElementById("app"));

