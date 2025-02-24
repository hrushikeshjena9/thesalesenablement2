
import React, { useState } from "react";
import CourseList from "../course-section/CourseList";
import Sidebar from "../course-section/CourseSidebar";
import HeroCourse from "../course-section/HeroCourse";
import FilterMobile from "../course-section/FilterMobile";


function Course() {
  const [filters, setFilters] = useState({
    location: "viewAll",
    audience: "viewAll",
    topics: {
      sellingSkills: false,
      frontlineRetail: false,
      salesManagement: false,
      territoryPlanning: false,
      retailPlanning: false,
      communicationSkills: false,
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal
  const getFilteredDetails = (filters) => {
    const { topics } = filters;
    let details = [];


    const activeTopics = Object.keys(topics)
      .filter((key) => topics[key])
      .map(
        (key) =>
          key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (match) => match.toUpperCase())
      )
      .join(" | ");

    if (activeTopics) {
      details.push(`${activeTopics}`);
    }


    return details.length > 0 ? details.join(" | ") : "All Courses";
  };

  return (
    <div>
      <HeroCourse />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-sm leading-2 sm:text-2xl lg:text-4xl font-bold uppercase sm:leading-[48px] mb-3 lg:mb-5">
          All{" "}
          <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            the Sales Enablement Skills You
          </span>
          <br /> Need in One Place
        </h1>
        <hr className="py-2 lg:py-5" />

        <div className="flex justify-between items-center">
          <p className="text-sm">
            Showing:{" "}
            <span className="text-sm ml-4">
              {filters.location !== "viewAll" ||
                Object.values(filters.topics).includes(true) ||
                filters.audience !== "viewAll"
                ? `${getFilteredDetails(filters)}`
                : "All Courses"}
            </span>
          </p>


        </div>

        <div className="flex flex-col md:flex-row py-12 gap-10">
          <Sidebar setFilters={setFilters} filters={filters} />
          <CourseList setFilters={setFilters} filters={filters} />
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <FilterMobile
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}

export default Course;
