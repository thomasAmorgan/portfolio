import React, { Component } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

export default class Photography extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionAppearTimeout={300}
        transitionLeaveTimeout={200}
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={true}
      >
        <div>Photography</div>
      </CSSTransitionGroup>
    );
  }
}
