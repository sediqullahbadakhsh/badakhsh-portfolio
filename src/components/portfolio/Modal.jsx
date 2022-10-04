/* eslint-disable */
import React, { useState } from "react";

const Modal = ({ hundleClick }) => {
  const [deactive, setDeactive] = useState(true);
  const onClick = () => {
    hundleClick(setDeactive(!deactive));
  };
  return (
    <div className="modal">
      <div>modal</div>
      <button onClick={onClick}>Close</button>
    </div>
  );
};
export default Modal;
