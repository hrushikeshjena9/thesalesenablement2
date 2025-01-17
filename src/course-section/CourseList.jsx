import React, { useState } from "react";
import CourseItem from "./CourseItem";
import heroImage1 from "../assets/banner2.jpg";
import Person3 from "../assets/person3.png";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Blog4 from "../assets/blog-4.png";
import SalesPlaybookImg from "../assets/sales-playbook.png";

const courses = [
  {
    id: 1,
    title: "Professional Selling Skills",
    description:
      "Learn essential skills to close deals and build long-lasting relationships.",
    image: heroImage1,
    location: "onsite",
    audience: "sales-teams",
    topics: ["sellingSkills"],
    starCategory: 4.5, // Rating out of 5
    instructor: "John Doe",
    instructorImage: Person3,
    lessons: 12, // Total number of lessons
    students: 150, // Number of enrolled students
    price: 300,
  },
  {
    id: 2,
    title: "Front Line Retail Selling Skills",
    description:
      "Enhance your retail sales skills with practical, real-world techniques.",
    image: Blog4,
    location: "virtual",
    audience: "sales-leaders",
    topics: ["frontlineRetail"],
    starCategory: 4.8,
    instructor: "Jane Smith",
    instructorImage: Person3,
    lessons: 10,
    students: 200,
    price: 300,
  },
  {
    id: 3,
    title: "Sales Management",
    description:
      "Become an expert in managing sales teams and achieving sales targets.",
    image: Blog2,
    location: "both",
    audience: "sales-teams",
    topics: ["salesManagement"],
    starCategory: 4.7,
    instructor: "Michael Johnson",
    instructorImage: Person3,
    lessons: 15,
    students: 250,
    price: 300,
  },

  {
    id: 4,
    title: "Communication Skills for Sales Staff",
    description: "Get the most out of your CRM system to close deals faster.",
    image: Blog3,
    location: "online",
    audience: "sales-teams",
    topics: ["crm", "salesEnablement"],
    starCategory: 4.7,
    instructor: "Emily Davis",
    instructorImage: Person3,
    lessons: 14,
    students: 600,
    price: 180,
  },
  {
    id: 5,
    title: "Sales Territory Planning & Routing",
    description:
      "Streamline your sales processes for maximum efficiency and results.",
    image: Blog1,
    location: "both",
    audience: "sales-leaders",
    topics: ["salesEnablement", "processOptimization"],
    starCategory: 4.9,
    instructor: "Michael Johnson",
    instructorImage: Person3,
    lessons: 20,
    students: 700,
    price: 300,
  },
  {
    id: 6,
    title: "Retail Sales Planning and Forecasting",
    description:
      "Master the art of negotiation to close more deals successfully.",
    image: SalesPlaybookImg,
    location: "online",
    audience: "sales-reps",
    topics: ["salesEnablement", "negotiation"],
    starCategory: 4.8,
    instructor: "Daniel Lee",
    instructorImage: Person3,
    lessons: 16,
    students: 350,
    price: 220,
  },
];

const CourseList = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6; // Number of courses per page

  // Filter courses based on selected filters
  const filteredCourses = courses.filter((course) => {
    const locationMatches =
      filters.location === "both" || course.location === filters.location;
    const audienceMatches =
      filters.audience === "both" || course.audience === filters.audience;

    const topicsMatches =
      (filters.topics.sellingSkills &&
        course.topics.includes("sellingSkills")) ||
      (filters.topics.frontlineRetail &&
        course.topics.includes("frontlineRetail")) ||
      (filters.topics.salesManagement &&
        course.topics.includes("salesManagement")) ||
      (filters.topics.territoryPlanning &&
        course.topics.includes("territoryPlanning")) ||
      (filters.topics.retailPlanning &&
        course.topics.includes("retailPlanning")) ||
      (filters.topics.communicationSkills &&
        course.topics.includes("communicationSkills")) ||
      Object.values(filters.topics).every((val) => !val); // If no topics are selected, show all courses

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

  return (
    <section className="flex-1 ">
      <h2 className="text-2xl font-semibold mb-6">
        {filteredCourses.length > 0
          ? "All Courses"
          : "No courses found based on the selected filters."}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end mt-6">
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white"
                  : "bg-white "
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
