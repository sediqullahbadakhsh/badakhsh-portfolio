import microvers from "../../assets/logos/images.png";
import nizam from "../../assets/logos/nizamCollege.jfif";
import osmania from "../../assets/logos/osmaniaUniversity.jpg";

const Education = () => {
  const list = [
    {
      id: 1,
      year: "Jan, 2022 – Sep,2022",
      insName: "@MICROVERSE",
      subject: "Full Stack Web Development Program",
      description:
        "Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.",
      url: microvers,
    },
    {
      id: 2,
      year: "Apr, 2013 – Aug, 2016",
      insName: "@OSMANIA UNIVERSITY",
      subject: "Bachelor of Computer Science",
      description:
        "Learned Basics of Computers, Hardware and Software, Assembly language and mathematics, collaborating with international students.",
      url: nizam,
    },
    {
      id: 3,
      year: "Mar, 2014 - Apr, 2015",
      insName: "@NIZAM COLLEGE",
      subject: "Management & research Methodologies",
      description:
        "Learned different skills on framing research question, managing literature in a scientific manner, developing data analysis plans, appropriate to the design and methos and more...",
      url: osmania,
    },
  ];
  return (
    <div className="resume-content">
      <h2>Education</h2>
      <div className="cards-container">
        {list.map((item) => (
          <div key={item.id} className="resume-card">
            <div className="card-image">
              <img src={item.url} alt={item.insName} />
            </div>
            <p className="date">{item.year}</p>
            <h3>{item.subject}</h3>
            <p className="uniName">{item.insName}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Education;
