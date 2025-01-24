import React, { useState } from "react";
import CourseList from "../course-section/CourseList";
import Sidebar from "../course-section/CourseSidebar";
import PriceSideBar from "../course-details-sections/PriceSideBar";
import CourseDetailSection from "../course-details-sections/CourseDetailSection";
import HeroCourseDetails from "../course-details-sections/HeroCourseDetails";

function CourseDetails() {
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
      <HeroCourseDetails />

      <div className="container mx-auto px-4 py-12 ">
        <CourseDetailSection filters={filters} />
      </div>
    </div>
  );
}

export default CourseDetails;
