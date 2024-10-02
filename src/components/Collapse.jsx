import React, { useState } from "react";
import "../assets/sass/Components/Collapse.scss";
import ArrowUp from "../assets/images/ArrowUp.svg";

function Collapse({ title, content }) {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible((prev) => !prev);
  };

  return (
    <div className="collapse-describe">
      <div className="description" onClick={toggleContent}>
        <span>{title}</span>
        <img
          src={ArrowUp}
          alt="Toggle content visibility"
          className={isContentVisible ? "rotated" : ""}
        />
      </div>
      <div className={`about_describe ${isContentVisible ? "visible" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
