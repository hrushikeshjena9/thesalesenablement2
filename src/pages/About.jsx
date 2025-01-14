// import React from "react";
// import Navbar from "../components/Navbar";
// import heroImage1 from "../assets/banner2.jpg";

// const About = () => {
//   return (
//     <>
//       <div className="flex flex-col space-y-16">
//         <HeroAbout />
//       </div>
//       <div className="container mx-auto py-16 px-4">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left Side: Images and Experience Counter */}
//           <div className="space-y-8">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="/path/to/team1.jpg"
//                 alt="Team 1"
//                 className="w-1/2 rounded-md"
//               />
//               <img
//                 src="/path/to/team2.jpg"
//                 alt="Team 2"
//                 className="w-1/2 rounded-md"
//               />
//             </div>
//             <div className="bg-primary text-white p-6 rounded-lg">
//               <h2 className="text-2xl font-bold">25+ Years of Experience</h2>
//             </div>
//           </div>

//           {/* Right Side: About Content */}
//           <div>
//             <h2 className="text-3xl font-bold text-primary mb-4">
//               Inspiring CEOs and Sales Leaders to Unlock Potential and Achieve
//               Excellence
//             </h2>
//             <p className="text-gray-700 mb-6">
//               The Sales Enablement Company is a premier provider of sales
//               training, consulting, and enablement solutions designed to
//               transform sales teams into high-performing powerhouses. We
//               specialize in equipping organizations with the strategies, tools,
//               and skills needed to accelerate revenue growth and streamline
//               sales processes. Our solutions are tailored to meet the unique
//               challenges of each client, ensuring a customized approach to sales
//               success.
//             </p>
//             <div className="flex space-x-4">
//               <button className="btn-primary">Explore Our Courses</button>
//               <button className="btn-secondary">Contact Us Today</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;



import RightArrow1 from "../assets/arrow-right1.png";
import RightArrow from "../assets/arrow-right.png";
import OurMission from "../assets/our-mission.png";
import OurValues from "../assets/our-value.png";
import OurVision from "../assets/our-vision.png";
import AboutImg from "../assets/about.png";
import Group from "../assets/grouppeople.png";
import Thumb from "../assets/thumbsup.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import HeroAbout from "../about-section/HeroAbout";
function About() {
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
      opacity: 0.5, // Adjust opacity for mobile view
      x: "-50%", // Adjust the slide-in position for mobile
    },
  };
  return (
    <>
      <div className="flex flex-col space-y-16">
         <HeroAbout />
     </div>
    <section className="py-12 about-class container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <motion.div
            className="relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={leftVariants}
            style={{
              // You can adjust styles dynamically based on screen size, if needed
              "@media (max-width: 768px)": {
                variant: "mobile", // For mobile views
              },
            }}
          >
            <img
              src={AboutImg}
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
            // You can adjust styles dynamically based on screen size, if needed
            "@media (max-width: 768px)": {
              variant: "mobile", // For mobile views
            },
          }}
        >
          <h5
            className="text-[16px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-offset="200"
          >
            Who We Are
          </h5>

          <h2
            className="text-[18px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-offset="200"
          >
            Empowering{" "}
            <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
              CEOs and Sales <br /> Leaders
            </span>{" "}
            to Achieve Excellence
          </h2>

          <p
            className="text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]  leading-[32px] text-justify mb-8"
            data-aos="fade-left"
          >
            At The Enablement Company, we specialize in empowering sales teams
            to exceed their targets through tailored training, coaching, and
            enablement solutions. With a deep understanding of sales metrics,
            our mission is to help organizations scale and optimize their
            revenue growth. We believe that success is driven by well-equipped,
            motivated, and skilled sales teams.
          </p>

          <div className="space-y-6">
            {[
              {
                img: OurMission,
                title: "Our Mission",
                text: "Revolutionize the performance of sales teams worldwide",
              },
              {
                img: OurValues,
                title: "Our Values",
                text: "Leading partner in transforming sales teams",
              },
              {
                img: OurVision,
                title: "Our Vision",
                text: "Guiding principles that shape everything we do.",
              },
            ].map((item, index) => (
              <div className="flex items-start space-x-4" key={index}>
                {/* Image Column */}
                <div className="w-[10%] flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-w-full hover:scale-110"
                  />
                </div>
                {/* Text Column */}
                <div className="flex items-start w-[90%] gap-6">
                  <div className="w-[30%]">
                    <h5 className="font-bold text-[12px] sm:text-[16px] md:text-[16px]  lg:text-[16px] xl:text-xl uppercase mt-3  sm:mt-4 md:mt-5 lg:mt-1 xl:mt-3">
                      {item.title}
                    </h5>
                  </div>
                  <div className="w-[70%]">
                    <p className="text-[12px] sm:text-[16px] md:text-[18px] mt-3 sm:mt-4 md:mt-5 lg:mt-1 xl:mt-3">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-wrap md:flex-wrap   lg:flex-row xl:flex-nowrap 2xl:flex-nowrap justify-between gap-4 mt-8">
            <Link
              to="take-the-sales-force-evaluation"
              type="button"
              className="text-white group text-nowrap   transition-transform duration-500 ease-out transform  uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none  text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto
               flex items-center justify-center"
            >
              <span className="absolute inset-0 w-0 h-full   bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
              <span className="relative text-white group-hover:text-white flex items-center">
                Schedule a Consultation
                <img
                  src={RightArrow1}
                  alt="Arrow Icon"
                  className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                />
                {/* <FiArrowRight size={50} className="hidden  ml-2 text-[#FA6602] transition-opacity duration-300 ease-in-out group-hover:inline-block group-hover:opacity-100" /> */}
              </span>
            </Link>

            <Link
              to="/view-upcoming-courses"
              type="button"
              className="text-[#000] transition-transform duration-500 ease-out transform  flex md:px-10 lg:px-10 xl:px-6 text-nowrap md:py-3  md:w-auto lg:w-full xl:w-auto 2xl:w-auto  uppercase gap-3 justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-between 2xl:justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000]  border-[#000] border-btn2"
            >
              View Upcoming Courses
              <img src={RightArrow} alt="Arrow" className="w-[24px] h-[24px]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}

export default About;

