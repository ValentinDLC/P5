import React from "react";
import "../../assets/sass/Components/ABanner.scss";
import defaultImage from "../../assets/images/AboutBanner.png";

function ABanner({ imageUrl = defaultImage }) {
  return (
    <div className="abanner">
      <img src={imageUrl} alt="About Banner" />
    </div>
  );
}

export default ABanner;
