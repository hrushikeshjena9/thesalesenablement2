// import React from "react";
// import HeroCandidate from "./sections/HeroCandidate";
// import Image from "../../assets/Candidates.jpg";
// function CandidateAssessment() {
//   return (
//     <>
//       <HeroCandidate />
//       <div>
//         <h3>Sales Candidate Assessments</h3>
//         <p>
//           Our SALES CANDIDATE ASSESSMENT provides sales leaders with predictive
//           recommendations based on sales-specific competencies about whether a
//           sales candidate will succeed in a selling role.
//         </p>
//       </div>
//     </>
//   );
// }

// export default CandidateAssessment;

import React from "react";
import RightArrow1 from "../../assets/arrow-right1.png";
import RightArrow from "../../assets/arrow-right.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroCandidate from "./sections/HeroCandidate";
import Image from "../../assets/Candidates.jpg";

const CandidateAssessment = () => {
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

      <section className="py-12 about-class container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
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
                  src={Image}
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

            <div className="flex flex-col sm:flex-wrap md:flex-wrap lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4 mt-8">
              <Link
                to="take-the-sales-force-evaluation"
                type="button"
                className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto flex items-center justify-center"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                <span className="relative text-white group-hover:text-white flex items-center">
                  Explore Our Assessments
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
    </>
  );
};

export default CandidateAssessment;
