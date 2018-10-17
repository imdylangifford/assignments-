import React, { Component } from "react";
import Content from "./Components/Content/Content";
import Fade from "react-reveal/Fade";
import Whois from "./Components/Whois/Whois";
import Doro from "./Components/Doro/Doro";
import Dont from "./Components/Dont4Git/Dont4Git";
import Contact from "./Components/Contact/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
        <Whois />
        <Doro />
        <Dont />
        <Contact />
      </div>
    );
  }
}

export default App;
