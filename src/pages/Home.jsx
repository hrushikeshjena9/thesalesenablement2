import React, { useEffect, useState } from "react";
import "../home-sections/home.css";
import HeroSection from "../home-sections/HeroSection";
import About from "../home-sections/About";
import Services from "../home-sections/Services";
import GetInTouch from "../home-sections/GetInTouch";
import CaseStudies from "../home-sections/CaseStudies";
import Testimonials from "../home-sections/Testimonialss";
import OurCourses from "../home-sections/OurCourses";
import LatestBlogs from "../home-sections/LatestBlogs";
import FooterSubscribe from "../home-sections/FooterSubscribe";
import axios from "../api/axios";
function Home() {
  const [data, setData] = useState({});
  const [error, setError] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/home-page");
        setData(res.data.data);
      } catch (error) {
        setError("Failed to fetch data"); 
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const { consultation, page_banners, page_data, testimonials } = data || {};



  return (
    <>
      <div className="flex flex-col space-y-16">
        <HeroSection heroData={data.page_banners}/>
        <OurCourses />
        <About aboutPageData={data.page_data} />
        <Services consultationData={data.consultation}/>
        <GetInTouch />
        <CaseStudies />
        <Testimonials testimonialsData={data.testimonials} />
        <LatestBlogs />
        <FooterSubscribe />
      </div>
    </>
  );
}

export default Home;
