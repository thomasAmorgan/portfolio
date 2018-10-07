import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import Design from "./pages/Design";
import Resume from "./pages/Resume";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="page-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/photography" component={Photography} />
            <Route path="/design" component={Design} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
        <div className="dark-or-light-btn">dark | light</div>
      </div>
    );
  }
}

export default App;
