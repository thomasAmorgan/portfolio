import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    let darkmode = this.props.darkMode;
    let linkClass = darkmode ? "navlink light-text" : "navlink dark-text";
    let navbarClass = darkmode ? "navbar nav-light" : "navbar nav-dark";

    return (
      <div className={navbarClass}>
        {/* <div className="navbar-blur" /> */}
        <div className="navbar-links">
          <div className="navbar-container">
            <NavLink
              to="/"
              className={linkClass}
              exact
              activeClassName="navlink-active"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={linkClass}
              activeClassName="navlink-active"
            >
              Projects
            </NavLink>
            <NavLink
              to="/photography"
              className={linkClass}
              activeClassName="navlink-active"
            >
              Photography
            </NavLink>
            <NavLink
              to="/resume"
              className={linkClass}
              activeClassName="navlink-active"
            >
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    darkMode: state.darkOrLight.darkMode
  };
}

export default connect(mapStateToProps)(Navbar);
