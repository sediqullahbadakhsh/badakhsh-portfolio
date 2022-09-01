import "./Home.scss";
import React from "react";
import {
  FaGithub,
  FaTwitterSquare,
  FaLinkedin,
  FaAngellist,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

const Home = () => (
  <div className="home_container" id="home">
    <div className="home_social">
      <a href="#/">
        <FaGithub />
      </a>
      <a href="#/">
        <FaTwitterSquare />
      </a>
      <a href="#/">
        <FaLinkedin />
      </a>
      <a href="#/">
        <FaAngellist />
      </a>
      <a href="#/">
        <FaDownload />
      </a>
    </div>
    <div className="home_intro">
      <h2>HEY! I AM</h2>
      <h1>Sediqullah Badakhsh</h1>
      <h2>I&apos;m a Full Stack Web Developer</h2>

      <p>
        <a href="#about">
          <FaArrowDown />
        </a>
      </p>
    </div>
  </div>
);

export default Home;
