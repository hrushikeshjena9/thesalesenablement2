// src/App.js
import React, { useState } from "react";
import CourseList from "../course-section/CourseList";
import Sidebar from "../course-section/CourseSidebar";
import HeroCourse from "../course-section/HeroCourse";

function Course() {
  const [filters, setFilters] = useState({
    location: "both",
    audience: "both",
    topics: {
      sellingSkills: false,
      frontlineRetail: false,
      salesManagement: false,
      territoryPlanning: false,
      retailPlanning: false,
      communicationSkills: false,
    },
    searchTerm: "",
  });

  return (
    <div>
      <HeroCourse />
      <div className="container mx-auto px-4 py-12 ">
        <h1 className="text-4xl font-bold uppercase leading-[48px] mb-5">All <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">the Sales Enablement Skills You</span>  
          
        <br />  Need in One Place
          </h1>
        <hr className="py-5"/>
        <p>
          From foundational sales techniques to advanced AI-driven tools, our
          platform supports your professional development at every stage.
          Whether you're looking to improve your sales strategy, integrate AI
          tools, or refine your marketing techniques, we’ve got you covered.
        </p>
        <div className="flex flex-col md:flex-row py-12 gap-10">
          <Sidebar setFilters={setFilters} filters={filters} />
          <CourseList filters={filters} />

        </div>
      </div>
    </div>
  );
}

export default Course;
