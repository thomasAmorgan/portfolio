import React, { Component } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import MattedPhoto from "../components/MattedPhoto";
import lightningField from "../images/LF004_web.jpg";
import portrait from "../images/portrait_web.jpg";
import ContactForm from "../components/ContactForm";

export default class Home extends Component {
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
        <div className="home">
          <div className="tagline">
            <h1>Thomas Morgan,</h1>
            <p>software engineer, designer, & photographer.</p>
          </div>

          <MattedPhoto image={lightningField} caption="Lightning Field #4" />

          <div className="section">
            <div className="text-section">
              <h2>About</h2>
              <p>
                I’m a recent grad from the University of Kentucky, and currently
                working as a web-developer intern for Comupter Services Inc. I
                love to design and develop websites, and create photographs.
              </p>
            </div>

            <MattedPhoto image={portrait} />
          </div>

          <ContactForm />
        </div>
      </CSSTransitionGroup>
    );
  }
}
