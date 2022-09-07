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
      <span className="hidden"> Home</span>
    </a>
    <a href="#about" data-to-scrollspy-id="about">
      <AiOutlineUser />
      <span className="hidden"> About</span>
    </a>
    <a href="#resume" data-to-scrollspy-id="resume">
      <AiOutlineBook />
      <span className="hidden"> Resume</span>
    </a>
    <a href="#portfolio" data-to-scrollspy-id="portfolio">
      <AiOutlineProject />
      <span className="hidden"> Portfolio</span>
    </a>
    <a href="#contact" data-to-scrollspy-id="contact">
      <AiOutlineContacts />
      <span className="hidden"> Contact</span>
    </a>
  </nav>
);

export default Navbar;
