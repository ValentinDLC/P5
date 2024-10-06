import "../assets/sass/Components/CollapseA.scss";
import { useState } from "react";
import Arrow from "../assets/images/arrow.svg";

function CollapseA({ title, content }) {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="collapse-describe">
      <div className="description" onClick={toggleContent}>
        <span>{title}</span>
        <img
          src={isContentVisible ? Arrow : Arrow}
          alt="Toggle content visibility"
          style={{
            transform: isContentVisible ? "rotate(-180deg)" : "",
          }}
        />
      </div>
      <div className={`about-describe ${isContentVisible ? "visible" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default CollapseA;
