import React, { useState } from "react";
/* eslint-disable*/
const NavList = ({ url, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <a href={`#${content}`} className="nav_links">
        <div
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          className="shadow_effect nav_icon"
        >
          <img src={url} alt={content} />
        </div>
        <p>{isActive && <p className="nav_link shadow_effect">{content}</p>}</p>
      </a>
    </div>
  );
};
export default NavList;
