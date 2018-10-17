import React from "react";
import Fade from "react-reveal/Fade";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <Fade bottom>
        <div className="contactcontainer">
          <div className="contactleft">
            <h1>get</h1>
            <h1>in</h1>
            <h1>touch</h1>
            <h1> → </h1>
          </div>
          <div className="contactright">
            <div className="contactinfo">
              <p>
                <a href="mailto:imdylangifford@gmail.com" target="_top">
                  by email
                </a>
              </p>
              <p>
                <a href="https://github.com/imdylangifford">on github</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/dylan-gifford-994a65149/">
                  on linkedin
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/imdylangifford/">
                  on instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
