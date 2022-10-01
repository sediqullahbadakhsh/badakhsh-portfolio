const Experience = () => {
  const list = [
    {
      id: 1,
      year: "Feb, 2022 – March, 2022",
      organization: "MICROVERSE, Remote",
      title: "Mentor (Volunteer)",
      description:
        "Mentored junior web developer, providing technical support through code reviews, proposed improvements to code to improve code quality and performance, provide advice and tips on how to maitain motivated.",
    },
    {
      id: 2,
      year: "Jan, 2018 – Dec, 2022",
      organization: "IDLG-DMM, Kabul, Afghanistan",
      title: "Integrated Financial Management System Specialist",
      description:
        "Performed System based assessments, Requirement Gathering, Monitoring, Testing end result of the system and deploying accrose multiple municipalites.",
    },
  ];
  return (
    <div>
      <h2 className="resume-header">Experience</h2>

      {list.map((item) => (
        <div key={item.id} className="resume-card">
          <h4 className="color-green">{item.year}</h4>
          <h2>{item.title}</h2>
          <h4>{item.organization}</h4>
          <p className="color-grey">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Experience;
