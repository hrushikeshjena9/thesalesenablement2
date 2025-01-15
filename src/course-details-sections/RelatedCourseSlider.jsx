// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBook, FaUsers } from "react-icons/fa";
// import heroImage from "../assets/Logo-banner.png"; // Import the image
// import heroImage1 from "../assets/banner2.jpg";
// import Person3 from "../assets/person3.png";
// import Blog1 from "../assets/blog1.png";
// import Blog2 from "../assets/blog2.png";
// import Blog3 from "../assets/blog3.png";
// import Blog4 from "../assets/blog-4.png";
// const RelatedCourseSlider = () => {
//   const [hoveredCourseId, setHoveredCourseId] = useState(null);

//   // Static course data
//   const courses = [
//     {
//       id: 1,
//       image: heroImage1,
//       title: "Mastering Sales Techniques",
//       description: "Learn effective strategies to boost your sales performance.",
//       price: 99.99,
//       starCategory: 4.5,
//       instructor: "Jane Doe",
//       instructorImage: Person3,
//       lessons: 15,
//       students: 120,
//     },
//     {
//       id: 2,
//       image: Blog1,
//       title: "Digital Marketing Fundamentals",
//       description: "Discover the essentials of online marketing and advertising.",
//       price: 89.99,
//       starCategory: 4.7,
//       instructor: "John Smith",
//       instructorImage: Person3,
//       lessons: 20,
//       students: 150,
//     },
//     {
//       id: 3,
//       image: Blog2,
//       title: "Web Development Bootcamp",
//       description: "A complete guide to becoming a full-stack web developer.",
//       price: 149.99,
//       starCategory: 4.8,
//       instructor: "Emily Johnson",
//       instructorImage: Person3,
//       lessons: 30,
//       students: 200,
//     },
//     {
//       id: 4,
//       image: Blog3,
//       title: "Data Science and Analytics",
//       description: "Gain in-depth knowledge of data analysis and visualization.",
//       price: 129.99,
//       starCategory: 4.6,
//       instructor: "Michael Brown",
//       instructorImage: Person3,
//       lessons: 25,
//       students: 175,
//     },
//     {
//       id: 5,
//       image: Blog4,
//       title: "Graphic Design Masterclass",
//       description: "Master the art of graphic design using modern tools.",
//       price: 109.99,
//       starCategory: 4.4,
//       instructor: "Sophia Lee",
//       instructorImage: Person3,
//       lessons: 18,
//       students: 140,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {courses.map((course) => (
//         <div
//           key={course.id}
//           className="border-2 flex flex-col items-center justify-between shadow-lg bg-gray-100 overflow-hidden relative"
//           style={{
//             borderImage: "linear-gradient(to right, #DB0032, #FA6602) 1",
//           }}
//           onMouseEnter={() => setHoveredCourseId(course.id)}
//           onMouseLeave={() => setHoveredCourseId(null)}
//         >
//           <div
//             className={`w-full h-[233px] transition-all duration-300 bg-cover bg-center ${
//                 hoveredCourseId ? "bg-[#060B33]" : "" // Change to new color on hover
//               }`}
//             style={{
//               backgroundImage: `url(${
//                 hoveredCourseId === course.id ? heroImage : course.image
//               })`,
//             }}
//           />

//           <div
//             className={`px-6 py-4 flex flex-col justify-between transition-all duration-300 ${
//               hoveredCourseId === course.id
//                 ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white"
//                 : ""
//             }`}
//             style={{ minHeight: "350px" }}
//           >
//             {hoveredCourseId === course.id ? (
//               <>
//                 <div className="flex justify-between items-center mb-4">
//                   <div className="bg-gray-200 rounded-lg uppercase flex items-center justify-center px-6 py-2">
//                     <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent font-bold bg-clip-text">
//                       Sales
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-start mb-4">
//                     <span className="text-yellow-500 font-semibold">
//                       {course.starCategory} ★
//                     </span>
//                     <span className="ml-2 text-gray-500">Rating</span>
//                   </div>
//                 </div>

//                 <h3 className="text-lg font-semibold mb-2 uppercase">
//                   {course.title}
//                 </h3>
//                 <p className="text-sm mb-2">{course.description}</p>
//                 <p className="text-lg font-semibold">${course.price}</p>

//                 <div className="flex items-center mb-4">
//                   <img
//                     src={course.instructorImage}
//                     alt={course.instructor}
//                     className="w-10 h-10 rounded-full mr-3"
//                   />
//                   <div>
//                     <p className="text-sm font-medium uppercase">
//                       {course.instructor}
//                     </p>
//                     <p className="text-xs uppercase">Instructor</p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between">
//                   <Link
//                     to={`/course-details/${course.id}`}
//                     className="text-center w-1/2 text-white bg-[#060B33] hover:bg-[#1f2763] font-semibold py-2 mr-2"
//                   >
//                     View Details
//                   </Link>
//                   <Link
//                     to={`/book-now/${course.id}`}
//                     className="text-center w-1/2 text-white bg-[#060B33] hover:bg-[#1f2763] font-semibold py-2"
//                   >
//                     Book Now
//                   </Link>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h3 className="text-lg font-semibold mb-1 uppercase">
//                   {course.title}
//                 </h3>
//                 <p className="mt-2 text-left mb-2 text-sm">
//                   {course.description}
//                 </p>

//                 <div className="flex items-center mb-4">
//                   <img
//                     src={course.instructorImage}
//                     alt={course.instructor}
//                     className="w-10 h-10 rounded-full mr-3"
//                   />
//                   <div>
//                     <p className="text-sm font-medium uppercase">
//                       {course.instructor}
//                     </p>
//                     <p className="text-xs text-gray-500 uppercase">Instructor</p>
//                   </div>
//                 </div>

