import React, { Component } from "react";
import { connect } from "react-redux";

class MattedPhoto extends Component {
  render() {
    let matteClass = this.props.darkMode
      ? "matte-picture matte-light"
      : "matte-picture matte-dark";

    return (
      <div className={matteClass}>
        <img src={this.props.image} alt="" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    darkMode: state.darkOrLight.darkMode
  };
}

export default connect(mapStateToProps)(MattedPhoto);
