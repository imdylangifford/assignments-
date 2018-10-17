import React from "react";
import "./Whois.css";

export default function Whois() {
  return (
    <div className="whoiscontainer">
      <div className="whoisleft">
        <h1 className="title">Domain Lookup</h1>
        <p className="title">
          <a
            className="whoislink"
            href="https://github.com/imdylangifford/Domain-Lookup"
            target="_blank"
          >
            check the code
          </a>
        </p>
        <p className="title">
          <a
            className="whoislink"
            href="https://domainlookup.surge.sh"
            target="_blank"
          >
            live example
          </a>
        </p>
      </div>
      <div className="whoisright">
        <p>
          Domain Lookup is a tool that quickly and efficiently lets you get
          information on nearly any domain. The simple design aesthetic lets you
          get the information you want without any clutter.
        </p>
        <img
          className="whoisimg"
          src="https://i.postimg.cc/GtTpBQQv/Screen-Shot-2018-10-12-at-11-08-32-AM.png"
          alt=""
        />
        <p>
          This front end project was built with React using a clean component
          based archiecture. Axios is used to make the API calls and Particle JS
          was added to create a minimal background effect.
        </p>
      </div>
    </div>
  );
}
