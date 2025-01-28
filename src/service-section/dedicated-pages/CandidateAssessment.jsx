import React from "react";
import RightArrow1 from "../../assets/arrow-right1.png";
import RightArrow from "../../assets/arrow-right.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroCandidate from "./sections/HeroCandidate";
import Image from "../../assets/Candidates.jpg";
import Image2 from "../../assets/salescandi.jpg";
import {
  FaCog,
  FaChartBar,
  FaCheckCircle,
  FaBrain,
  FaRocket,
  FaSearch,
  FaHandsHelping,
  FaShieldAlt,
  FaUserClock,
  FaSlidersH,
  FaLightbulb,
} from "react-icons/fa";

const CandidateAssessment = () => {
  const benefits = [
    {
      icon: <FaCog />,
      title: "Improved Efficiency",
      description: "Streamline your hiring process with automated assessments.",
    },
    {
      icon: <FaChartBar />,
      title: "Data-Driven Insights",
      description: "Make informed decisions backed by predictive analytics.",
    },
    {
      icon: <FaCheckCircle />,
      title: "100% Accuracy",
      description: "Ensure you hire the right talent every time.",
    },
    {
      icon: <FaUserClock />,
      title: "Faster Hiring Decisions",
      description:
        "Accelerate your recruitment process with real-time evaluations.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Enhanced Security",
      description: "Protect sensitive candidate data with advanced encryption.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Personalized Support",
      description: "Receive 24/7 assistance tailored to your hiring needs.",
    },
    {
      icon: <FaSearch />,
      title: "Comprehensive Analysis",
      description:
        "Gain deep insights into candidate potential and compatibility.",
    },
    {
      icon: <FaRocket />,
      title: "Scalable Solutions",
      description: "Adapt to your organization's evolving hiring requirements.",
    },
    {
      icon: <FaBrain />,
      title: "AI-Powered Recommendations",
      description:
        "Leverage AI to identify the best-fit candidates efficiently.",
    },
  ];
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

  return (
    <>
      <HeroCandidate />

      <section className="py-12 about-class container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={leftVariants}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={Image}
                alt="Candidates Assessment"
                className="w-full h-auto max-w-[480px] sm:max-w-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-center md:text-left overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rightVariants}
          >
            <h5
              className="text-[16px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              Candidate Assessments
            </h5>

            <h2
              className="text-[18px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              Empowering{" "}
              <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                Sales Leaders
              </span>
              <br /> To Make Informed Decisions
            </h2>

            <p
              className="text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[32px] text-justify mb-8"
              data-aos="fade-left"
            >
              Our SALES CANDIDATE ASSESSMENT provides sales leaders with
              predictive recommendations based on sales-specific competencies
              about whether a sales candidate will succeed in a selling role.
            </p>
          </motion.div>
        </div>
        <div className="py-12 px-6 mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Key Benefits
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Discover the advantages that make our solution stand out.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] shadow-md p-6 rounded-lg hover:scale-105 transform transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-white text-3xl">{benefit.icon}</div>
                  <h3 className="text-white text-xl font-bold">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-white mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 banner   ">
        <div className="grid grid-cols-1 container mx-auto px-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            className="relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={leftVariants}
          >
            <div className="px-4 sm:px-12">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={Image2}
                  alt="Candidates Assessment"
                  className="w-full h-auto max-w-[480px] sm:max-w-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center md:text-left overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rightVariants}
          >
            <h5
              className="text-[16px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              Sales Candidate Assessments
            </h5>

            <h2
              className="text-[18px] text-white sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              Download a sample of{" "}
              <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                Sales Candidate Assessment
              </span>
            </h2>
            <div className="flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4 mt-8">
              <Link
                to="sample-sales-candidate-assessments"
                type="button"
                className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto flex items-center justify-center"
              >
                <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out  group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-white group-hover:to-white"></span>
                <span className="relative text-white group-hover:text-[#DB0032] flex items-center">
                  Sample sales Candidate Assessments
                  <img
                    src={RightArrow1}
                    alt="Arrow Icon"
                    className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                  />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            What Makes the Sales Candidate Assessment Unique?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover why this stands out in delivering exceptional candidate
            assessments tailored for sales success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] shadow-lg p-6 rounded-lg border-t-4 border-gradient-to-r from-[#DB0032] to-[#FA6602] hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl text-white mb-4">
                <FaChartBar />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Predictive</h3>
              <p className="text-white">
                Highly predictive in identifying candidates who will excel in
                specific sales roles, ensuring top performers within 12 months.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] shadow-lg p-6 rounded-lg border-t-4 border-gradient-to-r from-[#DB0032] to-[#FA6602] hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl text-white mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                Sales Specific
              </h3>
              <p className="text-white">
                Assesses candidates on 21 sales-specific competencies, covering
                Will to Sell, Sales DNA, and Tactical Selling.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] shadow-lg p-6 rounded-lg border-t-4 border-gradient-to-r from-[#DB0032] to-[#FA6602] hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl text-white mb-4">
                <FaCog />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                Role-Specific
              </h3>
              <p className="text-white">
                Tailored assessments for various sales roles, including hunting,
                farming, account management, and leadership.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] shadow-lg p-6 rounded-lg border-t-4 border-gradient-to-r from-[#DB0032] to-[#FA6602] hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl text-white mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Actionable</h3>
              <p className="text-white">
                Provides clear recommendations for hiring decisions based on the
                skills required for the role.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#DB0032] to-[#FA6602]shadow-lg p-6 rounded-lg border-t-4 border-gradient-to-r from-[#DB0032] to-[#FA6602] hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl text-white mb-4">
                <FaSlidersH />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                Customizable
              </h3>
              <p className="text-white">
                Enables hiring managers to customize assessments to match top
                performers’ competencies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CandidateAssessment;
