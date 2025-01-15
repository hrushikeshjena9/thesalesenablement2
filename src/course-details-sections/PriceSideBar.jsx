
import React, { useState } from "react";
import CourseImage from "../../src/assets/banner3.png";
import { FaEnvelope, FaPhone, FaPhoneAlt, FaShareAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const PriceSideBar = ({ course }) => {
  return (
    <aside className="w-full h-1/2 md:w-1/3 bg-gray-100 p-6 shadow-lg md:block">
      <div className="flex flex-col w-full">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 uppercase">
            Sales Management
          </h2>
          <div className="flex justify-between">
            <div className="mb-4">
              <label className="block  text-lg font-medium text-gray-600 mb-2">
                Application Open Between
              </label>
              <div className="text-sm  text-bold text-black">
                12th Jan 2025 - 20th Jan 2025
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Mode
              </label>
              <select
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue="Online"
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
          </div>{" "}
          {/* Date Range */}
          <div className="flex justify-between">
            <img src={CourseImage} alt="CourseImage" className="w-72 mr-4" />
            <div>
              {/* Mode */}

              {/* Total Module */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Total Modules
                </label>
                <div className="text-sm text-gray-700">6</div>
              </div>

              {/* Duration */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Duration
                </label>
                <div className="text-sm text-gray-700">48h</div>
              </div>

              {/* Students */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Students
                </label>
                <div className="text-sm text-gray-700">50+</div>
              </div>
            </div>
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
          <button className="w-full bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center">
            <span className="mr-2">Book Now</span>
          </button>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-between gap-4 mt-4">
          <button className="w-full bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center">
            <IoCall className="mr-2" />
            <span>Call us to Discuss</span>
          </button>
          <button className="w-full bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center">
            <FaShareAlt className="mr-2" />
            <span>Share This</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default PriceSideBar;
