import React from "react";
import "./Home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/Ameen-Here"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/ameen-noushad-888b79242/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://twitter.com/Ameen_Here_6"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
