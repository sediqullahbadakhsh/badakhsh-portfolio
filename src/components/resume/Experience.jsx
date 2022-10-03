import microvers from "../../assets/logos/images.png";
import idlg from "../../assets/logos/idlg.jfif";
import elec from "../../assets/logos/elec.jpg";

const Experience = () => {
  const list = [
    {
      id: 1,
      year: "Feb, 2022 – March, 2022",
      organization: "@MICROVERSE, Remote",
      title: "Mentor (Volunteer)",
      description:
        "Mentored junior web developer, providing technical support through code reviews, proposed improvements to code to improve code quality and performance, provide advice and tips on how to maitain motivated.",
      url: microvers,
    },
    {
      id: 2,
      year: "Sep, 2018 – Dec, 2022",
      organization: "@IDLG-DMM, Kabul, Afghanistan",
      title: "Integrated Financial Management System Specialist",
      description:
        "Performed System based assessments, Requirement Gathering, Monitoring, Testing end result of the system and deploying accrose multiple municipalites.",
      url: idlg,
    },
    {
      id: 3,
      year: "Mar, 2018 - Sep, 2018",
      organization: "@Independent Election Commision, Afghanistan",
      title: "IT specialist",
      description:
        "Provided Technical support to the team, performed Network needs assessment, troubleshoting and solving basic network issues.",
      url: elec,
    },
  ];
  return (
    <div className="resume-content">
      <h2>Experience</h2>
      <div className="cards-container">
        {list.map((item) => (
          <div key={item.id} className="resume-card">
            <div className="card-image">
              <img src={item.url} alt={item.insName} />
            </div>
            <p className="date">{item.year}</p>
            <h3>{item.title}</h3>
            <p className="uniName">{item.organization}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
