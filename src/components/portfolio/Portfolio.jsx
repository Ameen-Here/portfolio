import "./Portfolio.css";
import WorkImg from "../../assets/work1.jpg";
import ReactPlayer from "react-player";

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
            <ReactPlayer
              className="portfolio__video"
              width="100%"
              height="100%"
              url="https://youtu.be/joKw1EtBVhw"
              controls={true}
              light={true}
            />

            <div className="portfolio__links">
              <a
                href="https://github.com/Ameen-Here/Asset-Tracker-Website"
                target="_blank"
                className="portfolio__link"
              >
                Code <i class="contact__button-icon bx bxl-github"></i>
              </a>
              <a
                href="https://fierce-citadel-85684.herokuapp.com/"
                target="_blank"
                className="portfolio__link"
              >
                Live <i class="contact__button-icon bx bxs-window-alt"></i>
              </a>
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
              price feature
            </p>
          </div>
        </div>

        <div className="portfolio__list">
          <div className="portfolio__left">
            <ReactPlayer
              className="portfolio__video"
              width="100%"
              height="100%"
              url="https://youtu.be/TRG5cUcJsx0"
              controls={true}
              light={true}
            />
            <div className="portfolio__links">
              <a
                href="https://github.com/Ameen-Here/Review-Generator-API"
                target="_blank"
                className="portfolio__link"
              >
                Code <i class="contact__button-icon bx bxl-github"></i>
              </a>
              <a
                href="https://reviewgenerator-16007.web.app/"
                target="_blank"
                className="portfolio__link"
              >
                Live <i class="contact__button-icon bx bxs-window-alt"></i>
              </a>
            </div>
          </div>

          <div className="portfolio__description">
            <h2 className="portfolio__header">Review Generator API</h2>
            <p className="portfolio__sub-description">
              Review Generator API generates random testimonials for your
              application. 1000's random of reviews with 1000's of unique names
              from different parts of the world and random rating system, all
              customisable by user.
            </p>

            <h2 className="portfolio__header">What problem it solves</h2>
            <p className="portfolio__sub-description">
              TIred of copy and pasting lorem for user's testimonial text.It
              solves this issue by creating random reviews for your mock/demo
              shopping website, product pages, etc.
            </p>

            <h2 className="portfolio__header">Features</h2>
            <p className="portfolio__sub-description">
              API limit update every 24 hours{" "}
              <span className="bulletin">*</span> 1000's of unique reviews{" "}
              <span className="bulletin">*</span> 1000's of unique names from
              different parts of the world <span className="bulletin">*</span>{" "}
              Responsive and interactive documentation page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
