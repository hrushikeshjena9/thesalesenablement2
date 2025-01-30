import React from "react";
import RightArrow1 from "../assets/arrow-right1.png";
import RightArrow from "../assets/arrow-right.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Big from "../assets/big.png";
import Dot from "../assets/dotted.png";
import Iso from "../assets/Isolation_Mode.png";
import Three from "../assets/three.png";
import Fir from "../assets/fir.png";
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
    <section className="py-12 about-class container mx-auto px-4 ">
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
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
          <div className="px-4  sm:px-12">
            <div className="absolute left-28  top-[-10] sm:top-0  sm:left-44 z-[-10]">
              <img
                src={Iso}
                alt=""
                className="w-[200px] h-[200px] sm:w-[480px] sm:h-[480px]"
              />
            </div>

            <div className="flex flex-row sm:flex-row gap-4 sm:gap-8">
              <div className="flex flex-col gap-4 sm:gap-8">
                <div>
                  <img
                    src={Fir}
                    alt=""
                    className="w-[150px] h-[200px] sm:w-[237px] sm:h-[300px]"
                  />
                </div>
                <div>
                  <img
                    src={Three}
                    alt=""
                    className="w-[170px] h-[175px] sm:w-[237px] sm:h-[218px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="rounded-lg rounded-tr-[52px] p-4 w-[100px] h-[80px] sm:w-[134px] sm:h-[105px] bg-white shadow-lg text-center">
                  <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                    25 +
                  </h1>
                  <p className="uppercase text-xs sm:text-base font-bold">
                    Years of
                  </p>
                  <p className="uppercase text-xs sm:text-base font-bold">
                    Experience
                  </p>
                </div>

                <div>
                  <img
                    src={Big}
                    alt=""
                    className="w-[180px] h-[280px] sm:w-[281px] sm:h-[415px]"
                  />
                </div>
              </div>
            </div>

            <div className="relative bottom-8 sm:bottom-10 z-[-10] right-4 sm:right-8">
              <img
                src={Dot}
                alt=""
                className="w-[50px] h-[60px] sm:w-[75.71px] sm:h-[85.38px]"
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
            className="text-[17px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7"
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
            className="text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]  leading-[32px] text-justify mb-8"
            data-aos="fade-left"
          >
            The sales enablement company is a premier provider of sales
            training, consulting, and enablement solutions designed to transform
            sales teams into high-performing powerhouses. We specialize in
            equipping organizations with the strategies, tools, and skills
            needed to accelerate revenue growth and streamline sales processes.
            Our solutions are tailored to meet the unique challenges of each
            client, ensuring a customized approach to sales success.
          </p>

          <div className="flex flex-col sm:flex-wrap md:flex-wrap   lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4 mt-8">
            <Link
              to="/courses"
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
              to="/contact-us"
              type="button"
              className="text-[#000] transition-transform duration-500 ease-out transform  flex md:px-10 lg:px-10 xl:px-6 text-nowrap md:py-3  md:w-auto lg:w-full xl:w-auto 2xl:w-auto  uppercase gap-3 justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-between 2xl:justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000]  border-[#000] border-btn2"
            >
              Contact Us Today
              <img src={RightArrow} alt="Arrow" className="w-[24px] h-[24px]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
