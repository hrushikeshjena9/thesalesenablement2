import React from "react";
import Navbar from "../components/Navbar";
import heroImage1 from "../assets/banner2.jpg";
import HeroAbout from "../about-section/HeroAbout"
const About = () => {
  return (
    <>
    <div className="flex flex-col space-y-16">
        <HeroAbout />
      
      </div>
    </>
  );
};

export default About;
