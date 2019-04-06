import React, { Component } from "react";
import "./stylesheet/NavbarStyle.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div className="logoContainer">
          <img src="./spider.png" alt="" height="70px" width="70px" />
        </div>
        <div className="linksContainer">
          <p className="linksContainer">
            <a href="#home" className="links">
              Home
            </a>
          </p>
          <p className="linksContainer">
            <a href="#team" className="links">
              Team
            </a>
          </p>
          <p className="linksContainer">
            <a href="#instagram" className="links">
              Instagram Feed
            </a>
          </p>
          <p className="linksContainer">
            <a href="#footer" className="links">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    );
  }
}
