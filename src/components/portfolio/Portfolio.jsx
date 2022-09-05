import React from "react";
import "./Portfolio.scss";
import list from "./projectList";

const Portfolio = () => (
  <div className="portfolio-container" id="portfolio">
    <div className="portfolio-header">
      <h2>Portfolio</h2>
      <a href="#/">More Projects</a>
    </div>
    <div className="portfolio-content">
      {list.map((item) => (
        <div key={item.id} className="portfolio-card">
          <img className="card-image" src={item.image} alt={item.title} />
          <h3 className="card-title">{item.title}</h3>
          <div className="card-techs">
            {item.tech.map((tec) => (
              <p key={tec} className="techs">
                {tec}
              </p>
            ))}
          </div>
          <div className="card-link">
            <a href={item.github}>Github</a>
            <a href={item.live}>Preview</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
