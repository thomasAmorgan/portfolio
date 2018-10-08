import React, { Component } from "react";
import { Route, Switch } from "react-router";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import Design from "./pages/Design";
import Resume from "./pages/Resume";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    let theme = this.props.darkMode ? "app dark" : "app light";
    let btnClass = this.props.darkMode
      ? "dark-or-light-btn light"
      : "dark-or-light-btn dark";
    let btnText = this.props.darkMode ? "light" : "dark";

    return (
      <CSSTransitionGroup
        transitionName="fade"
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}
        transitionAppear={true}
      >
        <div className={theme}>
          <Navbar />
          <div className="all-content">
            <div className="page-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/photography" component={Photography} />
                <Route path="/design" component={Design} />
                <Route path="/resume" component={Resume} />
              </Switch>
            </div>
          </div>

          <div
            className={btnClass}
            onClick={this.props.darkMode ? this.props.light : this.props.dark}
          >
            {btnText}
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    darkMode: state.darkOrLight.darkMode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dark: () => dispatch({ type: "DARK" }),
    light: () => dispatch({ type: "LIGHT" })
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
