import React, { useState } from "react";
import CourseImage from "../../src/assets/banner3.png";
import {
  FaCheckCircle,
  FaEnvelope,
  FaGlobeAmericas,
  FaPhone,
  FaPhoneAlt,
  FaShareAlt,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const PriceSideBar = ({ course }) => {
  return (
    <aside className="w-full h-1/2 md:w-1/3 bg-gray-100 p-6 shadow-lg md:block">
      <div className="flex flex-col w-full">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 uppercase">
              Sales Management
            </h2>

            <div className="flex items-center justify-center rounded-md px-2 py-2 text-white bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
              <FaGlobeAmericas className="mr-2" />
              <p>Online</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-4">
              <label className="block  text-lg font-medium text-gray-600 mb-2">
                Application Open Between
              </label>
              <div className="text-sm  text-bold text-black">
                12th Jan 2025 - 20th Jan 2025
              </div>
            </div>
          </div>{" "}
          <div className="flex justify-between">
            <img src={CourseImage} alt="CourseImage" className="w-full mr-4" />
          </div>
          {/* Description */}
          <div className="mb-4 mt-4">
            <div className="text-sm text-gray-700">
              Learn essential skills to close deals and build long-lasting
              relationships.
            </div>
          </div>
          {/* Languages */}
          <div className="mb-4 flex align-middle  justify-between">
            <div className="text-sm text-gray-700">
              To Start by:
              <div>11th Jan 2025</div>
            </div>
            <div className="text-sm text-gray-700">
              To Start by:
              <div>18th Jan 2025</div>
            </div>
          </div>
          <div className="flex justify-between align-middle ">
            <div className="mb-4 ">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Cost
              </label>
              <div className="text-sm text-gray-700">$400</div>
            </div>

            {/* Venue */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Venue
              </label>
              <div className="text-sm text-gray-700">Online / Virtual</div>
            </div>
          </div>
          {/* Cost */}
          {/* Enquiries */}
          <div className="mb-4 flex justify-between items-start">
            {/* Email Section */}
            <div className="block text-sm font-medium text-gray-600 mb-2 flex items-center">
              <div>
                For Enquiries
                <div className="flex justify-between mt-2">
                  <FaEnvelope className="text-gray-700 mr-2 " />{" "}
                  {/* Email Icon */}
                  <div className="text-sm text-gray-700">
                    info@theenablement.com
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-sm text-gray-600 flex items-center">
              <div>
                Contact Number
                <div
                  className="flex mt-2
               justify-between"
                >
                  <FaPhoneAlt className="text-gray-700 mr-2" />{" "}
                  {/* Phone Icon */}
                  <div className="text-sm text-gray-700">010 335-1182</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <div>
          <button className="w-full relative group bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center">
            <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>

            <span className="mr-2 relative z-10 text-white group-hover:text-white flex items-center">
              Book Now
            </span>
          </button>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-between gap-4 mt-4">
          <button className="w-full relative group bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center">
            <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>

            <span className="relative z-10 text-white group-hover:text-white flex items-center">
              {" "}
              <IoCall className="mr-2" />
              Call us to Discuss
            </span>
          </button>
          <button className="w-full relative group bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center">
            <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>

            <span className="relative z-10 text-white group-hover:text-white flex items-center">
              {" "}
              <FaShareAlt className="mr-2" />
              Share This
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default PriceSideBar;
