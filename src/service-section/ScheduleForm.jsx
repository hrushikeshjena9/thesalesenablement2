import React, { useState } from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaRegCalendarCheck,
} from "react-icons/fa";
import RightArrow1 from "../assets/arrow-right1.png";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { MdOutlineDescription } from "react-icons/md";
const ScheduleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [consultationPurpose, setConsultationPurpose] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation scheduled with:", {
      name,
      email,
      mobile,
      consultationType,
      consultationPurpose,
      preferredTime,
      mode,
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8  shadow-md border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-lg lg:text-2xl font-bold text-center uppercase text-gray-800">
          Book Your Consultation
        </h2>
        <p className="text-center text-gray-600 text-sm">
          Fill in the form below, and our team will get back to you promptly.
        </p>

        <div>
          <div className="relative mb-4">
            <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
            <input
              type="text"
              id="name"
              className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
            <input
              type="email"
              id="email"
              className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="relative mb-4">
            <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
            <input
              type="number"
              id="mobile"
              className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="relative mb-4">
            <FaChalkboardTeacher className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
            <select
              id="consultationType"
              className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
              required
            >
              <option value="">Select Consultation Type</option>
              <option value="Initial">Initial Consultation</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Product Demo">Product Demo</option>
              <option value="Technical Support">Technical Support</option>
            </select>
          </div>

          <div className="relative mb-4">
            <MdOutlineDescription  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
            <textarea
              id="consultationPurpose"
              className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
              value={consultationPurpose}
              onChange={(e) => setConsultationPurpose(e.target.value)}
              placeholder="Describe the purpose of your consultation"
              rows="4"
            />
          </div>

          <div className="relative mb-4 ">
            <FaRegCalendarCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
            <input
              type="time"
              id="preferredTime"
              className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              required
            />
          </div>

          <div className="relative mb-4">
            <FaChalkboardTeacher className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
            <select
              id="mode"
              className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              required
            >
              <option value="">Select Mode</option>
              <option value="In-person">In-person</option>
              <option value="Video Call">Video Call</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Chat">Chat</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-xs md:text-sm px-5 py-2.5 w-full md:px-6 md:py-3 md:w-full lg:w-full xl:w-full 2xl:w-full flex items-center justify-center"
          >
            <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
            <span className="relative text-white group-hover:text-white flex items-center">
              Schedule a Consultation
              <img
                src={RightArrow1}
                alt="Arrow Icon"
                className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
              />
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleForm;
