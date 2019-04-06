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
    return (
      <div className="App">
        <Navbar />
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
