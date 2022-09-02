import React, { useState } from "react";
import Links from "./Links";
import "./Resume.scss";

const Resume = () => {
  const [link, setLink] = useState("education");
  const handleClick = (e) => {
    setLink(e.target.id);
  };
  return (
    <div className="resume-container" id="resume">
      <div className="resume-sections">
        <a href="#/" id="education" onClick={handleClick}>
          Education
        </a>
        <a href="#/" id="experience" onClick={handleClick}>
          Experience
        </a>
        <a href="#/" id="skills" onClick={handleClick}>
          Skills
        </a>
        <a href="#/" id="awards" onClick={handleClick}>
          Awards
        </a>
      </div>
      <div className="resume-content">
        <Links link={link} />
      </div>
    </div>
  );
};
export default Resume;
