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
    <a href="#home">
      <AiOutlineHome />
      Home
    </a>
    <a href="#about">
      <AiOutlineUser />
      About
    </a>
    <a href="#resume">
      <AiOutlineBook />
      Resume
    </a>
    <a href="#portfolio">
      <AiOutlineProject />
      Portfolio
    </a>
    <a href="#contact">
      <AiOutlineContacts />
      Contact
    </a>
  </nav>
);

export default Navbar;
