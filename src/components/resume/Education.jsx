const Education = () => {
  const list = [
    {
      id: 1,
      year: "Jan, 2022 – Sep,2022",
      insName: "MICROVERSE",
      subject: "Remote Full Stack Web Development Program, Full Time",
      description:
        "Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.",
    },
    {
      id: 2,
      year: "April, 2013– Aug, 2016",
      insName: "OSMANIA University",
      subject: "Bachelor of Computer Science, Full Time",
      description:
        "Learned Basics of Computers, Hardware and Software, Assembly language and mathematics, collaborating with international students.",
    },
  ];
  return (
    <div>
      <h2 className="resume-header">Education</h2>

      {list.map((item) => (
        <div key={item.id} className="resume-card">
          <h4 className="color-green">{item.year}</h4>
          <h2>{item.subject}</h2>
          <h4>{item.insName}</h4>
          <p className="color-grey">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Education;
