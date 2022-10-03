import React, { useState } from "react";
import Links from "./Links";
import "./Resume.scss";

const Resume = () => {
  const [link, setLink] = useState("experience");
  const handleClick = (e) => {
    setLink(e.target.id);
  };
  return (
    <div className="resume-container" id="Resume">
      <div className="resume-sections">
        <a
          href="#/experience"
          id="experience"
          onClick={handleClick}
          className={link === "experience" ? "active" : ""}
        >
          Experience
        </a>
        <a
          href="#/education"
          id="education"
          className={link === "education" ? "active" : ""}
          onClick={handleClick}
        >
          Education
        </a>
        <a
          href="#/skills"
          id="skills"
          onClick={handleClick}
          className={link === "skills" ? "active" : ""}
        >
          Skills
        </a>
      </div>
      <div className="resume-content">
        <Links link={link} />
      </div>
    </div>
  );
};
export default Resume;
