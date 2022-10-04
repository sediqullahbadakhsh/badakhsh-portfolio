import React, { useState } from "react";
/* eslint-disable*/
const NavList = ({ url, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="nav_links">
      <a href={`#${content}`}>
        <div
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          className="shadow_effect nav_icon"
        >
          <img src={url} alt={content} />
        </div>
      </a>
      <div>
        {isActive && <p className="nav_link shadow_effect">{content}</p>}
      </div>
    </div>
  );
};
export default NavList;
