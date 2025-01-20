import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaBook, FaUsers } from "react-icons/fa";
import heroImage from "../assets/Logo-banner.png"; // Import the image

const CourseItem = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="container">
        <div
          className="border-2 flex flex-col justify-between shadow-lg bg-gray-100 overflow-hidden relative transition-transform transform "
          style={{
            borderImage: "linear-gradient(to right, #DB0032, #FA6602) 1",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Course Image */}
          <div
            className={`w-full h-[233px] bg-cover bg-center transition-all duration-300 ${
              isHovered ? "bg-[#060B33]" : ""
            }`}
            style={{
              backgroundImage: `url(${isHovered ? heroImage : course.image})`,
            }}
          />

          {/* Course Content */}
          <div
            className={`px-6 py-4 flex flex-col justify-between transition-all duration-300 ${
              isHovered
                ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white"
                : ""
            }`}
            style={{ minHeight: "360px" }}
          >
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
              <div className="bg-gray-200 rounded-lg px-4 py-2 uppercase">
                <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent font-bold bg-clip-text">
                  Sales
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 font-semibold">
                  {course.starCategory} ★
                </span>
                <span className="ml-2 ">Rating</span>
              </div>
            </div>

            {/* Course Title and Description */}
            <h3 className="text-lg md:text-base lg:text-lg font-semibold uppercase mb-2">
              {course.title}
            </h3>
            <p className="text-sm mb-4">{course.description}</p>

            {/* Instructor Info */}
            <div className="flex items-center mb-4">
              <img
                src={course.instructorImage}
                alt={course.instructor}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium uppercase">
                  {course.instructor}
                </p>
                <p className="text-xs  uppercase">Instructor</p>
              </div>
            </div>

            {isHovered ? (
              <>
                {/* Hovered State Buttons */}
                <div className="flex justify-between mt-4">
                  <Link
                    to={`/course-details/${course.id}`}
                    className="text-center w-1/2 text-white bg-[#060B33] hover:bg-[#1f2763] font-semibold py-2 mr-2"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/book-now/${course.id}`}
                    className="text-center w-1/2 text-white bg-[#060B33] hover:bg-[#1f2763] font-semibold py-2"
                  >
                    Book Now
                  </Link>
                </div>
              </>
            ) : (
              <>
                <hr className="my-2" />

                {/* Non-Hovered State Info */}
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <FaBook className="mr-2 text-[#DB0032]" size={20} />
                    <p className="text-gray-700">{course.lessons} Lessons</p>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-2 text-[#DB0032]" size={20} />
                    <p className="text-gray-700">{course.students} Students</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
