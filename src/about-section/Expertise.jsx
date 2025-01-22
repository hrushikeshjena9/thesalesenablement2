import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaLinkedinIn, FaPlus, FaTwitter } from "react-icons/fa";
import expert1 from "../assets/expert1.png";
import expert2 from "../assets/expert2.png";
import expert3 from "../assets/expert3.png";
import expert4 from "../assets/expert4.png";

const Expertise = () => {
  const experts = [
    {
      name: "Sarah Miller",
      title: "Sales Enablement Specialist",
      expertise:
        "Content Creation, Sales Playbook Development, Onboarding Programs",
      image: expert1,
    },
    {
      name: "Jane Smith",
      title: "Sales Trainer & Coach",
      expertise: "Sales Coaching, Communication, Negotiation Skills",
      image: expert2,
    },
    {
      name: "Mark Williams",
      title: "Corporate Sales Trainer",
      expertise:
        "Presentation Skills, Conflict Resolution, Sales Training Program Design",
      image: expert3,
    },
    {
      name: "Olivia Brown",
      title: "Sales Enablement Specialist",
      expertise: "Goal Setting, Performance Metrics, Motivation Techniques",
      image: expert4,
    },
    {
      name: "Katy Perry",
      title: "Sales Enablement Specialist",
      expertise:
        "Content Creation, Sales Playbook Development, Onboarding Programs",
      image: expert1,
    },
    {
      name: "Kane Williamson",
      title: "Corporate Sales Trainer",
      expertise:
        "Prevention Skills, Conflict Resolution, Sales Training Program Design",
      image: expert3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show three items at a time
    slidesToScroll: 1, // Scroll one item at a time
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium-sized screens
        settings: {
          slidesToShow: 2, // Show 2 items for smaller screens
        },
      },
      {
        breakpoint: 768, // Adjust for mobile screens
        settings: {
          slidesToShow: 1, // Show 1 item for very small screens
        },
      },
    ],
  };

  return (
    <section className="py-6 container mx-auto px-4">
      <h5 className="text-[16px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
        Meet our Expertise
      </h5>

      <h2 className="text-[18px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7">
        experienced{" "}
        <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
          consultants and trainers
        </span>
      </h2>

      <p className="uppercase text-sm sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[32px] text-justify mb-8">
        Our team is comprised of experienced consultants and trainers, each with
        a unique set of skills to help your sales team succeed.
      </p>

      <Slider {...settings}>
        {experts.map((expert, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative group flex flex-col h-[550px] mx-6 border-2 border-orange-500 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="h-1/2 border-b-2 border-orange-500">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full "
              />
            </div>

            <div className="h-1/2 flex flex-col justify-center p-6 text-center transition-colors duration-300 group-hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
              <h3 className="text-lg uppercase font-semibold text-gray-800 group-hover:text-white">
                {expert.name}
              </h3>
              <p className="text-sm uppercase text-gray-500 group-hover:text-gray-200 mt-2">
                {expert.title}
              </p>
              <p className="text-gray-600 text-sm mt-3 group-hover:text-gray-100">
                <span className="font bold group-hover:text-gray-200  text-black">
                  Expertise:{" "}
                </span>{" "}
                {expert.expertise}
              </p>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="relative group">
                <div
                  className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] p-3 rounded-full cursor-pointer flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{ width: "50px", height: "50px" }}
                >
                  <FaPlus className="text-white text-xl font-bold" />
                </div>

                <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col space-y-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] p-4 rounded-full ">
                  <FaFacebookF
                    className="text-white cursor-pointer hover:text-gray-600 text-xl transition-colors duration-300"
                    title="Facebook"
                  />
                  <FaLinkedinIn
                    className="text-white cursor-pointer hover:text-gray-600 text-xl transition-colors duration-300"
                    title="LinkedIn"
                  />
                  <FaTwitter
                    className="text-white cursor-pointer hover:text-gray-600 text-xl transition-colors duration-300"
                    title="Twitter"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default Expertise;
