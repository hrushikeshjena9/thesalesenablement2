import React, { useState } from "react";
import BenefitsSection from "./sections/BenefitsSection";
import HeroSFE from "./sections/HeroSFE";
import RightArrow1 from "../../assets/arrow-right1.png";
import RightArrow from "../../assets/arrow-right.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Big from "../../assets/new/salesfource.jpg";
import VideoThumb from "../../assets/new/salesteamimage.jpg";
import Dot from "../../assets/dotted.png";
import Iso from "../../assets/Isolation_Mode.png";
import Three from "../../assets/three.png";
import Fir from "../../assets/fir.png";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaPhoneAlt,
  FaComment,
  FaPaperPlane,
  FaArrowRight,
  FaLongArrowAltDown,
} from "react-icons/fa";
import SalesAssessmentModal from "./sections/SalesAssessmentModal";

const SalesForceEvaluation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    mobile: {
      opacity: 0.5,
      x: "-50%",
    },
  };
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div>
      <HeroSFE />

      <section className="py-12 about-class container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section: Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rightVariants}
          >
            <h2
              className="text-[18px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              Unlock Your Sales Team's Potential with
              <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                Sales Force Evaluation
              </span>
            </h2>

            <p
              className="text-sm md:text-[16px] leading-[32px] text-justify mb-8"
              data-aos="fade-left"
            >
              Our Sales Force Evaluation process is designed to assess the
              capabilities of your sales team using data-driven insights. With
              our proven methodology, we can pinpoint strengths, identify gaps,
              and offer actionable strategies to enhance performance. Let us
              help you transform your team into a high-performing powerhouse.
            </p>

            <div className="flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4 mt-8">
              {/* Take the Evaluation Button */}
              <Link
                to="take-the-sales-force-evaluation"
                type="button"
                className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto flex items-center justify-center"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                <span className="relative text-white group-hover:text-white flex items-center">
                  Take the Evaluation
                  <img
                    src={RightArrow1}
                    alt="Arrow Icon"
                    className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                  />
                </span>
              </Link>

              {/* Contact Us Button */}
              <Link
                to="/view-upcoming-courses"
                type="button"
                className="text-[#000] transition-transform duration-500 ease-out transform flex md:px-10 lg:px-10 xl:px-6 text-nowrap md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto uppercase gap-3 justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-between 2xl:justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000] border-[#000] border-btn2"
              >
                Contact Us Today
                <img
                  src={RightArrow}
                  alt="Arrow"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Section: Image */}
          <div className="flex justify-center">
            <motion.div
              className="relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={leftVariants}
            >
              <img
                src={Big}
                alt="Big Image"
                className="w-full max-w-md lg:max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-12 ">
        <BenefitsSection />
      </div>
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Watch How the Sales Force Evaluation Tool Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left px-6">
            <p className="text-lg text-gray-600 mb-4">
              Discover the powerful features of our tool and how it can help
              your sales team grow and achieve greater success.
            </p>
            <p className="text-md text-gray-600 mb-6">
              With our evaluation tool, gain actionable insights into your
              team's strengths and areas for improvement, empowering them to
              reach new heights.
            </p>

            <div className="flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4 mt-8">
              <Link
                to="take-the-sales-force-evaluation"
                type="button"
                className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto flex items-center justify-center"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                <span className="relative text-white group-hover:text-white flex items-center">
                  Learn More
                  <img
                    src={RightArrow1}
                    alt="Arrow Icon"
                    className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                  />
                </span>
              </Link>
              <button
                onClick={toggleModal}
                type="button"
                className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto flex items-center justify-center"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                <span className="relative text-white group-hover:text-white flex items-center">
                  Take Audit Now
                  <img
                    src={RightArrow1}
                    alt="Arrow Icon"
                    className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                  />
                </span>
              </button>
              {isModalOpen && (
                <SalesAssessmentModal toggleModal={toggleModal} />
              )}
            </div>
          </div>

          <div className="flex justify-end px-4">
            <div className="w-full max-w-[600px] h-[400px] md:h-[600px] relative">
              {!isPlaying ? (
                <div
                  className="w-full h-full bg-cover bg-center rounded-lg shadow-xl cursor-pointer flex items-center justify-center relative"
                  style={{
                    backgroundImage: `url(${VideoThumb})`,
                  }}
                  onClick={handlePlay}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

                  <div className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-1.833A1 1 0 0010 10.25v3.5a1 1 0 001.555.832l3.197-1.833a1 1 0 000-1.664z"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full rounded-lg shadow-xl"
                  src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                  title="Sales Force Evaluation Tool Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content with Additional Information and CTA Buttons */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-center md:text-left mb-6">
              Ready to Unlock Your Sales Team's Potential?
            </h2>
            <p className="text-center md:text-left text-lg mb-6">
              Transform your sales force with our comprehensive evaluation tool.
              It’s time to take your sales team to the next level and drive
              growth.
            </p>
            <p className="text-center md:text-left text-md mb-6">
              Our tool provides in-depth insights into your team's strengths and
              areas of improvement. Whether you're looking to boost performance,
              streamline processes, or enhance skills, we’ve got you covered.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4 mt-8">
              <Link
                to="take-the-sales-force-evaluation"
                type="button"
                className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto flex items-center justify-center"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                <span className="relative text-white group-hover:text-white flex items-center">
                  Schedule a Free Consultation
                  <img
                    src={RightArrow1}
                    alt="Arrow Icon"
                    className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                  />
                </span>
              </Link>
              <Link
                to="/view-upcoming-courses"
                type="button"
                className="text-[#000] transition-transform duration-500 ease-out transform flex md:px-10 lg:px-10 xl:px-6 text-nowrap md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto uppercase gap-3 justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-between 2xl:justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000] border-[#000] border-btn2"
              >
                Download Our Sales Strategy Guide
                <FaLongArrowAltDown className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="md:w-2/5 w-full ">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Full Name Input */}
              <div className="flex items-center space-x-3 border border-gray-300  px-4 py-2">
                <FaUser className="text-gray-500 text-xl" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border-none focus:outline-none "
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center space-x-3 border border-gray-300  px-4 py-2">
                <FaEnvelope className="text-gray-500 text-xl" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border-none focus:outline-none "
                  required
                />
              </div>

              {/* Company Name Input */}
              <div className="flex items-center space-x-3 border border-gray-300  px-4 py-2">
                <FaBuilding className="text-gray-500 text-xl" />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-2 border-none focus:outline-none "
                />
              </div>

              {/* Phone Number Input */}
              <div className="flex items-center space-x-3 border border-gray-300  px-4 py-2">
                <FaPhoneAlt className="text-gray-500 text-xl" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border-none focus:outline-none "
                  required
                />
              </div>

              {/* Additional Comments Input */}
              <div className="flex items-start space-x-3 border border-gray-300  px-4 py-2">
                <FaComment className="text-gray-500 text-xl" />
                <textarea
                  placeholder="Additional Comments or Questions"
                  className="w-full px-4 py-2 border-none focus:outline-none "
                />
              </div>

              {/* Submit Button */}
              <button
                to="take-the-sales-force-evaluation"
                type="button"
                className="text-white w-full group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5   flex items-center justify-center"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                <span className="relative text-white group-hover:text-white flex items-center">
                  Schedule a Free Consultation
                  <img
                    src={RightArrow1}
                    alt="Arrow Icon"
                    className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesForceEvaluation;
