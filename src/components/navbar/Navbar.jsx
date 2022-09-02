import React from "react";
import "./Navbar.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";

const Navbar = () => (
  <nav>
    <a href="#home" data-to-scrollspy-id="home">
      <AiOutlineHome />
      Home
    </a>
    <a href="#about" data-to-scrollspy-id="about">
      <AiOutlineUser />
      About
    </a>
    <a href="#resume" data-to-scrollspy-id="resume">
      <AiOutlineBook />
      Resume
    </a>
    <a href="#portfolio" data-to-scrollspy-id="portfolio">
      <AiOutlineProject />
      Portfolio
    </a>
    <a href="#contact" data-to-scrollspy-id="contact">
      <AiOutlineContacts />
      Contact
    </a>
  </nav>
);

export default Navbar;
