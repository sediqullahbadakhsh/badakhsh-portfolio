import React from "react";
import "./About.scss";
import sediq from "../../assets/sediq2.jpg";

const About = () => (
  <div className="about-container" id="About">
    <div className="about-content">
      <h1 className="heading">About Me</h1>
      <p>
        I am a Full Stack Web Developer with experience in Ruby and JavaScript
        Libraries and Frameworks. Excellent problem-solving skills and ability
        to perform well in a team. Looking for opportunities that allow me to
        continue learning and developing as a Full Stack Web Developer.
      </p>
      <p>
        Want to know me better, Email me:
        <br />
        sediqullah.badakhsh@gmail.com
      </p>
    </div>
    <div className="about-image" id="container_1">
      <div id="container_2">
        <img src={sediq} alt="sediq" id="image" />
      </div>
    </div>
  </div>
);

export default About;
