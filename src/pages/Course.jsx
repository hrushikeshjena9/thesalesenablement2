// import React, { useState } from "react";
// import CourseList from "../course-section/CourseList";
// import Sidebar from "../course-section/CourseSidebar";
// import HeroCourse from "../course-section/HeroCourse";

// function Course() {
//   const [filters, setFilters] = useState({
//     location: "viewAll",
//     audience: "viewAll",
//     topics: {
//       sellingSkills: false,
//       frontlineRetail: false,
//       salesManagement: false,
//       territoryPlanning: false,
//       retailPlanning: false,
//       communicationSkills: false,
//     },
//   });

  // const getFilteredDetails = (filters) => {
  //   const { topics } = filters;
  //   let details = [];


  //   const activeTopics = Object.keys(topics)
  //     .filter((key) => topics[key])
  //     .map(
  //       (key) =>
  //         key
  //           .replace(/([A-Z])/g, " $1") 
  //           .replace(/^./, (match) => match.toUpperCase())
  //     )
  //     .join(" | ");

  //   if (activeTopics) {
  //     details.push(`${activeTopics}`);
  //   }


  //   return details.length > 0 ? details.join(" | ") : "All Courses";
  // };

//   return (
//     <div>
//       <HeroCourse />
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-sm leading-2 sm:text-2xl lg:text-4xl font-bold uppercase sm:leading-[48px] mb-3 lg:mb-5">
//           All{" "}
//           <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
//             the Sales Enablement Skills You
//           </span>
//           <br /> Need in One Place
//         </h1>
//         <hr className="py-2 lg:py-5" />
//         <p className="max-w-6xl">
//           From foundational sales techniques to advanced AI-driven tools, our
//           platform supports your professional development at every stage.
//           Whether you're looking to improve your sales strategy, integrate AI
//           tools, or refine your marketing techniques, we’ve got you covered. Our
//           short courses cover topics such as strategy, leadership, digitisation
//           and financial acumen. Taught by experienced faculty using lectures,
//           case studies, and other key materials, providing networking and
//           personal development opportunities.
//         </p>

//         <p className="max-w-6xl py-5">
//           For a downloadable calendar of {""}
//           The Sales Enablement {""}
//           2025 programmes
//           <a
//             href="/executive-education-short-courses.pdf" 
//             download
//             className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-lg font-bold text-transparent bg-clip-text px-2 transform transition duration-300"
//           >
//             click here
//           </a>
//         </p>

//         <div>
//           <p className="transform transition duration-300">
//             <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-lg font-bold text-transparent bg-clip-text">
//               Showing: {""}
//             </span>
// <span className="text-sm ml-4">
//   {filters.location !== "viewAll" ||
//   Object.values(filters.topics).includes(true) ||
//   filters.audience !== "viewAll"
//     ? `${getFilteredDetails(filters)}`
//     : "All Courses"}
// </span>
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row py-12 gap-10">
//           <Sidebar setFilters={setFilters} filters={filters} />
//           <CourseList setFilters={setFilters} filters={filters} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Course;


import React, { useState } from "react";
import CourseList from "../course-section/CourseList";
import Sidebar from "../course-section/CourseSidebar";
import HeroCourse from "../course-section/HeroCourse";
import FilterMobile from "../course-section/FilterMobile";


function Course() {
  const [filters, setFilters] = useState({
    location: "viewAll",
    audience: "viewAll",
    topics: {
      sellingSkills: false,
      frontlineRetail: false,
      salesManagement: false,
      territoryPlanning: false,
      retailPlanning: false,
      communicationSkills: false,
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal
  const getFilteredDetails = (filters) => {
    const { topics } = filters;
    let details = [];


    const activeTopics = Object.keys(topics)
      .filter((key) => topics[key])
      .map(
        (key) =>
          key
            .replace(/([A-Z])/g, " $1") 
            .replace(/^./, (match) => match.toUpperCase())
      )
      .join(" | ");

    if (activeTopics) {
      details.push(`${activeTopics}`);
    }


    return details.length > 0 ? details.join(" | ") : "All Courses";
  };
  
  return (
    <div>
      <HeroCourse />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-sm leading-2 sm:text-2xl lg:text-4xl font-bold uppercase sm:leading-[48px] mb-3 lg:mb-5">
          All{" "}
          <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            the Sales Enablement Skills You
          </span>
          <br /> Need in One Place
        </h1>
        <hr className="py-2 lg:py-5" />

        <div className="flex justify-between items-center">
          <p className="text-sm">
            Showing:{" "}
            <span className="text-sm ml-4">
              {filters.location !== "viewAll" ||
                Object.values(filters.topics).includes(true) ||
                filters.audience !== "viewAll"
                ? `${getFilteredDetails(filters)}`
                : "All Courses"}
            </span>
          </p>


        </div>

        <div className="flex flex-col md:flex-row py-12 gap-10">
          <Sidebar setFilters={setFilters} filters={filters} />
          <CourseList setFilters={setFilters} filters={filters} />
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <FilterMobile
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}

export default Course;
