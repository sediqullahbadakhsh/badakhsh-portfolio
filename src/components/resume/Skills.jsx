import { AiFillCheckCircle } from "react-icons/ai";

const skill = [
  {
    id: 1,
    skillType: "Front-end",
    skills: ["HTML", "CSS,SCSS", "Bootstrap", "JavaScript", "React", "Redux"],
  },
  {
    id: 2,
    skillType: "Back-end",
    skills: ["Ruby", "Ruby on Rails", "SQL", "PostGreSQL", "MySQL"],
  },
  {
    id: 2,
    skillType: "Professional",
    skills: [
      "GIT",
      "Testing",
      "Git flow",
      "Communication",
      "Collaboration",
      "Management",
    ],
  },
];

const Skills = () => (
  <div className="resume-content">
    <h2>Experience</h2>
    <div className="cards-container">
      {skill.map((item) => (
        <div key={item.id} className="resume-card skill-card">
          <h3 className="vertical">{item.skillType}</h3>
          <div className="skills">
            {item.skills.map((skill) => (
              <div key={skill} className="skill">
                <AiFillCheckCircle />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
