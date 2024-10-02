import "../../assets/sass/Layout/Banner.scss";
import defaultImage from "../../assets/images/homebanner.png";

function Banner({ imageUrl = defaultImage }) {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Home Banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
