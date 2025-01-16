import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import RightArrow from "../assets/arrow-right.png";
import OurMission from "../assets/OurMission.png";
import OurVision from "../assets/OurVision.png";
import OurValues from "../assets/OurValues.png";

const VisionMission = () => {
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
      <section className=" py-6 overflow-hidden about-class container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 items-start">
          <motion.div
            className="text-center md:text-left overflow-hidden flex flex-col justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rightVariants}
          >
            <h5
              className="text-[16px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text mt-0 pt-0"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              Our Mission
            </h5>

            <p
              className="uppercase text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[32px] text-justify mt-2 mb-6"
              data-aos="fade-left"
            >
              At The Sales Enablement Company, our mission is clear: to empower
              sales teams to consistently achieve exceptional results. Through
              innovative training programs, expert consulting, and advanced
              tools, we help businesses enhance sales performance, foster
              sustainable practices, and adapt to any market challenges with
              confidence.
            </p>

            <div className="flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4">
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

          <div className="flex justify-center md:justify-center">
            <motion.div
              className="relative overflow-hidden flex-1 h-full"
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
                src={OurMission}
                alt="About"
                className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto object-contain mx-auto"
                data-aos="fade-right"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-6 overflow-hidden about-class container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 items-start">
          <div className="flex justify-center md:justify-center">
            <motion.div
              className="relative overflow-hidden flex-1 h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={leftVariants}
            >
              <img
                src={OurVision}
                alt="About"
                className="max-h-[400px] w-auto object-contain mx-auto" // Adjust the max height value as needed
                data-aos="fade-right"
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center md:text-left overflow-hidden flex flex-col justify-center h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rightVariants}
            style={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <h5
              className="text-[16px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text mt-0 pt-0"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              Our Vision
            </h5>

            <p
              className="uppercase text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[32px] text-justify mt-2 mb-6"
              data-aos="fade-left"
            >
              We aspire to create a world where every sales team is equipped
              with the knowledge, tools, and support needed to excel. Our vision
              is to be the driving force in sales enablement, delivering
              continuous innovation and strategic insights that empower
              businesses to thrive in an ever-evolving competitive landscape.
            </p>

            <div className="flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4">
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
        </div>
      </section>

      <section className=" py-6 overflow-hidden about-class container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 items-start">
          <motion.div
            className="text-center md:text-left overflow-hidden flex flex-col justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={rightVariants}
          >
            <h5
              className="text-[16px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text mt-0 pt-0"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              Our Values
            </h5>

            <p
              className="uppercase text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[32px] text-justify mt-2 mb-6"
              data-aos="fade-left"
            >
              At The Sales Enablement Company, we are guided by a set of core
              values that drive our mission to empower sales teams and deliver
              exceptional results. These values form the foundation of
              everything we do and help us build long-term relationships with
              our clients, partners, and team members.
            </p>

            <div className="flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4">
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

          <div className="flex justify-center md:justify-center">
            <motion.div
              className="relative overflow-hidden flex-1 h-full"
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
                src={OurValues}
                alt="About"
                className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto object-contain mx-auto"
                data-aos="fade-right"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
