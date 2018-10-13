import React, { Component } from "react";
import { connect } from "react-redux";

class MattedPhoto extends Component {
  render() {
    let matteBorder = this.props.darkMode
      ? "matte-light-border"
      : "matte-dark-border";
    let darkOrLight = this.props.darkMode ? "light" : "dark";

    if (this.props.caption === undefined) {
      var style = { display: "none" };
    }

    return (
      <div className={"matte-picture " + matteBorder}>
        <img src={this.props.image} alt="" />
        <div style={style} className={"matte-caption " + darkOrLight}>
          {this.props.caption}
        </div>
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
