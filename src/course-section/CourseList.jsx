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
    description: "Streamline your sales processes for maximum efficiency and results.",
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
    description: "Master the art of negotiation to close more deals successfully.",
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
  {
    id: 7,
    title: "Sales Performance Analytics",
    description: "Learn how to use data and analytics to track and boost sales performance.",
    image: "https://via.placeholder.com/150",
    location: "both",
    audience: "sales-managers",
    topics: ["analytics", "salesEnablement"],
    starCategory: 4.7,
    instructor: "Sophia Wilson",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 13,
    students: 400,
    price: 210,
  },
  {
    id: 8,
    title: "Effective Sales Training Programs",
    description: "Create and implement training programs that drive sales performance.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-managers",
    topics: ["salesTraining", "salesEnablement"],
    starCategory: 4.6,
    instructor: "Rachel Scott",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 12,
    students: 500,
    price: 180,
  },
  {
    id: 9,
    title: "Sales Coaching for Success",
    description: "Equip yourself with coaching strategies to elevate your sales team.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-leaders",
    topics: ["salesCoaching", "salesEnablement"],
    starCategory: 4.9,
    instructor: "James Taylor",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 14,
    students: 600,
    price: 240,
  },
  {
    id: 10,
    title: "Sales Enablement Tools & Techniques",
    description: "Leverage the best tools and techniques to enhance your sales enablement efforts.",
    image: "https://via.placeholder.com/150",
    location: "both",
    audience: "sales-teams",
    topics: ["tools", "salesEnablement"],
    starCategory: 4.7,
    instructor: "Olivia Martinez",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 15,
    students: 350,
    price: 230,
  },
  {
    id: 11,
    title: "Social Selling Strategies",
    description: "Learn how to use social media to drive sales and build relationships.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-reps",
    topics: ["socialSelling", "salesEnablement"],
    starCategory: 4.6,
    instructor: "Benjamin Clark",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 18,
    students: 500,
    price: 190,
  },
  {
    id: 12,
    title: "Personalized Sales Pitches",
    description: "Master the art of crafting personalized sales pitches for different customers.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-reps",
    topics: ["salesPitch", "salesEnablement"],
    starCategory: 4.8,
    instructor: "Hannah Lee",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 16,
    students: 420,
    price: 210,
  },
  {
    id: 13,
    title: "Customer Relationship Management (CRM) for Sales",
    description: "Build strong relationships with customers using CRM best practices.",
    image: "https://via.placeholder.com/150",
    location: "both",
    audience: "sales-teams",
    topics: ["crm", "relationshipManagement"],
    starCategory: 4.7,
    instructor: "William Brown",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 14,
    students: 550,
    price: 250,
  },
  {
    id: 14,
    title: "Sales Team Collaboration & Communication",
    description: "Boost sales team productivity through effective collaboration and communication.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-teams",
    topics: ["teamwork", "salesEnablement"],
    starCategory: 4.6,
    instructor: "Ava Garcia",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 12,
    students: 400,
    price: 200,
  },
  {
    id: 15,
    title: "Lead Scoring & Qualification",
    description: "Learn how to score and qualify leads to ensure sales success.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-reps",
    topics: ["leadScoring", "salesEnablement"],
    starCategory: 4.7,
    instructor: "Lucas Evans",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 13,
    students: 480,
    price: 190,
  },
  {
    id: 16,
    title: "Sales Funnel Optimization",
    description: "Optimize your sales funnel to improve lead conversion and sales outcomes.",
    image: "https://via.placeholder.com/150",
    location: "both",
    audience: "sales-managers",
    topics: ["salesFunnel", "salesEnablement"],
    starCategory: 4.8,
    instructor: "Mia White",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 17,
    students: 520,
    price: 240,
  },
  {
    id: 17,
    title: "Building Sales Playbooks",
    description: "Create effective sales playbooks that help drive consistent results.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-leaders",
    topics: ["salesPlaybook", "salesEnablement"],
    starCategory: 4.9,
    instructor: "Elijah Harris",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 15,
    students: 600,
    price: 280,
  },
  {
    id: 18,
    title: "Sales Outreach Strategies",
    description: "Implement powerful outreach strategies to engage more prospects.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-reps",
    topics: ["outreach", "salesEnablement"],
    starCategory: 4.6,
    instructor: "Zoe Carter",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 14,
    students: 450,
    price: 220,
  },
  {
    id: 19,
    title: "Account-Based Selling",
    description: "Learn how to leverage account-based selling for larger deals and more revenue.",
    image: "https://via.placeholder.com/150",
    location: "online",
    audience: "sales-teams",
    topics: ["accountBasedSelling", "salesEnablement"],
    starCategory: 4.8,
    instructor: "James Miller",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 12,
    students: 350,
    price: 230,
  },
  {
    id: 20,
    title: "Sales Enablement Best Practices",
    description: "Learn the best practices to successfully enable your sales team.",
    image: "https://via.placeholder.com/150",
    location: "both",
    audience: "sales-managers",
    topics: ["salesEnablement", "bestPractices"],
    starCategory: 4.7,
    instructor: "Charlotte Moore",
    instructorImage: "https://via.placeholder.com/50",
    lessons: 15,
    students: 500,
    price: 260,
  }
  // Add more courses as needed
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
