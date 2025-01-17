import React, { useState } from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaRegCalendarCheck,
} from "react-icons/fa";

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
        <h2 className="text-2xl font-bold text-center uppercase text-gray-800">
          Book Your Consultation
        </h2>
        <p className="text-center text-gray-600 text-sm">
          Fill in the form below, and our team will get back to you promptly.
        </p>

        <div>
  {/* Name */}
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

  {/* Email */}
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

  {/* Mobile Number */}
  <div className="relative mb-4">
    <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
    <input
      type="tel"
      id="mobile"
      className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
      value={mobile}
      onChange={(e) => setMobile(e.target.value)}
      placeholder="Enter your mobile number"
      required
    />
  </div>

  {/* Consultation Type */}
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

  {/* Consultation Purpose */}
  <div className="relative mb-4">
    <FaQuestionCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#060B33]" />
    <textarea
      id="consultationPurpose"
      className="w-full pl-10 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#060B33]"
      value={consultationPurpose}
      onChange={(e) => setConsultationPurpose(e.target.value)}
      placeholder="Describe the purpose of your consultation"
      rows="4"
    />
  </div>

  {/* Preferred Time */}
  <div className="relative mb-4">
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

  {/* Mode of Consultation */}
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

        {/* Submit Button */}
        <div className="text-center">
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 uppercase px-6 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white font-semibold  shadow-md hover:from-[#FA6602] hover:to-[#DB0032] transition duration-200 focus:outline-none"
            >
              <FaRegCalendarCheck className="inline-block mr-2" /> Book
              Consultation
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ScheduleForm;
