import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import ParticleBody from "./components/ParticleBoldy/ParticleBody";
import HeroText from "./components/HeroText/HeroText";
import Team from "./components/Team/Team";
import InstagramFeed from "./components/InstagramFeed/InstagramFeed";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {

    let titleObj = [
      {
        title:"Home",
        link:"#home"
      },
      {
        title:"Team",
        link:"#team"
      },
      {
        title:"Instagram Feed",
        link:"#instagram"
      },
      {
        title:"Contact Us",
        link:"#footer"
      },
      
    ]

    return (
      <div className="App">
        <Navbar logoPath="./images/spider.png" title = {titleObj} />
        <ParticleBody />
        <HeroText />
        <Team />
        <InstagramFeed />
        <Footer />
      </div>
    );
  }
}

export default App;
