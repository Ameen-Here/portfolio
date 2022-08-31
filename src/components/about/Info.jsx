import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bxs-award about__icon"></i>
        <h3 className="about__title">Self Taught</h3>
        <span className="about__subtitle">
          Teaching myself to code for the past 3 years
        </span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Always happy to help</h3>
        <span className="about__subtitle">
          {" "}
          Open to collaborating alongside a great team with wonderful ideas
        </span>
      </div>
    </div>
  );
};

export default Info;
