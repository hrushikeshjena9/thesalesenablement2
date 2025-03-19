import HeroAbout from "../about-section/HeroAbout";
import WhyChoseUs from "../about-section/WhyChoseUs";
import VisionMission from "../about-section/VisionMission";
import AboutUs from "../about-section/AboutUs";
import Achievement from "../about-section/Achievement";
import Awards from "../about-section/AwardSection";
import Cards from "../about-section/Cards";
import Expertise from "../about-section/Expertise";
import { useEffect, useState } from "react";
import axios from "../api/axios"
import { Helmet } from "react-helmet-async";
function About() {
  const [data, setData] = useState({})
  const [error, setError] = useState("")
useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/about-us"); 
        setData(res.data.data);
   
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []); 
  const { about_data, mission_data, awards, vision_data, values_data, why_choose_us, experts, award_data } = data || {};
  if (!about_data) return <p></p>;

  return (
    <>
      <Helmet>
      <title>{about_data.meta_title} </title>
        <meta name="description" content={about_data.meta_description} />
        <meta name="keywords" content={about_data.meta_keywords} />
      </Helmet>
      <div className="flex flex-col space-y-16">
        <HeroAbout />
        <AboutUs aboutData={data?.about_data} error={error} />

        <VisionMission missionData={data.mission_data} visionData={data.vision_data} valueData={data.values_data} error={error} />
        <WhyChoseUs whyChoseUs={data.why_choose_us} error={error} />
        <Achievement archivementData={data.archivement} error={error} />
        <Expertise expertsData={data.experts} error={error}  />
        <Awards awardData={data.award_data} error={error}  />
        <Cards awardsData={data.awards} error={error} />
      </div>
    </>
  );
}

export default About;