//                 <hr className="my-2" />

//                 <div className="flex justify-between text-sm">
//                   <div className="flex items-center">
//                     <FaBook className="mr-2 text-[#DB0032]" size={20} />
//                     <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
//                       {course.lessons} Lessons
//                     </p>
//                   </div>
//                   <div className="flex items-center">
//                     <FaUsers className="mr-2 text-[#DB0032]" size={20} />
//                     <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
//                       {course.students} Students
//                     </p>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RelatedCourseSlider;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaUsers } from "react-icons/fa";
import heroImage from "../assets/Logo-banner.png"; // Import the image
import heroImage1 from "../assets/banner2.jpg";
import Person3 from "../assets/person3.png";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Blog4 from "../assets/blog-4.png";

const RelatedCourseSlider = () => {
  const [hoveredCourseId, setHoveredCourseId] = useState(null);

  // Static course data
  const courses = [
    {
      id: 1,
      image: heroImage1,
      title: "Mastering Sales Techniques",
      description: "Learn effective strategies to boost your sales performance.",
      price: 99.99,
      starCategory: 4.5,
      instructor: "Jane Doe",
      instructorImage: Person3,
      lessons: 15,
      students: 120,
    },
    {
      id: 2,
      image: Blog1,
      title: "Digital Marketing Fundamentals",
      description: "Discover the essentials of online marketing and advertising.",
      price: 89.99,
      starCategory: 4.7,
      instructor: "John Smith",
      instructorImage: Person3,
      lessons: 20,
      students: 150,
    },
    {
      id: 3,
      image: Blog2,
      title: "Web Development Bootcamp",
      description: "A complete guide to becoming a full-stack web developer.",
      price: 149.99,
      starCategory: 4.8,
      instructor: "Emily Johnson",
      instructorImage: Person3,
      lessons: 30,
      students: 200,
    },
    // {
    //   id: 4,
    //   image: Blog3,
    //   title: "Data Science and Analytics",
    //   description: "Gain in-depth knowledge of data analysis and visualization.",
    //   price: 129.99,
    //   starCategory: 4.6,
    //   instructor: "Michael Brown",
    //   instructorImage: Person3,
    //   lessons: 25,
    //   students: 175,
    // },
    // {
    //   id: 5,
    //   image: Blog4,
    //   title: "Graphic Design Masterclass",
    //   description: "Master the art of graphic design using modern tools.",
    //   price: 109.99,
    //   starCategory: 4.4,
    //   instructor: "Sophia Lee",
    //   instructorImage: Person3,
    //   lessons: 18,
    //   students: 140,
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredCourseId((prevId) => {
        const nextId = prevId === courses.length ? 1 : prevId + 1;
        return nextId;
      });
    }, 3000); // Set the interval to 3 seconds (3000ms)

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="border-2 flex flex-col items-center justify-between shadow-lg bg-gray-100 overflow-hidden relative"
          style={{
            borderImage: "linear-gradient(to right, #DB0032, #FA6602) 1",
          }}
          onMouseEnter={() => setHoveredCourseId(course.id)}
          onMouseLeave={() => setHoveredCourseId(null)}
        >
          <div
            className={`w-full h-[233px] transition-all duration-300 bg-cover bg-center ${
              hoveredCourseId ? "bg-[#060B33]" : "" // Change to new color on hover
            }`}
            style={{
              backgroundImage: `url(${
                hoveredCourseId === course.id ? heroImage : course.image
              })`,
            }}
          />

          <div
            className={`px-6 py-4 flex flex-col justify-between transition-all duration-300 ${
              hoveredCourseId === course.id
                ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white"
                : ""
            }`}
            style={{ minHeight: "350px" }}
          >
            {hoveredCourseId === course.id ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-gray-200 rounded-lg uppercase flex items-center justify-center px-6 py-2">
                    <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent font-bold bg-clip-text">
                      Sales
                    </span>
                  </div>
                  <div className="flex items-center justify-start mb-4">
                    <span className="text-yellow-500 font-semibold">
                      {course.starCategory} ★
                    </span>
                    <span className="ml-2 text-gray-500">Rating</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 uppercase">
                  {course.title}
                </h3>
                <p className="text-sm mb-2">{course.description}</p>
                <p className="text-lg font-semibold">${course.price}</p>

                <div className="flex items-center mb-4">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium uppercase">
                      {course.instructor}
                    </p>
                    <p className="text-xs uppercase">Instructor</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Link
                    to={`/course-details/${course.id}`}
                    className="text-center w-1/2 text-white bg-[#060B33] hover:bg-[#1f2763] font-semibold py-2 mr-2"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/book-now/${course.id}`}
                    className="text-center w-1/2 text-white bg-[#060B33] hover:bg-[#1f2763] font-semibold py-2"
                  >
                    Book Now
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold mb-1 uppercase">
                  {course.title}
                </h3>
                <p className="mt-2 text-left mb-2 text-sm">
                  {course.description}
                </p>

                <div className="flex items-center mb-4">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium uppercase">
                      {course.instructor}
                    </p>
                    <p className="text-xs text-gray-500 uppercase">Instructor</p>
                  </div>
                </div>

                <hr className="my-2" />

                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <FaBook className="mr-2 text-[#DB0032]" size={20} />
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                      {course.lessons} Lessons
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-2 text-[#DB0032]" size={20} />
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                      {course.students} Students
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedCourseSlider;
