/* eslint-disable */
function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}
const images = importAll(
  require.context("../../assets/icons", false, /\.(png|jpe?g|svg)$/)
);
const Socials = () => {
  return (
    <div className="home_social">
      <a
        href="https://github.com/sediqullahbadakhsh"
        target="blank"
        className="shadow_effect social_icon"
      >
        <img src={images["github.png"]} alt="github" />
      </a>
      <a
        href="https://twitter.com/sediqullah6"
        target="blank"
        className="shadow_effect social_icon"
      >
        <img src={images["twitter.png"]} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/sediqullah/"
        target="blank"
        className="shadow_effect social_icon"
      >
        <img src={images["linkedin.png"]} alt="github" />
      </a>
      <a
        href="https://angel.co/u/sediqullah-badakhsh-1"
        target="blank"
        className="shadow_effect social_icon"
      >
        <img src={images["angel.png"]} alt="github" />
      </a>
      <a
        href="https://docs.google.com/document/d/1fFdSrpLABZzU1a68k8jQBWDBwIvab8jv/edit?usp=sharing&ouid=117090713036039485689&rtpof=true&sd=true"
        target="blank"
        className="shadow_effect social_icon"
      >
        <img src={images["download.png"]} alt="github" />
      </a>
    </div>
  );
};
export default Socials;
