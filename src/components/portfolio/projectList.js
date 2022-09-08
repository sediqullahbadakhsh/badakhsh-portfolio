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
    image: images["hotel.jpg"],
    title: "Hotel Agent",
    github: "https://github.com/sediqullahbadakhsh/hotel-agent-front-end",
    live: "https://infinite-falls-52470.herokuapp.com/v1/most_recent",
    tech: ["React", "Redux", "Rails"],
  },
  {
    id: 2,
    image: images["space.jpg"],
    title: "Space Travelers",
    github: "https://github.com/sediqullahbadakhsh/space-travelers",
    live: "https://space-travelers-fbclh.vercel.app/",
    tech: ["JS", "React", "Redux"],
  },
  {
    id: 3,
    image: images["budget.jpg"],
    title: "Budget App",
    github: "https://github.com/sediqullahbadakhsh/budget-app",
    live: "https://hidden-scrubland-51470.herokuapp.com/",
    tech: ["Ruby", "Rails", "SQL"],
  },
];

export default list;
