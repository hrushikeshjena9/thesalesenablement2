import React, { useState } from "react";
import CourseItem from "./CourseItem";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGlobeAmericas,
  FaUsers,
} from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";
import RightArrow1 from "../assets/arrow-right1.png";

const courses = [
  {
    id: 1,
    title: "Professional Selling Skills",
    description:
      "Learn essential skills to close deals and build long-lasting relationships, For forward-thinking leaders who are ready to develop a more responsive and innovative culture.",

    location: { text: "On Site", icon: <BsBuildings /> },
    audience: "sales-teams",
    topics: { sellingSkills: true },
    courseName: { text: "Courses", icon: <FaBook /> },
  },
];

const CourseList = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10;

  // console.log("Courses Array:", courses);
  // console.log("Filters Object:", filters);

  const filteredCourses = courses.filter((course) => {
    const locationMatches =
      !filters.location ||
      filters.location === "viewAll" ||
      (typeof filters.location === "string" &&
        course.location?.text.toLowerCase() === filters.location.toLowerCase());

    const audienceMatches =
      !filters.audience ||
      filters.audience === "viewAll" ||
      (typeof filters.audience === "string" &&
        course.audience.toLowerCase() === filters.audience.toLowerCase());

    const topicsMatches =
      Object.entries(filters.topics || {}).every(([topic, isSelected]) => {
        return isSelected ? course.topics[topic] : true; // Check only selected topics
      }) || Object.values(filters.topics || {}).every((val) => !val);

    return locationMatches && audienceMatches && topicsMatches;
  });

  return (
    <section className="flex-1">
      {filteredCourses.length === 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-6">
            We're sorry, but it looks like there are currently no courses
            matching your selected criteria. Our team continuously updates our
            course offerings, so please consider adjusting your filters or check
            back later.
          </h2>
          <div>
            Couldn't find anything of interest for you? If you have a specific
            enquiry or need assistance, please don't hesitate to reach out to us
            directly. Our team is here to help. You can contact us at{" "}
            <a
              href="mailto:info@theenablement.com"
              className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] bg-clip-text text-transparent"
            >
              info@theenablement.com
            </a>{" "}
            for personalised assistance.
          </div>
          <div className="p-6 rounded-lg my-10 shadow-xl flex justify-between items-center">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold mb-4">
                Couldn't find anything of interest for you?
              </h2>
              <p className="text-lg mb-6">
                If you have a specific enquiry or need assistance, please don't
                hesitate to reach out to us directly. Our team is here to help!
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <Link
                  to="/contact-us"
                  type="button"
                  className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto flex items-center justify-center"
                >
                  <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                  <span className="relative text-white group-hover:text-white flex items-center">
                    Contact Us
                    <img
                      src={RightArrow1}
                      alt="Arrow Icon"
                      className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CourseList;
