import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaBook, FaUsers } from "react-icons/fa";
import heroImage from "../assets/Logo-banner.png"; // Import the image

const CourseItem = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(course.id);  // Ensure this outputs the expected course ID

console.log(course)
  return (
    <div
      className="border-2 flex flex-col items-center justify-between shadow-lg  bg-gray-100 overflow-hidden relative"
      style={{
        borderImage: "linear-gradient(to right, #DB0032, #FA6602) 1",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full h-[233px] bg-gradient-to-r from-[#DB0032] to-[#FA6602]  transition-all duration-300 ${
          isHovered ? "bg-[#060B33]" : "" // Change to new color on hover
        }`}
        style={{
          backgroundImage: `url(${isHovered ? heroImage : course.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Hovered Content */}
      <div
        className={`px-6 py-4 flex flex-col justify-between transition-all duration-300 ${
          isHovered
            ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white"
            : ""
        }`}
        style={{
          minHeight: "350px", // Set a minimum height to prevent fluctuations
        }}
      >
        {/* Course Info */}
        {isHovered ? (
          <>
            <div className="flex justify-between items-center mb-4 ">
              <div className="bg-gray-200 rounded-lg uppercase flex items-center justify-center px-6 py-2">
                <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent font-bold bg-clip-text">
                  Sales
                </span>
              </div>
              <div className="flex items-center justify-start mb-4">
                <span className="text-yellow-500 font-semibold">
                  {course.starCategory} ★
                </span>
                <span className="ml-2 text-gray-500">Rating</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 uppercase">
              {course.title}
            </h3>
            <p className="text-sm mb-2">{course.description}</p>
            <p className="text-lg font-semibold">${course.price}</p>

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
                <p className="text-xs uppercase">Instructor</p>
              </div>
            </div>

            <div className="flex justify-between">
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
            <div className="flex justify-between items-center mb-4">
              <div className="bg-gray-200 rounded-lg uppercase flex items-center justify-center px-6 py-2">
                <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent font-bold bg-clip-text">
                  Sales
                </span>
              </div>
              <div className="flex items-center justify-start mb-4">
                <span className="text-yellow-500 font-semibold">
                  {course.starCategory} ★
                </span>
                <span className="ml-2 text-gray-500">Rating</span>
              </div>
            </div>

            <h3 className="text-lg sm:text-sm md:text-[17px] uppercase font-semibold mb-1 text-start">
              {course.title}
            </h3>
            <p className="mt-2 text-left mb-2 text-sm sm:text-base">
              {course.description}
            </p>

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
                <p className="text-xs text-gray-500 uppercase">Instructor</p>
              </div>
            </div>

            <hr className="my-2" />

            {/* Lessons and Students */}
            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <FaBook className="mr-2 text-[#DB0032]" size={20} />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                  {course.lessons} Lessons
                </p>
              </div>
              <div className="flex items-center">
                <FaUsers className="mr-2 text-[#DB0032]" size={20} />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                  {course.students} Students
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseItem;
