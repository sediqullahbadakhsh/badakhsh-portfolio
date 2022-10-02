import React from "react";
import "./Navbar.scss";
import { accordiondata } from "./NavData";
import NavList from "./NavList";

const Navbar = () => (
  <nav>
    {accordiondata.map(({ url, content }) => (
      <NavList url={url} content={content} key={content} />
    ))}
  </nav>
);

export default Navbar;
