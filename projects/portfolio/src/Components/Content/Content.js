import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="view">
        <div className="text">
          <h1>
            hi
            <span> 😀</span>
          </h1>
          <h1>my name is dylan </h1>
          <h1>and I love to code.</h1>
          <h1>i'm a web developer 👨‍💻</h1>
          <h1>based in salt lake city.</h1>
        </div>
        <div className="stuff">
          <h1>things ive built ⬇️</h1>
        </div>
      </div>
    );
  }
}
