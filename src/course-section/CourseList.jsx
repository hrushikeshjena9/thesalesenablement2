// import React from "react";
// import CourseItem from "./CourseItem";

// const courses = [
//   {
//     id: 1,
//     title: "Professional Selling Skills",
//     description:
//       "Learn essential skills to close deals and build long-lasting relationships.",
//     image: "path/to/your/image.jpg",
//     location: "onsite", // added location field
//     audience: "sales-teams", // added audience field
//     topics: ["sellingSkills"],
//   },
//   {
//     id: 2,
//     title: "Front Line Retail Selling Skills",
//     description:
//       "Enhance your retail sales skills with practical, real-world techniques.",
//     image: "path/to/your/image.jpg",
//     location: "virtual", // added location field
//     audience: "sales-leaders", // added audience field
//     topics: ["frontlineRetail"],
//   },
//   {
//     id: 3,
//     title: "Sales Management",
//     description:
//       "Become an expert in managing sales teams and achieving sales targets.",
//     image: "path/to/your/image.jpg",
//     location: "both", // added location field
//     audience: "sales-teams", // added audience field
//     topics: ["salesManagement"],
//   },
//   // Add more courses as needed
// ];

// const CourseList = ({ filters }) => {
//   // Filter courses based on the selected filters
//   const filteredCourses = courses.filter((course) => {
//     // Check if the course matches the applied filters
//     const locationMatches =
//       filters.location === "both" || course.location === filters.location;
//     const audienceMatches =
//       filters.audience === "both" || course.audience === filters.audience;

//     // Check if the course topics match the selected filters
//     const topicsMatches =
//       (filters.topics.sellingSkills &&
//         course.topics.includes("sellingSkills")) ||
//       (filters.topics.frontlineRetail &&
//         course.topics.includes("frontlineRetail")) ||
//       (filters.topics.salesManagement &&
//         course.topics.includes("salesManagement")) ||
//       (filters.topics.territoryPlanning &&
//         course.topics.includes("territoryPlanning")) ||
//       (filters.topics.retailPlanning &&
//         course.topics.includes("retailPlanning")) ||
//       (filters.topics.communicationSkills &&
//         course.topics.includes("communicationSkills")) ||
//       Object.values(filters.topics).every((val) => !val); // If no topics are selected, show all courses

//     return locationMatches && audienceMatches && topicsMatches;
//   });

//   return (
//     <section className="flex-1 p-6">
//       <h2 className="text-2xl font-semibold mb-6">
//         {filteredCourses.length > 0
//           ? "Upcoming Sales Training Programs"
//           : "No courses found based on the selected filters."}
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCourses.map((course) => (
//           <CourseItem key={course.id} course={course} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CourseList;


// src/components/CourseList.js
import React, { useState } from "react";
import CourseItem from "./CourseItem";

const courses = [
  {
    id: 1,
    title: "Professional Selling Skills",
    description: "Learn essential skills to close deals and build long-lasting relationships.",
    image: "path/to/your/image.jpg",
    location: "onsite",
    audience: "sales-teams",
    topics: ["sellingSkills"],
  },
  {
    id: 2,
    title: "Front Line Retail Selling Skills",
    description: "Enhance your retail sales skills with practical, real-world techniques.",
    image: "path/to/your/image.jpg",
    location: "virtual",
    audience: "sales-leaders",
    topics: ["frontlineRetail"],
  },
  {
    id: 3,
    title: "Sales Management",
    description: "Become an expert in managing sales teams and achieving sales targets.",
    image: "path/to/your/image.jpg",
    location: "both",
    audience: "sales-teams",
    topics: ["salesManagement"],
  },
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
      filters.topics.sellingSkills && course.topics.includes("sellingSkills") ||
      filters.topics.frontlineRetail && course.topics.includes("frontlineRetail") ||
      filters.topics.salesManagement && course.topics.includes("salesManagement") ||
      filters.topics.territoryPlanning && course.topics.includes("territoryPlanning") ||
      filters.topics.retailPlanning && course.topics.includes("retailPlanning") ||
      filters.topics.communicationSkills && course.topics.includes("communicationSkills") ||
      Object.values(filters.topics).every((val) => !val); // If no topics are selected, show all courses

    return locationMatches && audienceMatches && topicsMatches;
  });

  // Paginate the filtered courses
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex-1 p-6">
      <h2 className="text-2xl font-semibold mb-6">
        {filteredCourses.length > 0
          ? "Upcoming Sales Training Programs"
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
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border-blue-500"
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
