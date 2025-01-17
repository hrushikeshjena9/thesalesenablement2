// src/App.js
import React, { useState } from "react";
import CourseList from "../course-section/CourseList";
import Sidebar from "../course-section/CourseSidebar";
import HeroCourse from "../course-section/HeroCourse";
import HeroContact from "../contactus-sections/HeroContact";
import ContactContent from "../contactus-sections/ContactContent";
import Faq from "../contactus-sections/Faq";
import FaqImage from "../assets/faq.png";
import MapEmbed from "../contactus-sections/MapEmbed";
import { Link } from "react-router-dom";
import {FaComments} from 'react-icons/fa'; // Import the chat icon

function ContactUsPage() {
  return (
    <div>
      <HeroContact />
      <div className="container mx-auto px-4 py-12 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold uppercase leading-[48px] mb-5">
              Consulting support
              <br />
              <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                is just a call, email, or live chat away.
              </span>
            </h1>
          </div>
          <div>
            <Link
            to="https://calendly.com/theenablement/30min?back=1"
             className="relative uppercase font-medium text-white transition-all duration-300 ease-in-out overflow-hidden group bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none shadow-lg flex items-center justify-center text-sm md:text-[14px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] px-5 py-2.5 w-full md:px-2 md:py-2 lg:px-3 lg:py-3 xl:px-6 xl:py-3 md:w-[250px] lg:w-auto xl:w-auto">
              <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>

              <span className="relative text-white flex items-center">
                <FaComments className="mr-2" /> {/* Icon with margin-right */}
                Let's Chat
              </span>
            </Link>
          </div>
        </div>

        <hr className="py-5" />
        <p className="text-lg text-gray-600">
          Whether you prefer to speak directly with us, send an email, or engage
          in a real-time live chat, our team is always ready to assist. We're
          here to answer your questions and provide support through the
          communication channel that suits you best.
        </p>
      </div>
      <div className="">
        <div className="">
          <ContactContent />
        </div>
      </div>
      <div className=" container mx-auto px-4 py-12 ">
        <div className="flex sm:flex-row justify-between items-start space-y-6 sm:space-y-0 sm:space-x-6">
          {/* FAQ Component */}
          <div className="w-full sm:w-1/2">
            <Faq />
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <img
              src={FaqImage}
              alt="FAQ Illustration"
              className="w-3/5 sm:w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      <MapEmbed />
    </div>
  );
}

export default ContactUsPage;
