// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const CourseDetailSection = () => {
//   const { courseId } = useParams(); // Extract the course ID from the URL
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     // Fetch course data using the courseId
//     const fetchCourseDetails = async () => {
//       try {
//         // Assuming you're fetching from an API endpoint
//         const response = await fetch(`/api/courses/${courseId}`); // Adjust the URL according to your API
//         const courseData = await response.json();

//         if (response.ok) {
//           setCourse(courseData);
//         } else {
//           console.error("Failed to fetch course details");
//         }
//       } catch (error) {
//         console.error("Error fetching course details:", error);
//       }
//     };

//     fetchCourseDetails();
//   }, [courseId]);

//   if (!course) return <div>Loading...</div>; // Show loading indicator while fetching course data

//   return (
//     <section className="flex-1">
//       <div className="course-detail-container">
//         <h2>{course.title}</h2>
//         <p>{course.description}</p>
//         <p>Instructor: {course.instructor}</p>
//         <p>Price: {course.price}</p>
//         <p>Rating: {course.starCategory} ★</p>
//         <div>
//           <h3>Lessons:</h3>
//           <p>{course.lessons} lessons</p>
//           <h3>Students:</h3>
//           <p>{course.students} students enrolled</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CourseDetailSection;

import React, { useEffect, useState } from "react";
import { FaArrowDown, FaCircle, FaUsers } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import TabNavigation from "../components/TabNavigation";
import RelatedCourseSlider from "./RelatedCourseSlider";

const CourseDetailSection = () => {
  const { courseId } = useParams(); // Extract courseId from the URL
  const [course, setCourse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [relatedCourses, setRelatedCourses] = useState([]);
  useEffect(() => {
    // Replace this with actual API or data fetching logic based on courseId
    const fetchCourseDetails = async () => {
      // Here, we simulate a course data object based on courseId
      const courseData = {
        id: courseId,
        title: "Retail Sales Planning and Forecasting",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered theLorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        price: "$220",
        instructor: "Daniel Lee",
        instructorImage: "/src/assets/person7.png",
        starCategory: "4.8",
        lessons: 16,
        students: 350,
        image: "/src/assets/banner3.png",
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
      ];

      setCourse(courseData);
      setRelatedCourses(relatedCoursesData);
    };

    fetchCourseDetails();
  }, [courseId]);

  if (!course) return <div>Loading...</div>;

  return (
    <section className=" w-3/4 mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold text-gray-900 flex items-center">
            <FaCircle className="text-[#DB0032] mr-2" />{" "}
            {/* Dot icon with styling */}
            {course.title}
          </h2>
        </div>
      </div>

      <div className="md:w-1/3 md:ml-8 xl:w-full xl:ml-0 mt-6 md:mt-0 mb-6 relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />

        <Link
          to={course.brochureLink}
          className="absolute bottom-4 right-4 px-6 py-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3 flex items-center space-x-2"
        >
          <span>Download Brochure</span>
          <FaArrowDown />
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Overview</h1>
        <p className="text-gray-700 mt-2 text-justify">{course.description}</p>
      </div>

      <TabNavigation />

      <div className="course-details   text-gray-700">
        <div className="flex   mb-4">
          <img
            src={course.instructorImage}
            alt={course.instructor}
            className="w-60 h-62 mr-4"
          />
          <div>
            <div>
              <p className="text-2xl uppercase font-bold text-black">
                {course.instructor}
              </p>
              <p className="text-sm uppercase font-bold text-black mt-2">
                {/* {course.instructor} */}
                Sales Trainer & Coach
              </p>
            </div>

            <div className="mt-4 flex gap-24  justify-between">
              <div className="flex items-center">
                <FaUsers className="text-[#DB0032] mr-2" />
                {/* Icon with some styling */}
                <p>{course.students} Students </p>
              </div>
              <div>
                <p className="flex gap-2">
                  <span className="font-semibold text-yellow-500">
                    {course.starCategory} ★
                  </span>
                  Rating
                </p>
              </div>
            </div>

            <hr className="mt-4" />
            <div className="mt-3">
              <p>
                ble content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
              </p>
            </div>
            <div className="mt-4">
              <Link
                to={course.brochureLink}
                className="px-6  py-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3  items-center space-x-2"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="course-stats  mt-20">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-4">
              <div className="h-1 w-16 bg-gradient-to-r from-[#DB0032] to-[#FA6602]"></div>
              <h1 className="uppercase text-3xl font-bold">Related Courses</h1>
              <div className="h-1 w-16 bg-gradient-to-r from-[#DB0032] to-[#FA6602]"></div>
            </div>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-1 mt md:grid-cols-1 gap-6">
              <RelatedCourseSlider key={course.id} course={course} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailSection;
