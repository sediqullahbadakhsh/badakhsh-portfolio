import PropTypes from "prop-types";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Links = ({ link }) => {
  if (link === "education") return <Education />;
  if (link === "experience") return <Experience />;
  return <Skills />;
};
export default Links;
Links.propTypes = {
  link: PropTypes.string,
};
Links.defaultProps = {
  link: "experience",
};
