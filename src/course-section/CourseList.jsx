import React, { useState } from "react";
import CourseItem from "./CourseItem";
import {
  FaBook,
  FaChalkboardTeacher,
  FaGlobeAmericas,
  FaUsers,
} from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";
import RightArrow1 from "../assets/arrow-right1.png";

const courses = [
  {
    id: 1,
    title: "Professional Selling Skills",
    description:
      "Learn essential skills to close deals and build long-lasting relationships, For forward-thinking leaders who are ready to develop a more responsive and innovative culture.",

    location: { text: "Onsite", icon: <BsBuildings /> },
    audience: "sales-teams",
    topics: ["Selling Skills"],
    courseName: { text: "Courses", icon: <FaBook /> },
  },
  {
    id: 2,
    title: "Front Line Retail Selling Skills",
    description:
      "Enhance your retail sales skills with practical, real-world techniques, For forward-thinking leaders who are ready to develop a more responsive and innovative culture.",

    location: { text: "Virtual", icon: <FaGlobeAmericas /> },
    audience: "sales-leaders",
    topics: ["frontlineRetail"],
    courseName: { text: "Courses", icon: <FaBook /> },
  },
  {
    id: 3,
    title: "Sales Management",
    description:
      "Become an expert in managing sales teams and achieving sales targets, For forward-thinking leaders who are ready to develop a more responsive and innovative culture.",

    location: { text: "Onsite", icon: <BsBuildings /> },
    audience: "sales-teams",
    topics: ["salesManagement"],
    courseName: { text: "Courses", icon: <FaBook /> },
  },

  {
    id: 4,
    title: "Communication Skills for Sales Staff",
    description:
      "Get the most out of your CRM system to close deals faster, For forward-thinking leaders who are ready to develop a more responsive and innovative culture.",

    location: { text: "Onsite", icon: <BsBuildings /> },
    audience: "sales-teams",
    topics: ["crm", "salesEnablement"],
    courseName: { text: "Master Class", icon: <SiGoogleclassroom /> },
  },

  {
    id: 5,
    title: "Sales Territory Planning & Routing",
    description:
      "Streamline your sales processes for maximum efficiency and results, For forward-thinking leaders who are ready to develop a more responsive and innovative culture.",

    audience: "sales-leaders",
    topics: ["salesEnablement", "processOptimization"],
    location: { text: "Onsite", icon: <BsBuildings /> },
    courseName: { text: "Master Class", icon: <SiGoogleclassroom /> },
  },
  {
    id: 6,
    title: "Retail Sales Planning and Forecasting",
    description:
      "Master the art of negotiation to close more deals successfully, For forward-thinking leaders who are ready to develop a more responsive and innovative culture.",

    location: { text: "Virtual", icon: <FaGlobeAmericas /> },
    audience: "sales-reps",
    topics: ["salesEnablement", "negotiation"],
    courseName: { text: "Courses", icon: <FaBook /> },
  },
  {
    id: 7,
    title: "Advanced Leadership Strategies",
    description:
      "Elevate your leadership skills to build high-performing teams and inspire excellence.",

    location: { text: "Onsite", icon: <FaChalkboardTeacher /> },
    audience: "team-leaders",
    topics: ["leadership", "teamBuilding"],
    courseName: { text: "Workshops", icon: <FaUsers /> },
  },
  {
    id: 8,
    title: "Customer Relationship Management",
    description:
      "Learn effective CRM strategies to strengthen customer loyalty and drive sales growth.",

    location: { text: "Hybrid", icon: <FaGlobeAmericas /> },
    audience: "sales-managers",
    topics: ["customerRetention", "relationshipManagement"],
    courseName: { text: "Seminars", icon: <FaChalkboardTeacher /> },
  },
  {
    id: 9,
    title: "Digital Marketing Essentials",
    description:
      "Understand core digital marketing principles to expand your brand's online presence.",

    location: { text: "Virtual", icon: <FaGlobeAmericas /> },
    audience: "marketing-professionals",
    topics: ["seo", "socialMedia"],
    courseName: { text: "Courses", icon: <FaBook /> },
  },
  {
    id: 10,
    title: "Supply Chain Optimization",
    description:
      "Streamline operations to minimize costs and maximize efficiency across the supply chain.",

    location: { text: "Onsite", icon: <FaChalkboardTeacher /> },
    audience: "supply-chain-managers",
    topics: ["logistics", "processImprovement"],
    courseName: { text: "Programs", icon: <FaUsers /> },
  },
  {
    id: 11,
    title: "Negotiation Skills for Professionals",
    description:
      "Enhance your negotiation skills to achieve better outcomes in business deals.",

    location: { text: "Virtual", icon: <FaGlobeAmericas /> },
    audience: "executives",
    topics: ["negotiation", "salesStrategy"],
    courseName: { text: "Master Class", icon: <FaBook /> },
  },
  {
    id: 12,
    title: "Financial Management Fundamentals",
    description:
      "Learn essential financial management practices to drive business growth effectively.",

    location: { text: "Onsite", icon: <FaChalkboardTeacher /> },
    audience: "finance-managers",
    topics: ["financialPlanning", "budgetManagement"],
    courseName: { text: "Courses", icon: <FaBook /> },
  },
  {
    id: 13,
    title: "Innovation and Creativity in Business",
    description:
      "Foster innovation and creativity to develop breakthrough business solutions.",

    location: { text: "Hybrid", icon: <FaGlobeAmericas /> },
    audience: "business-leaders",
    topics: ["innovation", "creativeThinking"],
    courseName: { text: "Workshops", icon: <FaUsers /> },
  },
  {
    id: 14,
    title: "Project Management Excellence",
    description:
      "Master project management techniques to deliver projects on time and within budget.",

    location: { text: "Onsite", icon: <FaChalkboardTeacher /> },
    audience: "project-managers",
    topics: ["agile", "teamCollaboration"],
    courseName: { text: "Programs", icon: <FaBook /> },
  },
  {
    id: 15,
    title: "Emotional Intelligence for Leaders",
    description:
      "Harness emotional intelligence to build stronger relationships and lead with empathy.",

    location: { text: "Virtual", icon: <FaGlobeAmericas /> },
    audience: "leaders",
    topics: ["emotionalIntelligence", "leadership"],
    courseName: { text: "Seminars", icon: <FaUsers /> },
  },
  {
    id: 16,
    title: "Strategic Thinking and Problem Solving",
    description:
      "Develop critical thinking and problem-solving skills to navigate complex business challenges.",
    location: { text: "Hybrid", icon: <FaGlobeAmericas /> },
    audience: "executives",
    topics: ["strategy", "decisionMaking"],
    courseName: { text: "Workshops", icon: <FaChalkboardTeacher /> },
  },
];

