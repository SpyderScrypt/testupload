import React, { Component } from "react";
import "./stylesheet/NavbarStyle.css";
// asd
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div className="logoContainer">
          <img src={this.props.logoPath} alt="" height="100%" width="100%" />
        </div>
        <div className="linksContainer">
          {this.props.title.map(title => {
            return (
              <p className="linksContainer">
                <a href={`${title.link}`} className="links">
                  {title.title}
                </a>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}
