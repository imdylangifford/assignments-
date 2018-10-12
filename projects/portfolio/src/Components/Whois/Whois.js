import React from "react";
import "./Whois.css";

export default function Whois() {
  return (
    <div className="whoiscontainer">
      <div className="whoisleft">
        <h1 className="title">WhoIs Lookup</h1>
        <p className="whoislink title">
          <a href="">check the code</a>{" "}
        </p>
      </div>
      <div className="whoisright">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          veritatis soluta, quae libero, maiores unde saepe, dolorem quidem
          rerum sed eos vel facilis! Porro asperiores, quasi rerum excepturi
          temporibus deleniti.
        </p>
        <img
          className="whoisimg"
          src="https://i.postimg.cc/GtTpBQQv/Screen-Shot-2018-10-12-at-11-08-32-AM.png"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          commodi officiis ratione temporibus quo, soluta animi, inventore
          molestias distinctio minus eum recusandae unde adipisci! Eligendi,
          recusandae? Officia fugiat sit iusto.
        </p>
      </div>
    </div>
  );
}
