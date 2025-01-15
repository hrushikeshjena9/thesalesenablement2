import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaCalendarAlt,
  FaCircle,
  FaComment,
  FaEye,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import TabNavigation from "../components/TabNavigation";
import { FaShareAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import CommentPost from "./CommentPost";
import CommentSection from "./CommentSection";
const BlogDetailSection = () => {
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

        <div className="relative">
          <div className="absolute bottom-4 right-4 flex items-center">
            {/* Share Icon */}
            <div className="relative group">
              <button className="p-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white rounded-full flex items-center justify-center transition-all duration-300">
                <FaShareAlt size={30} className="text-white " />
              </button>

              {/* Social Media Icons on Hover */}
              <div className="absolute right-0 bottom-16 bg-gradient-to-r from-[#DB0032] to-[#FA6602] rounded-full opacity-0 group-hover:opacity-100  transition-all duration-300 ease-out p-2 space-x-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={30}
                    className="text-white hover:text-[#1877F2] text-xl"
                  />
                  <hr className="mt-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={30}
                    className="text-white hover:text-[#1DA1F2] text-xl"
                  />
                  <hr className="mt-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={30}
                    className="text-white hover:text-[#0077B5] text-xl"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <div className="flex flex-wrap gap-4 ">
          {/* Views */}
          <div className="flex items-center space-x-2">
            <FaEye className="text-[#DB0032]" /> {/* Eye icon for views */}
            <span className="text-sm">1.5k</span>
          </div>

          {/* Comments */}
          <div className="flex items-center space-x-2">
            <FaComment className="text-[#DB0032]" /> {/* Comment icon */}
            <span className="text-sm">25</span>
          </div>
        </div>

        <div className="flex gap-4">
          {/* Date */}
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-[#DB0032]" /> {/* Calendar icon */}
            <span className="text-sm">14th Jan 2015</span>
          </div>

          {/* Admin */}
          <div className="flex items-center space-x-2">
            <FaUser className="text-[#DB0032]" /> {/* User icon for Admin */}
            <span className="text-lg font-bold">By Admin</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-gray-700 mt-2 text-justify">{course.description}</p>

        <p className="mt-4 text-gray-600 leading-relaxed text-base">
          Dear Lorem Ipseum <br />
          Cc me on that pipeline, or innovation is hot right now, for beef up.
          Hit the ground running cross-pollination across our domains usability
          nor regroup put. Going forward, touch base. This medium needs to be
          more dynamic, yet are we in agreement, so crank this out. You gotta
          smoke test your hypothesis.
          <br />
          <br />
          Another area of AI that holds great promise is robotics, which
          involves developing more intelligent systems. AI also has the
          potential to improve healthcare by enabling more accurate diagnosis
          and personalized treatments. However, there are also challenges
          associated with the development and deployment of these technologies.
        </p>
      </div>

      <CommentPost />
      <CommentSection/>
    </section>
  );
};

export default BlogDetailSection;
