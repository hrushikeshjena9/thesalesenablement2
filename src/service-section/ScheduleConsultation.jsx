import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import ScheduleForm from "./ScheduleForm";
import RightArrow1 from "../assets/arrow-right1.png";
import RightArrow from "../assets/arrow-right.png";
const ScheduleConsultation = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-white">
            <FaRegCalendarCheck className="inline-block text-bg-gradient-to-r from-[#DB0032] to-[#FA6602]" />{" "}
            Schedule a Consultation
          </h2>
          <p className="mt-2 text-lg text-white">
            Take the first step toward making informed decisions with expert
            guidance in a personalized consultation.
          </p>

          {/* Description */}
          <div className="mt-8 text-white">
            <p className="mb-4">
              Your business deserves the best advice, and our team is here to
              provide it. Whether you're looking for guidance on a specific
              challenge or strategic insights, our consultants are ready to
              help.
            </p>
            <p className="mb-8">
              With tailored advice designed specifically for your needs, we
              bring real value to your business. Let’s work together to elevate
              your success.
            </p>
          </div>

          <button
            type="button"
            className="relative uppercase font-medium text-white transition-all duration-300 ease-in-out overflow-hidden group bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none shadow-lg flex items-center justify-center text-sm md:text-[14px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] px-5 py-2.5 w-full md:px-2 md:py-2 lg:px-3 lg:py-3 xl:px-6 xl:py-3 md:w-[250px] lg:w-auto xl:w-auto"
          >
            <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] flex items-center">
              Get Started
              <img
                src={RightArrow1} 
                alt="Arrow Icon"
                className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out group-hover:hidden" // Hide on hover
              />
              <img
                src={RightArrow} 
                alt="Arrow Icon Hover"
                className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out hidden group-hover:inline" // Show on hover
              />
            </span>
          </button>
        </div>

        
        <div className="flex justify-center">
          <ScheduleForm />
        </div>
      </div>
    </div>
  );
};

export default ScheduleConsultation;
