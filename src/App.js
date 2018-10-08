import React, { Component } from "react";
import { Route, Switch } from "react-router";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import Design from "./pages/Design";
import Resume from "./pages/Resume";

class App extends Component {
  constructor() {
    super();

    this.state = {
      darkmode: true,
      btnClass: "dark-or-light-btn light",
      appTheme: "app dark"
    };

    this.darkModeSwitch = this.darkModeSwitch.bind(this);
  }

  darkModeSwitch = () => {
    this.setState(state => ({
      darkmode: !state.darkmode,
      btnClass: !state.darkmode
        ? "dark-or-light-btn light"
        : "dark-or-light-btn dark",
      appTheme: !state.darkmode ? "app dark" : "app light"
    }));
  };

  render() {
    return (
      <CSSTransitionGroup
        transitionName="fade"
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}
        transitionAppear={true}
      >
        <div className={this.state.appTheme}>
          <Navbar darkmode={this.state.darkmode} />
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

          <div className={this.state.btnClass} onClick={this.darkModeSwitch}>
            {this.state.darkmode ? "light" : "dark"}
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default App;
