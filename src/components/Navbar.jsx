import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* <div className="navbar-blur" /> */}
        <div className="navbar-links">
          <NavLink to="/" className="navlink" activeClassName="navlink-active">
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="navlink"
            activeClassName="navlink-active"
          >
            Projects
          </NavLink>
          <NavLink
            to="/photography"
            className="navlink"
            activeClassName="navlink-active"
          >
            Photography
          </NavLink>
          <NavLink
            to="/resume"
            className="navlink"
            activeClassName="navlink-active"
          >
            Resume
          </NavLink>
        </div>
      </div>
    );
  }
}
