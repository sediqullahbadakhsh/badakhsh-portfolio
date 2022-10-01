import { AiFillCheckCircle } from "react-icons/ai";
import { frontEnd, backEnd } from "./SkillList";

const Skills = () => (
  <div>
    <h2 className="resume-header">Education</h2>

    <div className="skills-content">
      <div className="skill-card">
        <h3>Frontend Development</h3>
        <div className="skills">
          {frontEnd.map((item) => (
            <div key={item.id} className="techs">
              <AiFillCheckCircle />
              <div>
                <p className="skill">{item.tech}</p>
                <p className="dificulty">{item.skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="skill-card">
        <h3>Backend Development</h3>
        <div className="skills">
          {backEnd.map((item) => (
            <div key={item.id} className="techs">
              <AiFillCheckCircle />
              <div>
                <p className="skill">{item.tech}</p>
                <p className="dificulty">{item.skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
