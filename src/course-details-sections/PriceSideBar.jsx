import React from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaGlobeAmericas,
  FaPhoneAlt,
  FaShareAlt,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const PriceSideBar = ({ course }) => {
  return (
    <section className="w-full  bg-white p-4 sm:p-6 hover:scale-105 transition-transform duration-200 shadow-2xl mx-auto ">
      <div>
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-base sm:text-lg font-semibold uppercase">
            Sales Management
          </h2>
          <div className="flex items-center text-xs sm:text-sm px-3 py-2 text-white bg-gradient-to-r from-[#DB0032] to-[#FA6602] rounded-md">
            <FaGlobeAmericas className="mr-2" />
            <p>Virtual</p>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs sm:text-sm bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text mb-2">
            Application Open Between
          </label>
          <div className="text-sm sm:text-md bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text font-bold">
            12th Jan 2025 - 20th Jan 2025
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between gap-4">
          <div>
            <span className="text-xs font-light">To Start by:</span>
            <div className="text-sm font-light">11th Jan 2025</div>
          </div>
          <div>
            <span className="text-xs font-light">To End by:</span>
            <div className="text-sm font-light">15th Jan 2025</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between gap-4">
          <div>
            <span className="text-xs font-light">Cost</span>
            <div className="text-sm sm:text-md bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text font-bold">
              $400
            </div>
          </div>
          <div>
            <span className="text-xs font-light">Venue</span>
            <div className="text-sm text-gray-700">SEC - Illovo</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between items-start gap-4">
          <div className="text-xs font-light text-gray-600">
            <div>For Enquiries</div>
            <div className="flex items-center mt-2">
              <FaEnvelope className="text-gray-700 mr-2" />
              <div className="text-sm font-bold text-gray-700">
                info@theenablement.com
              </div>
            </div>
          </div>
          <div className="text-xs font-light text-gray-600">
            <div>Contact Number</div>
            <div className="flex items-center mt-2">
              <FaPhoneAlt className="text-gray-700 mr-2" />
              <div className="text-sm font-bold text-gray-700">
                010 335-1182
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full relative uppercase group bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center ">
          <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
          <span className="relative z-10 text-white group-hover:text-white flex items-center">
            Book Now
          </span>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-between gap-4">
        <button className="w-full md:w-auto flex-1 uppercase relative group bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center ">
          <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
          <span className="relative z-10 text-white group-hover:text-white flex items-center">
            <IoCall className="mr-2" />
            <span className="text-sm">Call Us</span>
          </span>
        </button>
        <button className="w-full md:w-auto flex-1 uppercase relative group bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center justify-center ">
          <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
          <span className="relative z-10 text-white group-hover:text-white flex items-center">
            <FaShareAlt className="mr-2" />
            <span className="text-sm">Share</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default PriceSideBar;
