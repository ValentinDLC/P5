import ABanner from "../../components/Aboutbanner/ABanner";
import CollapseA from "../../components/CollapseA/CollapseA";
import aproposData from "../../Data/AboutCollapse.json";
import "../../assets/sass/Pages/About.scss";

function About() {
  return (
    <>
      <ABanner />
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