const CourseList = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10;

  // Filter courses based on selected criteria
  const filteredCourses = courses.filter((course) => {
    const locationMatches =
      filters.location === "viewAll" || course.location === filters.location;
    const audienceMatches =
      filters.audience === "viewAll" || course.audience === filters.audience;

    // Filter topics dynamically based on selected filters
    const topicsMatches =
      Object.entries(filters.topics).some(([topic, isSelected]) => {
        return isSelected && course.topics.includes(topic);
      }) || Object.values(filters.topics).every((val) => !val); // If no topics are selected, show all courses

    return locationMatches && audienceMatches && topicsMatches;
  });

  // Paginate the filtered courses
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // console.log("Courses:", courses);
  // console.log("Filters:", filters);
  // console.log("Filtered Courses:", filteredCourses);

  return (
    <section className="flex-1">
      {filteredCourses.length === 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-6">
            We're sorry, but it looks like there are currently no courses
            matching your selected criteria. Our team continuously updates our
            course offerings, so please consider adjusting your filters or check
            back later.
          </h2>
          <div>
            Couldn't find anything of interest for you? If you have a specific
            enquiry or need assistance, please don't hesitate to reach out to us
            directly. Our team is here to help. You can contact us at{" "}
            <a
              href="mailto:info@theenablement.com"
              className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] bg-clip-text text-transparent"
            >
              info@theenablement.com
            </a>{" "}
            for personalised assistance.
          </div>
          <div className="p-6 rounded-lg my-10 shadow-xl flex justify-between items-center">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold mb-4">
                Couldn't find anything of interest for you?
              </h2>
              <p className="text-lg mb-6">
                If you have a specific enquiry or need assistance, please don't
                hesitate to reach out to us directly. Our team is here to help!
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <Link
                  to="/contact-us"
                  type="button"
                  className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto lg:w-full xl:w-auto 2xl:w-auto flex items-center justify-center"
                >
                  <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                  <span className="relative text-white group-hover:text-white flex items-center">
                    Contact Us
                    <img
                      src={RightArrow1}
                      alt="Arrow Icon"
                      className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {currentCourses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CourseList;
