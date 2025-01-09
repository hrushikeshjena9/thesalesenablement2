import React from "react";
import "../home-sections/home.css";
import HeroSection from "../home-sections/HeroSection";
import About from "../home-sections/About";
import Services from "../home-sections/Services";
import GetInTouch from "../home-sections/GetInTouch";
import CaseStudies from "../home-sections/CaseStudies";
import Testimonials from "../home-sections/Testimonialss";
import OurCourses from "../home-sections/OurCourses";
import LatestBlogs from "../home-sections/LatestBlogs";
function Home() {
  return (
    <>
      <div className="flex flex-col space-y-16">
        <HeroSection />
      <OurCourses />
          <About />
        <Services />
        <GetInTouch />
        <CaseStudies />
        <Testimonials />
        <LatestBlogs />
      </div>
    </>
  );
}

export default Home;
