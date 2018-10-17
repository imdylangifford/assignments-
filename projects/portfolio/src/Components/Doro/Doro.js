import React from "react";
import "./Doro.css";

export default function Doro() {
  return (
    <div className="dorocontainer">
      <div className="doroleft">
        <h1 className="dorotitle">Doro</h1>
        <p className="dorotitle">
          <a target="_blank" href="https://github.com/imdylangifford/Doro">
            check the code
          </a>
        </p>
        <p className="dorotitle">
          <a href="https://doro.surge.sh" target="_blank">
            live example
          </a>
        </p>
      </div>
      <div className="dororight">
        <p>
          I love to learn. To do so more efficiently I built Doro, a Pomodoro
          based study timer to help me study and learn new technologies more
          efficiently.
        </p>
        <img
          className="doroimg"
          src="https://i.postimg.cc/kM2NFPYv/Screen-Shot-2018-10-12-at-11-07-37-AM.png"
          alt=""
        />
        <p>
          This project was built with React. The timer functionality is coded
          entirely from vanilla JS in an effort to better understand the
          setTimeout and setInterval methods.
        </p>
      </div>
    </div>
  );
}
