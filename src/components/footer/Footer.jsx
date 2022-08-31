import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">AN</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Ameen-Here"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-github"></i>{" "}
            <span className="social__small-Text">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ameen-noushad-888b79242/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-linkedin-square"></i>{" "}
            <span className="social__small-Text">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/Ameen_Here_6"
            className="home__social-icon"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>{" "}
            <span className="social__small-Text">Twitter</span>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Ameen Noushad. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
