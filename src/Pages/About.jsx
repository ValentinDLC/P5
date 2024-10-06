import AboutBanner from "../components/Banner";
import CollapseA from "../components/CollapseA";
import aproposData from "../Data/AboutCollapse.json";
import { aboutBanner } from "../Data/BannerData";

function About() {
  return (
    <>
      <AboutBanner {...aboutBanner} />
      <div className="about_container">
        {aproposData.map((item) => (
          <CollapseA
            key={item.id}
            title={item.titre}
            content={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default About;
