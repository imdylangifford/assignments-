import React, { Component, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import sound from "./assets/audio/Fart-Common-Everyday-Fart_Mike-Koenig.mp3";

class App extends Component {
  constructor() {
    super();

    this.state = {
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white"
    };
    this.blackOrWhite = this.blackOrWhite.bind(this);
    this.topPurple = this.topPurple.bind(this);
    this.bottomLeftBlue = this.bottomLeftBlue.bind(this);
    this.bottomRightBlue = this.bottomRightBlue.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.audio = createRef();
  }
  blackOrWhite() {
    if (this.state.box1 === "white") {
      this.setState({
        box1: "black",
        box2: "black",
        box3: "black",
        box4: "black"
      });
    } else {
      this.setState({
        box1: "white",
        box2: "white",
        box3: "white",
        box4: "white"
      });
    }
  }

  topPurple() {
    this.setState({
      box1: "purple",
      box2: "purple",
      box3: this.state.box3,
      box4: this.state.box4
    });
  }

  bottomLeftBlue() {
    this.setState({
      box1: this.state.box1,
      box2: this.state.box2,
      box3: "blue",
      box4: this.state.box4
    });
  }

  bottomRightBlue() {
    this.setState({
      box1: this.state.box1,
      box2: this.state.box2,
      box3: this.state.box3,
      box4: "blue"
    });
  }

  playAudio() {
    console.log("sound played");
    this.audio.current.play();
  }

  render() {
    return (
      <div className="App">
        <div id="box1" style={{ background: this.state.box1 }}>
          1
        </div>
        <div id="box2" style={{ background: this.state.box2 }}>
          2
        </div>
        <div id="box3" style={{ background: this.state.box3 }}>
          3
        </div>
        <div id="box4" style={{ background: this.state.box4 }}>
          4
        </div>
        <button onClick={this.blackOrWhite}>black or white</button>
        <button onClick={this.topPurple}>top half purple</button>
        <button onClick={this.bottomLeftBlue}>bottom left blue</button>
        <button onClick={this.bottomRightBlue}>bottom right blue</button>
        <button onClick={this.playAudio}>play sound</button>
        <audio src={sound} ref={this.audio} />
      </div>
    );
  }
}

function checkIp(str) {
  const split = str.split(".");
  if (split.length === 4) {
    for (let i = 0; i < split.length; i++) {
      split[i] *= 1;
      if (split[i] > 255 || isNaN(split[i])) return "not valid";
    }
    return "valid";
  }
  return "not valid";
}

export default App;
