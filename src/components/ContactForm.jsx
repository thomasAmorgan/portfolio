import React, { Component } from "react";
import { connect } from "react-redux";

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

  handleSubmit = (e, message) => {
    e.preventDefault();

    // let formData = {
    //   formName: this.state.name,
    //   formEmail: this.state.email,
    //   formSubject: this.state.subject,
    //   formMessage: this.state.message
    // };

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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            name="fullName"
            type="text"
            className={darkOrLightClass}
            required
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className={darkOrLightClass}
            required
            onChange={this.handleChange}
          />

          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            type="text"
            className={darkOrLightClass}
            required
            onChange={this.handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            onChange={this.handleChange}
            className={darkOrLightClass}
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
