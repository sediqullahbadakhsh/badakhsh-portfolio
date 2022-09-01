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
      <FaGithub />
      <FaTwitterSquare />
      <FaLinkedin />
      <FaAngellist />
      <FaDownload />
    </div>
    <div className="home_intro">
      <h2>Hi I am</h2>
      <h1>Sediqullah Badakhsh</h1>
      <h2>I am a Full Stack Web Developer</h2>
      <p>
        I can help you build a product , feature or website Look through some of
        my work and experience! If you like what you see and have a project you
        need coded, don&apos;t hestiate to contact me.
      </p>
      <FaArrowDown />
    </div>
  </div>
);

export default Home;
