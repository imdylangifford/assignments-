import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Drag the W3Schools image into the rectangle:</p>

        <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)" />
        <img
          id="drag1"
          src="img_logo.gif"
          draggable="true"
          ondragstart="drag(event)"
          width="336"
          height="69"
        />
      </div>
    );
  }
}

export default App;
