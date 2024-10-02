import "../../assets/sass/Components/CollapseA.scss";
import { useState } from "react";
import ArrowUp from "../../assets/images/ArrowUp.svg";
import ArrowDown from "../../assets/images/ArrowDown.svg";

function CollapseA({ title, content }) {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    console.log("toggleContent appelé");
    setContentVisible((prev) => {
      console.log("État précédent : ", prev);
      return !prev;
    });
    console.log("État actuel : ", isContentVisible);
  };

  console.log("Contenu : ", content);

  return (
    <div className="collapse-describe">
      <div className="description" onClick={toggleContent}>
        <span>{title}</span>
        <img
          src={isContentVisible ? ArrowUp : ArrowDown}
          alt="Toggle content visibility"
        />
      </div>
      {isContentVisible
        ? console.log("Contenu visible") || (
            <p className="about-describe">{content}</p>
          )
        : console.log("Contenu masqué") || null}
    </div>
  );
}

export default CollapseA;
