import React, { useEffect, useState } from "react";
import { FaArrowDown, FaBook, FaCircle, FaUsers } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import TabNavigation from "../components/TabNavigation";
import RelatedCourseSlider from "./RelatedCourseSlider";
import RightArrow1 from "../assets/arrow-right1.png";
import CourseImage from "../../src/assets/banner3.png";
import PersonImg from "../../src/assets/person7.png";
import PriceSideBar from "./PriceSideBar";
const CourseDetailSection = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [relatedCourses, setRelatedCourses] = useState([]);
  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courseData = {
        id: courseId,
        title: "Sales Management",
        description:
          "This two day extensive sales training program will guide participants towards uncovering the “Right” skill set and mind set a professional sales person should possess. From controlling conversations with customers to asking the right questions to uncover customer’s needs, this program will enhance sales staff’s ability to connect better with customers, overcome objections and close the sale confidently and effectively delivering commercial and sales objectives.",
        price: "$220",
        instructor: "Daniel Lee",
        instructorImage: PersonImg,
        starCategory: "4.8",
        lessons: 16,
        students: 350,
        image: CourseImage,
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
    <section className=" w-full mx-auto py-6 px-3">
      <div className="w-full">
        <h2 className="text-xl lg:text-3xl font-semibold  flex items-center mb-6">
          <span className="font-semibold text-white bg-gradient-to-r from-[#DB0032] to-[#FA6602] w-10 h-10 mr-3  rounded-full flex justify-center items-center transition-all duration-300">
            <FaBook size={20} />
          </span>{" "}
          {course.title}
        </h2>
      </div>

      <div className="max-w-6xl">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Overview
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-justify font-light max-w-full sm:max-w-3xl md:max-w-5xl">
          {course.description}
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center py-12 ">

        <div className="px-6 py-16 shadow-xl w-full lg:w-4/5">
          <div className="max-w-5xl">



            <h1 className="text-sm sm:text-xl md:text-xl lg:text-2xl font-bold mb-6">
              What makes this leadership programme unique?
            </h1>
            <p className="text-sm sm:text-base md:text-lg  text-justify font-light max-w-full sm:max-w-3xl md:max-w-4xl mb-8">
              Participants utilise an Insights assessment tool for self-awareness, engage
              in peer coaching, network with diverse professionals, generate practical
              solutions for strategic challenges, and develop a personal leadership
              development plan.
            </p>


            <hr />


            <div className="flex flex-col lg:flex-row justify-between gap-6 mt-4">
              {/* How Will You Benefit Section */}
              <div className="w-full lg:w-3/5">
                <h2 className="text-base md:text-lg lg:text-xl font-semibold text-left mb-4">
                  How will you benefit?
                </h2>
                <ul className="list-disc list-inside text-left font-light text-sm md:text-base space-y-2">
                  <li>Begin a significantly enhanced journey of self-mastery.</li>
                  <li>
                    Build social intelligence, business acumen, and an understanding of
                    critical business levers that will transform you into a highly effective
                    decision-maker and negotiator.
                  </li>
                  <li>
                    Develop your strategic and innovative thinking skills and appreciate the
                    dynamic ecosystems in which you work.
                  </li>
                  <li>
                    Position yourself to become an influential and impactful leader with a
                    strong personal and professional brand.
                  </li>
                </ul>
              </div>

              {/* Who Should Attend Section */}
              <div className="w-full lg:w-2/5">
                <h2 className="text-base md:text-lg lg:text-xl font-semibold text-left mb-4">
                  Who should attend?
                </h2>
                <ul className="list-disc list-inside text-left font-light text-sm md:text-base space-y-2">
                  <li>High-potential specialists seeking to move into management.</li>
                  <li>
                    Emerging leaders who have the potential for increased leadership
                    responsibilities and nominal management experience.
                  </li>
                  <li>
                    Middle managers seeking to acquire the skills to position themselves
                    favorably for advancement and effect wider influence.
                  </li>
                </ul>
              </div>
            </div>


            <div className="mt-6 flex flex-wrap justify-between gap-6">

              <div className="w-full sm:w-auto">
                <a
                  href="/leadership-acceleration-programme-brochure-2025.pdf"
                  download
                  className="relative text-xs sm:text-sm   w-full uppercase  px-6 py-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] group text-white flex items-center justify-center sm:justify-start space-x-2"
                >
                  <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                  <span className="relative z-10 text-white group-hover:text-white flex gap-2 items-center">
                    Download the Brochure
                    <FaArrowDown />
                  </span>
                </a>
              </div>

              <div className="w-full sm:w-auto">
                <a
                  href="/meet-the-programme-advisor.pdf"
                  download
                  className="relative w-full text-xs sm:text-sm  uppercase px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] group text-white flex items-center justify-center sm:justify-start space-x-2"
                >
                  <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                  <span className="relative z-10 text-white group-hover:text-white flex gap-2 items-center">
                    Meet the Programme Advisor
                    <FaArrowDown />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full lg:w-1/3">
          <PriceSideBar />
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-base sm:text-xl md:text-2xl font-semibold ">
          Powerful sales questioning technique:
        </h1>
        <p className=" mt-2 text-sm sm:text-base md:text-lg text-justify font-light max-w-full sm:max-w-3xl md:max-w-7xl">
          The core of this program teaches a more effective and more
          professional sales approach that primarily depends on asking a series
          of questions in a specific order that will enable you to find out your
          customer needs and not only uncover problems, but also ask questions
          that make the customer realize that the problem he has been chugging
          along with comfortably is now too big to ignore.
        </p>
      </div>


      <div className="mt-4">
        <h1 className="text-base sm:text-xl md:text-2xl font-semibold">
          Selling to different personality types :
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-justify font-light max-w-full sm:max-w-3xl md:max-w-7xl">
          Moreover, Many salespeople also have a single, preferred style of
          selling and find it difficult to sell to different types of buyers.
          They use a strategy of making friends with customers and while this
          works sometimes, there are certainly buyers out there who just don’t
          like this approach at all. Part of this program will focus around
          dealing with different personalities of buyers and how taking this
          into consideration and adopting a slightly different approach with
          each customer will help you be more successful and close more sales.
        </p>
      </div>
      <div className="py-12">
        <TabNavigation />
      </div>

      <h1 className="text-xl md:text-xl lg:text-2xl font-semibold text-gray-900">Related Courses</h1>
      <div className="py-12">
        <RelatedCourseSlider />
      </div>
    </section>
  );
};

export default CourseDetailSection;

