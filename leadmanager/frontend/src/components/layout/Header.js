import React, { Component } from "react";
import { Link } from "react-router-dom";
//The two imports below are for: make a logout link -->  to go hearder.js, and if were loged in show these linkes else show others so:
//Lets check that were logged in --> so we do that we import { connect } from "react-redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import logo from "./logo.png";
import searchIcon from "./search-icon.png";
import './index.css';


export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}` : ""}</strong>
                </span>
                <li className="nav-item">
                    <button
                        onClick={this.props.logout}
                        className="nav-link btn btn-info btn-sm text-light"
                    >
                        Logout
          </button>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
          </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">
                            DOC ANNIE'S SUPER FOODS</a>
                    </div>


                    <nav className="menu">
                        <h1 style={{
                            backgroundImage: 'url(' + logo + ')'
                        }} className="menu__logo">Epic Co.</h1>

                        <div className="menu__right">
                            <ul className="menu__list">
                                <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
                            </ul>

                            <button style={{
                                backgroundImage: 'url(' + searchIcon + ')'
                            }} className="menu__search-button"></button>

                            <form className="menu__search-form hide" method="POST">
                                <input className="menu__search-input" placeholder="Type and hit enter" />
                            </form>
                        </div>
                    </nav>
                </div>

                {isAuthenticated ? authLinks : guestLinks}

            </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Header);