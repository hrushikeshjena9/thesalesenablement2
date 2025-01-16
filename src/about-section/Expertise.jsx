import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import expert1 from "../assets/expert1.png";
import expert2 from "../assets/expert2.png";
import expert3 from "../assets/expert3.png";
import expert4 from "../assets/expert4.png";

const Expertise = () => {
  const experts = [
    {
      name: "Sarah Miller",
      title: "Sales Enablement Specialist",
      expertise: "Content Creation, Sales Playbook Development, Onboarding Programs",
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
      expertise: "Presentation Skills, Conflict Resolution, Sales Training Program Design",
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
      expertise: "Content Creation, Sales Playbook Development, Onboarding Programs",
      image: expert1,
    },
    {
      name: "Kane Williamson",
      title: "Corporate Sales Trainer",
      expertise: "Prevention Skills, Conflict Resolution, Sales Training Program Design",
      image: expert3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
            className="bg-white shadow-lg rounded-lg overflow-hidden relative group flex flex-col h-[550px] mx-4" // Adjust the height here
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="h-1/2">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-1/2 flex flex-col justify-between p-4 transition-colors duration-300 group-hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-white">
                {expert.name}
              </h3>
              <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-white">
                {expert.title}
              </p>
              <p className="text-gray-700 mt-2 transition-colors duration-300 group-hover:text-white">
                {expert.expertise}
              </p>
            </div>

            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
              <div className="relative group/social">
                <div className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] p-2 rounded-full cursor-pointer">
                  <span className="text-white text-lg">+</span>
                </div>
                <div className="absolute bottom-full right-0 mb-2 hidden group-hover/social:flex flex-col space-y-2 bg-white shadow-lg p-3 rounded-lg">
                  <FaFacebookF className="text-[#0077B5] cursor-pointer" />
                  <FaLinkedinIn className="text-[#0077B5] cursor-pointer" />
                  <FaTwitter className="text-[#1DA1F2] cursor-pointer" />
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


