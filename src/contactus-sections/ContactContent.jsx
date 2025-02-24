import React from "react";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhoneAlt,
  FaQuestionCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineDescription, MdOutlineSupportAgent } from "react-icons/md";

function ContactContent({ contactData }) {
  if (!contactData) return <p></p>;

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold uppercase  bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text  mb-6">
            {contactData.title}
          </h1>
          {contactData.description.split("\r\n\r\n").map((para, index) => (
            <p key={index} className=" sm:text-left  sm:leading-6 leading-5 lg:text-lg sm:font-normal text-justify text-sm md:text-base   mb-6">

              {para}

            </p>
          ))}


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Location Card */}
            <div className="p-3 bg-white border border-gray-200 shadow-md rounded-lg transform hover:scale-105 transition duration-300 flex flex-col items-center justify-center min-h-[250px]">
              <AiOutlineGlobal className="w-10 h-10 text-[#DB0032] mb-4" />
              <h3 className="text-base md:text-lg text-center font-semibold text-gray-800">
                Visit Anytime
              </h3>
              <p className="text-base md:text-lg text-gray-600 mt-2 text-center">
              {contactData.address}
              </p>
            </div>

            <div className="p-3 bg-white border border-gray-200 shadow-md rounded-lg transform hover:scale-105 transition duration-300 flex flex-col items-center justify-center min-h-[250px]">
              <FaPhoneAlt className="w-10 h-10 text-[#DB0032] mb-4" />
              <h3 className="text-base md:text-lg text-center font-semibold text-gray-800">
                Have Any Questions?
              </h3>
              <p className="text-base md:text-lg text-gray-600 mt-2 text-center">
              {contactData.phone}
              </p>
            </div>

            <div className="p-3 bg-white border border-gray-200 shadow-md rounded-lg transform hover:scale-105 transition duration-300 flex flex-col items-center justify-center min-h-[250px]">
              <FaEnvelope className="w-10 h-10 text-[#DB0032] mb-4" />
              <h3 className="text-base md:text-lg text-center font-semibold text-gray-800">
                Write Email
              </h3>
              <p className="text-base md:text-lg text-gray-600 mt-2 text-center break-all">
              {contactData.email}

              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8 cursor-pointer space-x-6">
            <div className="transform hover:scale-110 transition duration-300 bg-blue-700 p-3 rounded-full text-white">
            <a href={contactData.linkedin_url}>
              
              <FaLinkedin size={24} />
              </a>  
            </div>

            <div className="transform hover:scale-110 transition duration-300 bg-blue-400 p-3 rounded-full text-white">
            <a href={contactData.twitter_url}>  <FaTwitter size={24} /> </a>
            </div>

            <div className="transform hover:scale-110 transition duration-300 bg-blue-600 p-3 rounded-full text-white">
            <a href={contactData.facebook_url}>  <FaFacebook size={24} /> </a>
            </div>

            <div className="transform hover:scale-110 transition duration-300 bg-pink-500 p-3 rounded-full text-white">
            <a href={contactData.instagram_url}>  <FaInstagram size={24} /> </a>
            </div>
          </div>
        </div>

        <div className="space-y-6 shadow-lg p-5">
          <h2 className="text-xl sm:text-2xl font-semibold  text-center uppercase text-black mb-4">
            Fill Out The Form
          </h2>

          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                placeholder="Your Name*"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060B33] transition duration-300 ease-in-out hover:border-[#060B33]"
              />
              <FaUser className="absolute left-3 top-3 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="text"
                id="company"
                required
                placeholder="Company Name*"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060B33] transition duration-300 ease-in-out hover:border-[#060B33]"
              />
              <FaBuilding className="absolute left-3 top-3 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                required
                placeholder="Email Address*"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060B33] transition duration-300 ease-in-out hover:border-[#060B33]"
              />
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="number"
                id="phone"
                required
                placeholder="Phone Number*"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060B33] transition duration-300 ease-in-out hover:border-[#060B33]"
              />
              <FaPhoneAlt className="absolute left-3 top-3 text-gray-500" />
            </div>

            <div className="relative">
              <select
                id="inquiry"
                required
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060B33] transition duration-300 ease-in-out hover:border-[#060B33]"
              >
                <option value="" disabled selected>
                  Select Inquiry Type
                </option>
                <option value="demo">Request a Demo</option>
                <option value="consultation">Consultation</option>
                <option value="support">Support</option>
                <option value="general">General Inquiry</option>
              </select>
              <MdOutlineSupportAgent className="absolute left-3 top-3 text-gray-500" />
            </div>

            <div className="relative">
              <textarea
                id="message"
                required
                rows="5"
                placeholder="Your Message*"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#060B33] transition duration-300 ease-in-out hover:border-[#060B33]"
              ></textarea>
              <MdOutlineDescription className="absolute left-3 top-3 text-gray-500" />
            </div>

            <div className="text-center flex justify-center">
              <button
                type="submit"
                className="relative uppercase font-medium text-white transition-all duration-300 ease-in-out overflow-hidden group bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none shadow-lg flex items-center justify-center text-sm md:text-[14px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] px-5 py-2.5 w-full md:px-2 md:py-2 lg:px-3 lg:py-3 xl:px-6 xl:py-3 md:w-[250px] lg:w-auto xl:w-auto"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>

                <span className="relative text-white flex items-center">
                  <FaPaperPlane className="mr-2" />{" "}

                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
