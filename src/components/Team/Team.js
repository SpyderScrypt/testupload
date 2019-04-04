import React, { Component } from "react";
import "./stylesheet/Team.css";
export default class Team extends Component {
  render() {
    return (
      <div>
        <p className="teamTitle">Our Team</p>
        <div className="teamFlexContainer">
          <div className="teamImages">
            <img
              height="290px"
              width="290px"
              // width="90px"
              src={"./1.jpg"}
              onMouseOver={e => (e.currentTarget.src = "./spider.png")}
              onMouseOut={e => (e.currentTarget.src = "./1.jpg")}
              alt="Team Images"
            />
          </div>
          <div className="teamImages">
            <img
              height="290px"
              width="290px"
              // width="90px"
              src={"./1.jpg"}
              onMouseOver={e => (e.currentTarget.src = "./spider.png")}
              onMouseOut={e => (e.currentTarget.src = "./1.jpg")}
              alt="Team Images"
            />
          </div>
          <div className="teamImages">
            <img
              height="290px"
              width="290px"
              // width="90px"
              src={"./1.jpg"}
              onMouseOver={e => (e.currentTarget.src = "./spider.png")}
              onMouseOut={e => (e.currentTarget.src = "./1.jpg")}
              alt="Team Images"
            />
          </div>
          <div className="teamImages">
            <img
              height="290px"
              width="290px"
              // width="90px"
              src={"./1.jpg"}
              onMouseOver={e => (e.currentTarget.src = "./spider.png")}
              onMouseOut={e => (e.currentTarget.src = "./1.jpg")}
              alt="Team Images"
            />
          </div>
        </div>
      </div>
    );
  }
}
