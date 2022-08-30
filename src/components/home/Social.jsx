import React, { useState } from "react";
import "./Home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/Ameen-Here"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>{" "}
        <span className="social__small-Text">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ameen-noushad-888b79242/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>{" "}
        <span className="social__small-Text">LinkedIn</span>
      </a>
      <a
        href="https://twitter.com/Ameen_Here_6"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter-alt"></i>{" "}
        <span className="social__small-Text">Twitter</span>
      </a>
    </div>
  );
};

export default Social;
