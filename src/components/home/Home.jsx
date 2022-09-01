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
  <div className="home_container">
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
        I can help you build a product, feature or website Look through some of
        my work and experience! If you like what you see and have a project you
        need coded, don&apos;t hestiate to contact me.
      </p>
      <p>
        <a href="#/">
          <FaArrowDown />
        </a>
      </p>
    </div>
  </div>
);

export default Home;
