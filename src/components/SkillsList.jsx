import React, { Component } from "react";

export default class SkillsList extends Component {
  render() {
    return (
      <div className="skill-list">
        {this.props.skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    );
  }
}
