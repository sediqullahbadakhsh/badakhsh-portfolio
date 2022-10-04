/* eslint-disable */
import React, { useState } from "react";
import close from "../../assets/icons/close.svg";

const Modal = ({
  hundleClick,
  image,
  title,
  github,
  live,
  tech,
  date,
  description,
}) => {
  const [deactive, setDeactive] = useState(true);
  const onClick = () => {
    hundleClick(setDeactive(!deactive));
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <button onClick={onClick}>
          <img src={close} alt="close" />
        </button>
        <div className="header">
          <h2 className="heading">{title}</h2>
          <p>{date}</p>
        </div>
        <div className="details">
          <img src={image} alt={title} />
          <div className="desc">
            <p>
              <span className="bold">Description:</span> <br />
              {description}
            </p>
            <p className="bold">Built with:</p>
            <div className="techs">{tech && tech.map((t) => <p>*{t}</p>)}</div>
            <div className="links">
              <a href={github} target="blank" className="shadow_effect link">
                GitHub
              </a>
              <a href={live} target="blank" className="shadow_effect link">
                View Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
