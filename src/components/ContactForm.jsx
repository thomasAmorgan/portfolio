import React, { Component } from "react";
import { connect } from "react-redux";
import * as emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      email: "",
      subject: "",
      message: ""
    };

    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();

    const serviceID = "gmail";
    const templateID = "template_cxiSiQoL";
    const userID = "user_OKncHQwKmN3cW8o9LyGz5";

    emailjs.sendForm(serviceID, templateID, "#contact-form", userID).then(
      res => {
        console.log("Success: ", res.status, res.text);
      },
      error => {
        console.log("Failed: ", error);
      }
    );

    this.setState({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  render() {
    let darkOrLightClass = this.props.darkMode ? "input-light" : "input-dark";

    return (
      <div className="contact-form">
        <h2>Contact</h2>
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            name="fullName"
            type="text"
            className={darkOrLightClass}
            placeholder="full name..."
            required
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className={darkOrLightClass}
            placeholder="email..."
            required
            onChange={this.handleChange}
          />

          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            type="text"
            className={darkOrLightClass}
            placeholder="subject..."
            required
            onChange={this.handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            onChange={this.handleChange}
            className={darkOrLightClass}
            placeholder="message..."
          />

          <input type="submit" className={darkOrLightClass} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    darkMode: state.darkOrLight.darkMode
  };
}

export default connect(mapStateToProps)(ContactForm);
