import React, { Component } from "react";
import "./stylesheet/Team.css";
export default class Team extends Component {
  render() {
    return (
      <div id="team">
        <p className="teamTitle">Our Team</p>
        <div className="teamFlexContainer">
          <div className="teamImages">
            <a className="teamDescription" href="www.google.com">
              Akash Salunkhe
            </a>
            <a
              className="teamDescription"
              href="https://medium.com/@spiderscrypt"
            >
              Profile Link
            </a>
          </div>
          <div className="teamImages">
            <a className="teamDescription" href="www.google.com">
              Akash Salunkhe
            </a>
            <a
              className="teamDescription"
              href="https://medium.com/@spiderscrypt"
            >
              Profile Link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
