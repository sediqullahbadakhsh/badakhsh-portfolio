/* eslint-disable */
function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../../assets/projects", false, /\.(png|jpe?g|svg)$/)
);

const list = [
  {
    id: 1,
    image: images["first.jpg"],
    title: "1project",
    github: "something",
    live: "something",
    tech: ["html", "css"],
  },
  {
    id: 2,
    image: images["first.jpg"],
    title: "2project",
    github: "something",
    live: "something",
    tech: ["html", "css"],
  },
  {
    id: 3,
    image: images["first.jpg"],
    title: "3project",
    github: "something",
    live: "something",
    tech: ["html", "css"],
  },
  {
    id: 4,
    image: images["first.jpg"],
    title: "4project",
    github: "something",
    live: "something",
    tech: ["html", "css"],
  },
  {
    id: 5,
    image: images["first.jpg"],
    title: "5project",
    github: "something",
    live: "something",
    tech: ["html", "css"],
  },
  {
    id: 6,
    image: images["first.jpg"],
    title: "6project",
    github: "something",
    live: "something",
    tech: ["html", "css"],
  },
];

export default list;
