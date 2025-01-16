import React from 'react'
import RightArrow1 from "../assets/arrow-right1.png";
import RightArrow from "../assets/arrow-right.png";
import AboutUs1 from "../assets/AboutUs1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
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
    <section className="py-12 about-class overflow-hidden container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center md:justify-start">
        <motion.div
          className="relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={leftVariants}
          style={{
            "@media (max-width: 768px)": {
              variant: "mobile",
            },
          }}
        >
          <img
            src={AboutUs1}
            alt="About"
            className="w-full"
            data-aos="fade-right"
          />
        </motion.div>
      </div>

      <motion.div
        className="text-center md:text-left overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={rightVariants}
        style={{
          "@media (max-width: 768px)": {
            variant: "mobile",
          },
        }}
      >
        <h5
          className="text-[16px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-offset="200"
        >
          About Us
        </h5>

        <h2
          className="text-[18px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-offset="200"
        >
          Inspiring{" "}
          <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            CEOs and Sales Leaders <br />
          </span>{" "}
          To unlock potential and achieve excellence
        </h2>

        <p
          className="uppercase text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]  leading-[32px] text-justify mb-8"
          data-aos="fade-left"
        >
          The Sales Enablement Company is a Premier Provider of Sales
          Training,Consulting, and Enablement Solutions Designed To
          Transform Sales Teams into High-Performing Powerhouses.We
          specialize in Equipping Organizations with the Strategies ,Tools
          and skills needed to accelerate Revenue Growth and streamline
          Sales Processes.Our Solutions are Tailored to Meet the Unique
          Challenges Of Each Client, Ensuring a customized Approach To Sales
          Success.
        </p>

        <div className="flex flex-col sm:flex-wrap md:flex-wrap   lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4 mt-8">
          <Link
            to="take-the-sales-force-evaluation"
            type="button"
            className="text-white group text-nowrap   transition-transform duration-500 ease-out transform  uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none  text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto
           flex items-center justify-center"
          >
            <span className="absolute inset-0 w-0 h-full   bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
            <span className="relative text-white group-hover:text-white flex items-center">
              Explore Our Courses
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
            className="text-[#000] transition-transform duration-500 ease-out transform  flex md:px-10 lg:px-10 xl:px-6 text-nowrap md:py-3  md:w-auto lg:w-full xl:w-auto 2xl:w-auto  uppercase gap-3 justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-between 2xl:justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000]  border-[#000] border-btn2"
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
    </div>
  </section>

  )
}

export default AboutUs
