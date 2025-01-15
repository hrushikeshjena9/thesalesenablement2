import HeroAbout from "../about-section/HeroAbout";
import WhyChoseUs from "../about-section/WhyChoseUs";
import VisionMission from "../about-section/VisionMission";
import AboutUs from "../about-section/AboutUs";
import Achievement from "../about-section/Achievement";
import Awards from "../about-section/AwardSection";
import Cards from "../about-section/Cards";

function About() {
  return (
    <>
      <div className="flex flex-col space-y-16">
        <HeroAbout />
      </div>
      <AboutUs />
      <VisionMission />
      <WhyChoseUs />
      <Achievement />
      <Awards />
      <Cards />
    </>
  );
}

export default About;
