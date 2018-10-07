import React, { Component } from "react";

export default class MattedPhoto extends Component {
  render() {
    return (
      <div className="matte-border matte-picture">
        <img src={this.props.image} alt="" />
      </div>
    );
  }
}
