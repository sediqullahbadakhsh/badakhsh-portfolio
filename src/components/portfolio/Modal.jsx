/* eslint-disable */
import React, { useState } from "react";

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
      <div>modal</div>
      <p>{image}</p>
      <p>{title}</p>
      <p>{github}</p>
      <p>{tech && tech.map((t) => <p>{t}</p>)}</p>
      <p>{live}</p>
      <p>{date}</p>
      <p>{description}</p>

      <button onClick={onClick}>Close</button>
    </div>
  );
};
export default Modal;
