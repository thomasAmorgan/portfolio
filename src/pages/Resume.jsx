import React, { Component } from "react";
import resumePDF from "../images/Thomas_Morgan_resume_f18_v2.pdf";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import SkillsList from "../components/SkillsList";

export default class Resume extends Component {
  render() {
    let developerSkills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue",
      "PHP",
      "SQL",
      "WordPress",
      "C++",
      "Java",
      "Python"
    ];

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
        <div className="resume">
          <div className="personal-info">
            <h2>Thomas A. Morgan</h2>
            <h4>
              <a href={resumePDF}>PDF</a>
            </h4>
            <hr />
            <div className="find-me">
              <div>316 Memory Lane, Lexington KY 40502</div>
              <div>thomasmorgan233@gmail.com</div>
            </div>
            <div className="resume-links">
              <a href="https://github.com/thomasAmorgan">GitHub</a>
            </div>
          </div>
          <div className="academic-experience">
            <h3>Education</h3>
            <hr />
            <div>
              <div className="academic-school">
                <h4>University of Kentucky</h4>
                <p>Lexington, KY</p>
              </div>
              <div className="academic-degrees">
                <p>Bachelor of Science in Computer Science</p>
                <p>Minor in Photography</p>
              </div>
              <p className="academic-honors">Magnum Cum Laude</p>
            </div>
          </div>
          <div className="skills-group">
            <h3>Skills</h3>
            <hr />
            <div className="skills-lists">
              <div className="skills-developer">
                <h4>Developer Skills</h4>

                <SkillsList skills={developerSkills} />

                <div>
                  <ul>
                    <li>HTML, CSS, JavaScript (Vue.js, React.js)</li>
                    <li>PHP, SQL, Wordpress </li>
                    <li>C++, Python, Java</li>
                    <li>Unix, Linux </li>
                  </ul>
                </div>
              </div>
              <div className="skills-design-photo">
                <h4>Design/Photography Skills</h4>
                <div>
                  <ul>
                    <li>Adobe Photoshop & Premiere</li>
                    <li>Adobe Lightroom & Bridge</li>
                    <li>Sketch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="work-experience-group">
            <h3>Work Expeirence & Projects</h3>
            <hr />
            <div className="work-experience-text">
              <div className="work-header">
                <h4>Computer Services Inc. - Web Developer Intern</h4>
                <p>Feburary 2018 - Present</p>
              </div>
              <div className="work-list">
                <ul>
                  <li>
                    Developed sites inside a custom version of WordPress
                    Multisite Core from mock-ups provided by customers, and
                    reviewed sites to ensure ADA compliance.
                  </li>
                  <li>
                    Coordinated with a team to manage sites. Met weekly for
                    SCRUM and weekly task management sessions.
                  </li>
                  <li>
                    Implemented a scalable multi-map plugin integrated with
                    Google Maps and CSI’s Product API to retrieve and render
                    branch locations in an interactive web component.
                  </li>
                </ul>
              </div>
            </div>
            <div className="work-experience-text">
              <div className="work-header">
                <h4>Senior Design Project - Warp Arena</h4>
                <p>January - May 2018</p>
              </div>
              <div className="work-list">
                <ul>
                  <li>
                    We were tasked with creating an electronic version of a
                    board game, Warp Arena, for our customer Tony Elam. The game
                    was required to be a web based app to maximize
                    compatibility.
                  </li>
                  <li>
                    Worked in a team of five using a git repo for version
                    control, would meet weekly to discuss updates, challenges,
                    and if we needed to change course on certain features.
                  </li>
                  <li>
                    Designed and implemented an interactive hexagonal grid
                    system using a GitHub repo called Honeycomb and a JavaScript
                    graphics API called PixiJS.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="leadership-experience-group">
            <h3>Leadership</h3>
            <hr />
            <div className="leadership-experience-text">
              <div className="leadership-header">
                <h4>Triangle Fraternity University of Kentucky Chapter</h4>
                <p>December 2014 - May 2018</p>
              </div>
              <div className="leadership-list">
                <div className="leadership-list-item">
                  <div className="leadership-list-header">
                    <h5>Executive Council - Secretary</h5>
                    <p>August 2015 - April 2016</p>
                  </div>
                  <ul>
                    <li>
                      Kept minutes, maintained email list-serves, organized
                      composites, communicated with other Greek organizations
                      and Alumni, and helped other members of the Executive
                      Council as needed.
                    </li>
                  </ul>
                </div>
                <div className="leadership-list-item">
                  <div className="leadership-list-header">
                    <h5>Photography Chair</h5>
                    <p>April 2016 – May 2018</p>
                  </div>
                  <ul>
                    <li>
                      Captured, edited, and organized pictures from chapter
                      events, intramurals, and philanthropies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="leadership-experience-text">
              <div className="leadership-header">
                <h4>Engineering Student Council (ESC)</h4>
              </div>
              <div className="leaderSecretaryship-list-item">
                <div>
                  <h5>Secretary</h5>
                  <p>August 2015 – April 2016</p>
                </div>
                <ul>
                  <li>
                    Maintained the ESC WordPress site, email list-serve, took
                    attendance during meeting.
                  </li>
                  <li>
                    ESC is a student organization responsible for furthering the
                    development of the engineering student body and acts as the
                    liaison to the faculty, administration and Alumni
                    Association to express student concerns.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}
