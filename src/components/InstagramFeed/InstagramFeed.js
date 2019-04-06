import React, { Component } from "react";
import InstagramEmbed from "react-instagram-embed";
import "./stylesheet/InstagramFeedStyle.css";
export default class InstagramFeed extends Component {
  render() {
    // const options = {
    //   accessToken: "6f7025d2983a47e0860441c9075a3bf3",
    //   clientId: "f52a6e1cb4f14684a202ef456558cfb1",
    //   get: "akash.salunkhe1", // popular, user
    //   locationId: null,
    //   resolution: "standard_resolution", // thumbnail, low_resolution, standard_resolution
    //   sortBy: "none", // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    //   tagName: null,
    //   userId: 123
    // };

    return (
      <div className="instagramFeedPageContainer" id="instagram">
        <p className="instagramTitle">Latest Instagram Posts</p>

        <div className="instagramPostContainer">
          <div className="instagram-post">
            <InstagramEmbed
              url="https://www.instagram.com/p/BumIxxyhBNk"
              maxWidth={320}
              hideCaption={true}
              containerTagName="span"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
          <div className="instagram-post">
            <InstagramEmbed
              url="https://www.instagram.com/p/BqaA2ZZDlfw"
              maxWidth={320}
              hideCaption={true}
              containerTagName="span"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
          <div className="instagram-post">
            <InstagramEmbed
              url="https://www.instagram.com/p/BqfPUk6DP2f"
              maxWidth={320}
              hideCaption={true}
              containerTagName="span"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
        </div>
      </div>
    );
  }
}
