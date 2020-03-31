/*so at same level as actions, go to src/components/Logins.js --> in order to interact with redux, 
need to bring in connect. 
?He doesnt specify why propstypes was brought in? perhaps for map to state? 
and bring in the login action just created. (up two levels)
Also bring in redirect from react-router-dom, b/c if you are loged in theres no sense in being brought back to login dashboard.
*/

import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from '../../actions/auth';

export class Login extends Component {
    //putting in component level state (has nothing to do with redux)
    state = {
        username: "",
        password: ""
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    //Now we want to fire off the action of in the on submit so: username and password are stored in component state.
    //thus, "this" is relative to what component your talking about!
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username,
            this.state.password);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Login
                        </button>
                        </div>
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>

        )
    }
}

/*
//now, below, we could put auth in the props key --> then could call this.props.auth.isauthenticed,
but since isauthenticated is only thing needed, well set that as prop ..so isauthenitcated and set it to
state.auth.isAuthenitcatd
 
const mapStateToProps = state => ({
            auth: state.auth
    })
    */
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

//were passing in login action {login}
export default connect(mapStateToProps, { login })(Login);
