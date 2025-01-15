import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const CourseObjectives = () => {
  const objectives = [
    "Understand what is needed to have both the right skill set and mindset to sell.",
    "Connect better with customers, overcome objections, and close sales confidently and effectively to achieve sales targets.",
    "Learn and practice an effective sales questioning technique that will increase the likelihood of making a sale by better understanding customer needs while maintaining a great customer experience.",
    "Understand the 4 major behavioral styles and personality types and how to sell to each buyer type.",
  ];

  return (
    <div className="bg-gradient-to-r from-[#FF6A00] to-[#DB0032] p-10  mx-auto">
      <h2 className="text-4xl uppercase font-extrabold text-white text-center mb-8">Course Objectives</h2>

      <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-300 ">
        <ul className="space-y-6">
          {objectives.map((objective, index) => (
            <li key={index} className="flex items-start space-x-4 text-lg text-gray-800 font-medium">
              <div className="flex items-center justify-center p-3 bg-[#FF6A00] text-white rounded-full">
                <FaLightbulb className="text-xl" />
              </div>
              <span className="text-lg">{objective}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <button className="px-8 py-4 bg-[#DB0032] text-white text-lg font-semibold shadow-lg hover:bg-[#FF6A00] transition-all duration-300 focus:outline-none">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseObjectives;
