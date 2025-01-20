// // src/App.js
// import React, { useState } from "react";
// import CourseList from "../course-section/CourseList";
// import Sidebar from "../course-section/CourseSidebar";
// import HeroCourse from "../course-section/HeroCourse";
// import HeroContact from "../contactus-sections/HeroContact";
// import ContactContent from "../contactus-sections/ContactContent";
// import Faq from "../contactus-sections/Faq";
// import FaqImg from "../assets/faq-img.png";
// import MapEmbed from "../contactus-sections/MapEmbed";
// import { Link } from "react-router-dom";
// import { FaComments } from "react-icons/fa"; // Import the chat icon

// function ContactUsPage() {
//   return (
//     <div>
//       <HeroContact />
//       <div className="container mx-auto px-4 py-12 ">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Section: Title */}
//           <div>
//             <h1 className="text-3xl font-bold uppercase leading-[48px] mb-5">
//               Consulting support
//               <br />
//               <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
//                 is just a call, email, or live chat away.
//               </span>
//             </h1>
//           </div>

//           {/* Right Section: Chat Button */}
//           <div className="flex justify-end">
//             <Link
//               to="https://calendly.com/theenablement/30min?back=1"
//               className="relative uppercase font-medium text-white transition-all duration-300 ease-in-out overflow-hidden group
//                  bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none shadow-lg
//                  flex items-center justify-center text-sm md:text-[14px] xl:text-[16px] px-5 py-2.5 "
//             >
//               {/* Background Animation */}
//               <span
//                 className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out
//                      group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"
//               ></span>

//               {/* Button Content */}
//               <span className="relative flex items-center">
//                 <FaComments className="mr-2" />
//                 Let's Chat
//               </span>
//             </Link>
//           </div>
//         </div>

//         <hr className="py-5" />
//         <p className="text-lg text-gray-600">
//           Whether you prefer to speak directly with us, send an email, or engage
//           in a real-time live chat, our team is always ready to assist. We're
//           here to answer your questions and provide support through the
//           communication channel that suits you best.
//         </p>
//       </div>
//       <div className="">
//         <div className="">
//           <ContactContent />
//         </div>
//       </div>
//       <div className=" container mx-auto px-4 py-12 ">
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
//           {/* FAQ Component */}
//           <div className="w-full ">
//             <Faq />
//           </div>

//           {/* Image Section */}
//           {/* Image Section */}
//           <div className="w-full flex justify-center relative">
//             {/* Background Element */}
//             <div className="absolute 2xl:top-10 2xl:right-28 xl:top-10 xl:right-20 lg:top-14 lg:right-14 bottom-10 lg:w-[310px] lg:h-[330px] 2xl:w-[430px] 2xl:h-[500px] xl:w-[360px] xl:h-[400px] rounded-lg bg-cover bg-no-repeat faq-bg z-0"></div>

//             {/* Image */}
//             <img
//               src={FaqImg}
//               alt="FAQ Illustration"
//               className=" xl:w-[380px] xl:h-[400px] lg:w-[320px] lg:h-[350px] 2xl:w-[430px] 2xl:h-[500px]  relative z-10"
//             />
//           </div>
//         </div>
//       </div>

//       <MapEmbed />
//     </div>
//   );
// }

// export default ContactUsPage;

import React from "react";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa"; // Import the chat icon
import HeroContact from "../contactus-sections/HeroContact";
import ContactContent from "../contactus-sections/ContactContent";
import Faq from "../contactus-sections/Faq";
import FaqImg from "../assets/faq-img.png";
import MapEmbed from "../contactus-sections/MapEmbed";

function ContactUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroContact />

      {/* Consulting Support Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold uppercase leading-snug mb-5">
              Consulting support
              <br />
              <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                is just a call, email, or live chat away.
              </span>
            </h1>
          </div>

          {/* Right Section: Chat Button */}
          <div className="flex justify-center lg:justify-end">
            <Link
              to="https://calendly.com/theenablement/30min?back=1"
              className="relative uppercase font-medium text-white transition-all duration-300 ease-in-out overflow-hidden group 
                bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none shadow-lg 
                flex items-center justify-center text-sm md:text-[14px] xl:text-[16px] px-5 py-2.5"
            >
              {/* Background Animation */}
              <span
                className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out 
                  group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"
              ></span>

              {/* Button Content */}
              <span className="relative flex items-center">
                <FaComments className="mr-2" />
                Let's Chat
              </span>
            </Link>
          </div>
        </div>

        <hr className="py-5" />
        <p className="text-lg text-gray-600 text-center sm:text-left">
          Whether you prefer to speak directly with us, send an email, or engage
          in a real-time live chat, our team is always ready to assist. We're
          here to answer your questions and provide support through the
          communication channel that suits you best.
        </p>
      </div>

      {/* Contact Content Section */}
      <div className="px-4 py-8">
        <ContactContent />
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* FAQ Component */}
          <div className="w-full">
            <Faq />
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center relative">
            {/* Background Element */}
            <div
              className="absolute right-10
              w-[250px] h-[200px] top-14  sm:right-24
              sm:w-[280px] sm:h-[310px] sm:top-14 2xl:top-10 2xl:right-28 xl:top-10 xl:right-20 md:top-14 md:right-36
              md:w-[300px] md:h-[340px] lg:top-14 lg:right-14 bottom-10 
              lg:w-[310px] lg:h-[330px] 2xl:w-[430px] 2xl:h-[500px] xl:w-[360px] xl:h-[400px] rounded-lg bg-cover bg-no-repeat 
              faq-bg z-0"
            ></div>

            {/* Image */}
            <img
              src={FaqImg}
              alt="FAQ Illustration"
              className="xl:w-[380px] xl:h-[400px] lg:w-[320px] lg:h-[350px] md:w-[360px] md:h-[350px] sm:w-[340px] sm:h-[320px] w-[250px] h-[220px] 2xl:w-[430px] 2xl:h-[500px] 
                relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Map Embed Section */}
      <MapEmbed />
    </div>
  );
}

export default ContactUsPage;
