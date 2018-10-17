import React from "react";
import "./Dont4Git.css";

export default function Dont() {
  return (
    <div className="dontcontainer">
      <div className="dontleft">
        <h1 className="donttitle">Dont4Git</h1>
        <p className="donttitle">
          <a href="https://github.com/imdylangifford/dont4git" target="_blank">
            check the code
          </a>
        </p>
      </div>
      <div className="dontright">
        <p>
          An SMS text reminder that you lets you pick a number as well as a date
          and time to send a text message reminder too. Though its function is
          simple it involves some rather complex code.
        </p>
        <img
          className="dontimg"
          src="https://i.postimg.cc/0QQjvxKW/Screen-Shot-2018-10-12-at-11-07-19-AM.png"
          alt=""
        />
        <p>
          The front end is built with React to handle the inputs and data. The
          server uses the Twilio API to handle the text messages as well as
          node-cron to handle when the requests will be made.
        </p>
      </div>
    </div>
  );
}
