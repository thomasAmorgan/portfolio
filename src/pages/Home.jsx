import React, { Component } from "react";
import MattedPhoto from "../components/MattedPhoto";
import LF from "../images/LF004_web.jpg";
import portrait from "../images/portrait_web.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="tagline">
          <h1>I'm Thomas Morgan,</h1>
          <p>a software engineer, designer, & Photographer.</p>
        </div>

        <MattedPhoto image={LF} />

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
      </div>
    );
  }
}
