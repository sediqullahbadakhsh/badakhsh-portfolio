import React, { useState } from "react";
/* eslint-disable*/
const NavList = ({ url, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <a href={`#${content}`}>
        <div
          onMouseEnter={() => setIsActive(!isActive)}
          onMouseLeave={() => setIsActive(false)}
        >
          <img src={url} alt={content} className="shadow_effect nav_icon" />
        </div>
        <p onMouseLeave={() => setIsActive(false)}>{isActive && content}</p>
      </a>
    </div>
  );
};
export default NavList;
