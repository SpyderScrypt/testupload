import React, { Component } from "react";
import "./stylesheet/HeroText.css";
export default class HeroText extends Component {
  render() {
    return (
      <div className="heroTextContainer">
        <p className="heroTitleText">SpiderScrypt</p>
        <p className="heroSubText">
          Integration of latest Tech and pure passion
        </p>
      </div>
    );
  }
}
