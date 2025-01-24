// src/App.js
import React, { useState } from "react";
import CourseList from "../course-section/CourseList";
import Sidebar from "../course-section/CourseSidebar";
import HeroCourse from "../course-section/HeroCourse";

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
  const getFilteredDetails = (filters) => {
    const { topics } = filters;
    let details = [];

    if (Object.values(topics).includes(true)) {
      const activeTopics = Object.keys(topics)
        .filter((key) => topics[key])
        .map((key) => key.replace(/([A-Z])/g, " $1").toUpperCase()) // Convert camelCase to readable text
        .join(" | ");
      details.push(`${activeTopics}`);
    }

    return details.length > 0 ? details.join(" | ") : "All Courses";
  };

  return (
    <div>
      <HeroCourse />
      <div className="container mx-auto px-4 py-12 ">
        <h1 className="text-4xl font-bold uppercase leading-[48px] mb-5">
          All{" "}
          <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            the Sales Enablement Skills You
          </span>
          <br /> Need in One Place
        </h1>
        <hr className="py-5 " />
        <p className="max-w-6xl">
          From foundational sales techniques to advanced AI-driven tools, our
          platform supports your professional development at every stage.
          Whether you're looking to improve your sales strategy, integrate AI
          tools, or refine your marketing techniques, we’ve got you covered. Our
          short courses cover topics such as strategy, leadership, digitisation
          and financial acumen. Taught by experienced faculty using lectures,
          case studies, and other key materials, providing networking and
          personal development opportunities.
        </p>

        <p className="max-w-6xl py-5">
          For a downloadable calendar of {""}
          The Sales Sales Enablement {""}
          2025 programmes
          <a
            href="/path-to-your-file.pdf" // Replace with the file path
            download // This enables the download functionality
            className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-lg font-bold text-transparent bg-clip-text px-2 transform transition duration-300"
          >
            click here
          </a>
        </p>

        <div>
          <p className=" transform transition duration-300">
            <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-lg font-bold text-transparent bg-clip-text">
              Showing: {""}
            </span>
            <span className="text-sm ml-4">
              {filters.location !== "viewAll" ||
              Object.values(filters.topics).includes(true) ||
              filters.audience !== "viewAll"
                ? `${getFilteredDetails(filters)}`
                : ``}
          
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row py-12 gap-10">
          <Sidebar setFilters={setFilters} filters={filters} />
          <CourseList setFilters={setFilters} filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default Course;
