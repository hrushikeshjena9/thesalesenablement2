import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ServicesDetails1 from "../assets/new/services-details1.jpg";
import ServicesDetails2 from "../assets/new/metic.jpg";
import Recruiting from "../assets/recuirting.jpg";

import {
  FaChartLine,
  FaHandshake,
  FaCogs,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa";
const ServiceDetailSection = () => {
  const { courseId } = useParams(); 
  const [course, setCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);

  useEffect(() => {
    const fetchCourseDetails = async () => {
  
      const courseData = {
        id: courseId,
        title: "Recruiting Process Optimization",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        price: "$220",
        starCategory: "4.8",
        lessons: 16,
        students: 350,
        image: Recruiting,
        location: "online",
        topics: ["salesEnablement", "negotiation"],
        brochureLink: "/brochure.pdf",
      };

      const relatedCoursesData = [
        {
          id: 1,
          title: "Negotiation Skills",
          image: "/src/assets/course1.png",
        },
        {
          id: 2,
          title: "Sales Strategies",
          image: "/src/assets/course2.png",
        },
        {
          id: 3,
          title: "Effective Communication",
          image: "/src/assets/course3.png",
        },
      ];

      setCourse(courseData);
      setRelatedCourses(relatedCoursesData);
    };

    fetchCourseDetails();
  }, [courseId]);

  if (!course) return <div>Loading...</div>;

  const keyFeatures = [
    {
      title: "Sales Force Evaluation",
      description: "Assess and optimize the efficiency of your sales team.",
      icon: <FaChartLine />,
    },
    {
      title: "Recruiting Process Optimization",
      description: "Streamline and improve your recruitment process.",
      icon: <FaHandshake />,
    },
    {
      title: "Sales Candidate Assessments",
      description:
        "Evaluate and select the best candidates for your sales roles.",
      icon: <FaUsers />,
    },
    {
      title: "CRM Selection, Installation, and Integration",
      description:
        "Choose and integrate the perfect CRM solution for your team.",
      icon: <FaCogs />,
    },
    {
      title: "Sales Process Optimization",
      description: "Improve your sales processes for maximum productivity.",
      icon: <FaBullhorn />,
    },

  ];
  return (
    <section className="w-3/4 mx-auto py-6 px-4">
      <div className="md:w-full lg:w-full md:ml-8 xl:w-full xl:ml-0 mt-6 md:mt-0 mb-6 relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="w-full xl:w-2/3">
          <h2 className="text-lg lg:text-3xl font-semibold text-gray-900 flex items-center">
            {course.title}
          </h2>
          <svg
            className="mt-2"
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="4"
            viewBox="0 0 120 4"
            fill="none"
          >
            <rect width="150" height="12" rx="3" fill="#DB0032" />
          </svg>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-gray-700 mt-2 text-justify leading-8">
          {course.description}
        </p>
      </div>
      <div className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Key Features
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Our team brings years of expertise in delivering cutting-edge sales
          enablement solutions designed to empower your sales teams and maximize
          revenue potential.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] shadow-md p-6 rounded-lg hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-white text-3xl">{feature.icon}</div>
                <h3 className="text-white text-sm xl:text-sm 2xl:text-lg font-bold">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white text-sm xl:text-sm 2xl:text:sm font-light mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Our Sales Enablement Solutions in Action
        </h2>
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-8 max-w-6xl mx-auto">
          {/* Image 1 - Sales Training */}
          <div className="flex-1  p-4 rounded-lg ">
            <img
              src={ServicesDetails1}
              alt="Sales Training"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>


          <div className="flex-1  p-4 rounded-lg ">
            <img
              src={ServicesDetails2} 
              alt="Sales Strategy Implementation"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
