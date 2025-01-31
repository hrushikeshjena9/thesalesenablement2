import HeroAbout from "../about-section/HeroAbout";
import WhyChoseUs from "../about-section/WhyChoseUs";
import VisionMission from "../about-section/VisionMission";
import AboutUs from "../about-section/AboutUs";
import Achievement from "../about-section/Achievement";
import Awards from "../about-section/AwardSection";
import Cards from "../about-section/Cards";
import Expertise from "../about-section/Expertise";

function About() {
  return (
    <>
      <div className="flex flex-col space-y-16">
        <HeroAbout />
        <AboutUs />
        <VisionMission />
        <WhyChoseUs />
       <Achievement />
      <Expertise />
           <Awards />
        <Cards />
      </div>
    </>
  );
}

export default About;
