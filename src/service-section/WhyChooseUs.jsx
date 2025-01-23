import React from "react";
import RightArrow1 from "../assets/arrow-right1.png";
import Person2 from "../assets/person2.png";
import ServicesImg from "../assets/services.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tick from "../assets/Tick.png";

const WhyChooseUs = () => {
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
              src={ServicesImg}
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
            Who We Do
          </h5>

          <h2
            className="text-[18px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-offset="200"
          >
            Empowering Your Business with{" "}
            <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
              Exceptional Solutions <br />
            </span>
          </h2>

          <p
            className=" text-sm sm:text-[16px] md:text-[16px] lg:text-lg xl:text-xl  leading-[32px] text-justify mb-8"
            data-aos="fade-left"
          >
            We pride ourselves on providing comprehensive solutions to optimize
            your sales processes, recruit the best talent, and ensure your sales
            teams are equipped to perform at their best. Our approach is
            tailored, data-driven, and built on years of experience in the
            industry.
          </p>

          <div className="space-y-4">
            {[
              {
                img: Tick,
                title: "Leadership Coaching",
                text: "Enhance executive skills for better decision-making and team guidance.",
              },
              {
                img: Tick,
                title: "CRM Training",
                text: "Master CRM tools to improve customer relationships and sales efficiency.",
              },
              {
                img: Tick,
                title: "Team Coaching",
                text: "Boost team performance and motivation to achieve sales goals.",
              },
            ].map((item, index) => (
              <div className="flex items-start space-x-4" key={index}>
                {/* Image Column */}
                <div className="w-[10%] flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-1/2 mt-2 hover:scale-110"
                  />
                </div>
                {/* Text Column */}
                <div className="flex items-start w-[90%] gap-6">
                  <div className="w-[30%]">
                    <h5 className="font-bold text-[12px] sm:text-[16px] md:text-[16px]  lg:text-[16px] xl:text-lg uppercase mt-3  sm:mt-4 md:mt-5 lg:mt-1 xl:mt-3">
                      {item.title}
                    </h5>
                  </div>
                  <div className="w-[70%]">
                    <p className="text-[12px] sm:text-[16px] md:text-lg mt-3 sm:mt-4 md:mt-5 lg:mt-1 xl:mt-3">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-wrap md:flex-wrap   lg:flex-row xl:flex-nowrap 2xl:flex-nowrap  gap-12 mt-8">
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

            <div className="flex items-center">
              <img
                src={Person2} // Add the correct image source path
                alt="Sales Trainer"
                className="w-16 h-16 mr-4 rounded-full object-cover"
              />

              <div>
                <p className="text-xl uppercase font-bold text-black">Sales</p>
                <p className="text-sm uppercase font-bold text-gray-500 mt-2">
                  Sales Trainer & Coach
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
