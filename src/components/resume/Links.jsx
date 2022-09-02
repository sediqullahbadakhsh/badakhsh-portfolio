import PropTypes from "prop-types";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Awards from "./Awards";

const Links = ({ link }) => {
  if (link === "education") return <Education />;
  if (link === "experience") return <Experience />;
  if (link === "skills") return <Skills />;
  return <Awards />;
};
export default Links;
Links.propTypes = {
  link: PropTypes.func,
};
Links.defaultProps = {
  link: "experience",
};
