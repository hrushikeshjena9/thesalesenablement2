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
      <div className="flex flex-col md:flex-row">
        <Sidebar setFilters={setFilters} filters={filters} />
        <CourseList filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default Course;
