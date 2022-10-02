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
export const accordiondata = [
  { url: images["home.png"], content: "Home" },
  { url: images["profile.png"], content: "About" },
  { url: images["resume.png"], content: "Resume" },
  { url: images["project.png"], content: "Projects" },
  { url: images["contact.png"], content: "Contact" },
];
