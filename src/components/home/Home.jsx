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
      <a href="https://github.com/sediqullahbadakhsh" target="blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/sediqullah6" target="blank">
        <FaTwitterSquare />
      </a>
      <a href="https://www.linkedin.com/in/sediqullah/" target="blank">
        <FaLinkedin />
      </a>
      <a href="https://angel.co/u/sediqullah-badakhsh-1" target="blank">
        <FaAngellist />
      </a>
      <a
        href="https://docs.google.com/document/d/1uToMs4H9BfkTT9jVL1Of0LWZHKShzgLbIJipdNBryG0/edit?usp=sharing"
        target="blank"
      >
        <FaDownload />
      </a>
    </div>
    <div className="home_intro">
      <h2>HEY! I AM</h2>
      <h1>Sediqullah Badakhsh</h1>
      <h2>I&apos;m a Full Stack Web Developer</h2>

      <p>
        <a href="#about" className="arrow-down">
          <FaArrowDown />
        </a>
      </p>
    </div>
  </div>
);

export default Home;
