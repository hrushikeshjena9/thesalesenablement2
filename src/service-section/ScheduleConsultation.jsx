import React from "react";
import {
  FaRegCalendarCheck,
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";
import ScheduleForm from "./ScheduleForm";

const ScheduleConsultation = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
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

          <button className="px-6 py-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white text-lg font-semibold shadow-md focus:outline-none hover:from-[#FA6602] hover:to-[#DB0032] transition duration-300 flex items-center">
            Get Started
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <ScheduleForm />
        </div>
      </div>
    </div>
  );
};

export default ScheduleConsultation;
