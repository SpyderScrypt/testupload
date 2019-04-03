import React, { Component } from "react";
import "./stylesheet/NavbarStyle.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div>
          <img src="./spider.png" alt="" />
        </div>
        <div className="linksContainer">
          <p className="links">Home</p>
          <p className="links">About</p>
          <p className="links">Our Projects</p>
          <p className="links">Contact Us</p>
          <p className="links">Blog</p>
        </div>
      </div>
    );
  }
}
