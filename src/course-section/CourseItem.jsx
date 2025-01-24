import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const CourseItem = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCourseClick = () => {
    // Redirect to the course details page
    navigate(`/course-details/${course.id}`);
  };

  return (
    <div className="container">
      <div
        className="border-2 flex flex-col justify-between cursor-pointer shadow-xl overflow-hidden relative transition-transform transform"
        style={{
          borderLeft: "6px solid transparent", // Adjust the width as needed
          borderImageSource: "linear-gradient(to bottom, #DB0032, #FA6602)", // Gradient direction for left side
          borderImageSlice: 1, // Required for the gradient to appear
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCourseClick} // Add onClick handler here
      >
        <div
          className={`px-6 py-4 flex flex-col justify-between transition-all duration-300 ${
            isHovered
              ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white "
              : ""
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <span
                className={`font-semibold w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 ${
                  isHovered
                    ? "bg-white text-[#DB0032] "
                    : "text-white bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                }`}
              >
                {course.courseName.icon}
              </span>
              <span className="font-semibold">{course.courseName.text}</span>
            </div>
            <div
              className={`flex items-center justify-center gap-1 rounded-md px-2 py-2 transition-all duration-300 ${
                isHovered
                  ? "bg-white text-[#DB0032]" // White background, text color as #DB0032 when hovered
                  : "text-white bg-gradient-to-r from-[#DB0032] to-[#FA6602]" // 
              }`}
            >
              {course.location.icon}
              {course.location.text}
            </div>
          </div>

          <h3 className="text-sm md:text-base lg:text-lg font-semibold uppercase mb-2">
            {course.title}
          </h3>
          <hr className="my-2" />

          <p className="text-sm font-light mb-4">{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
