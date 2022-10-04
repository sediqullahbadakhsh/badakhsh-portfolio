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
    date: "9.24.2022",
    description:
      "With Hotel allows you to add hotels, manage your hotels, and reserve any hotel you need and manage reservations, it is built with React, and Redux as front end and ruby on rails, and postgresql as backend with authentication and authorization featuers",
  },
  {
    id: 2,
    image: images["space.jpg"],
    title: "Space Travelers",
    github: "https://github.com/sediqullahbadakhsh/space-travelers",
    live: "https://space-travelers-fbclh.vercel.app/",
    tech: ["JS", "React", "Redux"],
    date: "9.24.2022",
    description:
      "The web app retrieves real data from SpaceX API, and provides commercial and scientific space travel services by allowing users to book rockets and join selected space missions.",
  },
  {
    id: 3,
    image: images["budget.jpg"],
    title: "Budget App",
    github: "https://github.com/sediqullahbadakhsh/budget-app",
    live: "https://hidden-scrubland-51470.herokuapp.com/",
    tech: ["Ruby", "Rails", "SQL"],
    date: "9.24.2022",
    description:
      "This app allows users to create their categories of spending and add transactions to each category while tracking thier total spending on each category.",
  },
];

export default list;
