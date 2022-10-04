import React, { useState } from "react";
import Modal from "./Modal";
import "./Portfolio.scss";
import list from "./projectList";
import textShortner from "./textShortner";

const Portfolio = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState(null);
  const hundleClick = (item) => {
    setActive(!active);
    setData(item);
  };

  return (
    <div className="portfolio-container" id="Projects">
      <div className="portfolio-header">
        <h2 className="heading">Featured Projects</h2>
        <a href="#/" className="shadow_effect view_more_btn">
          View more...
        </a>
      </div>
      <div className="portfolio-content">
        {list.map((item) => (
          <div key={item.id} className="portfolio-card">
            <img className="card-image" src={item.image} alt={item.title} />
            <h3 className="card-title">{item.title}</h3>
            <p>{item.date}</p>
            <p>{textShortner(item.description)}</p>
            <div className="pr-card-btn">
              <a href="#/" onClick={() => hundleClick(item)}>
                View Details
              </a>
            </div>
            <div className={active === true ? "active" : "hidden"}>
              <Modal
                hundleClick={hundleClick}
                image={data && data.image}
                title={data && data.title}
                github={data && data.github}
                live={data && data.live}
                tech={data && data.tech}
                date={data && data.date}
                description={data && data.description}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
