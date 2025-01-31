

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
    <div className="bg-gradient-to-r from-[#FF6A00] to-[#DB0032] px-6 py-12 md:py-16 lg:py-20 flex justify-center">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-extrabold text-white text-center mb-6 md:mb-8">
          Course Objectives
        </h2>

        <div className="bg-white px-6 py-8 md:px-10 md:py-12 rounded-lg shadow-2xl transform transition-all duration-300">
          <ul className="space-y-4 md:space-y-6">
            {objectives.map((objective, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-sm md:text-lg text-gray-800 font-medium"
              >

                <div className="flex items-center justify-center p-2 md:p-3 bg-[#FF6A00] text-white rounded-full w-8 h-8 md:w-12 md:h-12">
                  <FaLightbulb className="text-lg md:text-xl" />
                </div>


                <span className="flex-1 leading-relaxed font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify">
                  {objective}
                </span>
              </li>
            ))}
          </ul>



       
            <div className="mt-8 flex justify-center">
              <button className="px-6 group md:px-8 uppercase py-3 md:py-4  bg-gradient-to-r from-[#DB0032] to-[#FF6A00] text-white text-sm md:text-lg font-semibold shadow-lg  transition-all duration-300 focus:outline-none relative overflow-hidden">
                <span className="absolute inset-0 w-0 h-full bg-[#383F71] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                <span className="relative z-10">Enroll Now</span>
              </button>
         

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseObjectives;
