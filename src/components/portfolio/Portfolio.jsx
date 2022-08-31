import "./Portfolio.css";
import WorkImg from "../../assets/work1.jpg";

import React from "react";

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__category">
        <div className="portfolio__category-title portfolio__category-title-active">
          Featured
        </div>
        <div className="portfolio__category-title">Full stack</div>
        <div className="portfolio__category-title">Games</div>
        <div className="portfolio__category-title">Bots</div>
        <div className="portfolio__category-title">API</div>
      </div>

      <div className="portfolio__lists container grid">
        <div className="portfolio__list">
          <div className="portfolio__left">
            <img className="portfolio__img" src={WorkImg} />
            <div className="portfolio__links">
              <button className="portfolio__link">Source Code</button>
              <button className="portfolio__link">Live</button>
            </div>
          </div>

          <div className="portfolio__description">
            <h2 className="portfolio__header">Asset Tracker</h2>
            <p className="portfolio__sub-description">
              Asset Tracker helps you track all your financial assets. In this
              website, the users will get live day to day update of their stocks
              as well as they can track their personal assets.
            </p>

            <h2 className="portfolio__header">What problem it solves</h2>
            <p className="portfolio__sub-description">
              Users buy assets from different platforms available in the market,
              to track these assets manually as well as to calculate profit/loss
              is a time consuming task. Asset Tracker solves this problem
            </p>

            <h2 className="portfolio__header">Features</h2>
            <p className="portfolio__sub-description">
              Live update every 24 hours <span className="bulletin">*</span>{" "}
              Graphical representation using charts{" "}
              <span className="bulletin">*</span> Authentication and secure
              datas <span className="bulletin">*</span> Local assets with update
              price feature <span className="bulletin">*</span> Cross platform
              and devices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
