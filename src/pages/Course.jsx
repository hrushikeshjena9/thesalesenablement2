

// import React, { useEffect, useState } from "react";
// import CourseList from "../course-section/CourseList";
// import Sidebar from "../course-section/CourseSidebar";
// import HeroCourse from "../course-section/HeroCourse";
// import axios from "../api/axios";
// import FilterMobile from "../course-section/FilterMobile";

// function Course() {
//   const [filters, setFilters] = useState({
//     location: "viewAll",
//     audience: "viewAll",
//       topics: {
    
//     },
//   });

//   const [data, setData] = useState({});
//   const [error, setError] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("/get-cat-filtre");
//         setData(res.data.data);
//         console.log("Filters after setting:", filters);
//       } catch (error) {
//         setError("Failed to fetch data");
//       }
//     };
//     fetchData();
//   }, []);


//   const getFilteredDetails = (filters) => {
//     const { topics } = filters;
//     let details = [];
  
  
//     const activeTopics = Object.keys(topics)
//       .filter((key) => {
//         console.log(`Checking key: ${key}, value: ${topics[key]}`);
//         return topics[key];
//       })
//       .map((key) => {
//         const formattedKey = key
//           .replace(/([A-Z])/g, " $1")
//           .replace(/^./, (match) => match.toUpperCase());
  

//         return formattedKey;
//       })
//       .join(" | ");

  
//     if (activeTopics) {
//       details.push(`${activeTopics}`);
//     }

  
//     return details.length > 0 ? details.join(" | ") : "All Courses";
//   };


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

//         <div className="flex justify-between items-center">
//           <p className="text-sm">
//             Showing:{" "}
//             <span className="text-sm ml-4">
//               {/* {filters.location !== "viewAll" ||
//               Object.values(filters.topics).includes(true) ||
//               filters.audience !== "viewAll"
//                 ? `${getFilteredDetails(filters)}`
//                 : "All Courses"} */}
//                  {getFilteredDetails(filters)}
//             </span>
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row py-12 gap-10">
//           <Sidebar filterData={data} setFilters={setFilters} filters={filters} />
//           <CourseList filterData={data} filters={filters} setFilters={setFilters}  />
//         </div>
//       </div>
//       <FilterMobile
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         filterData={data}
//         setFilters={setFilters}
//       />
//     </div>
//   );
// }

// export default Course;


import React, { useEffect, useState } from "react";
import CourseList from "../course-section/CourseList";
import Sidebar from "../course-section/CourseSidebar";
import HeroCourse from "../course-section/HeroCourse";
import axios from "../api/axios";
import FilterMobile from "../course-section/FilterMobile";

function Course() {
  const [filters, setFilters] = useState({
    location: "viewAll",
    audience: "viewAll",
    topics: {},
  });

  const [data, setData] = useState([]); // Store all courses
  const [filteredData, setFilteredData] = useState([]); // Store filtered courses
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch course data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/get-cat-filtre");
        setData(res.data.data);
        setFilteredData(res.data.data); // Initially set all courses
      } catch (error) {
        setError("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  // Function to filter courses based on selected filters
  useEffect(() => {
    let filteredCourses = data;

    if (filters.location !== "viewAll") {
      filteredCourses = filteredCourses.filter(course => course.location === filters.location);
    }

    if (filters.audience !== "viewAll") {
      filteredCourses = filteredCourses.filter(course => course.audience === filters.audience);
    }

    if (Object.values(filters.topics).includes(true)) {
      filteredCourses = filteredCourses.filter(course =>
        Object.keys(filters.topics).some(topic => filters.topics[topic] && course.topics.includes(topic))
      );
    }

    setFilteredData(filteredCourses);
  }, [filters, data]); // Runs when filters change

  // Function to format and display active filters
  const getFilteredDetails = () => {
    const { topics, location, audience } = filters;
    let details = [];

    if (location !== "viewAll") details.push(`Location: ${location}`);
    if (audience !== "viewAll") details.push(`Audience: ${audience}`);

    const activeTopics = Object.keys(topics)
      .filter(key => topics[key])
      .map(key => key.replace(/([A-Z])/g, " $1").replace(/^./, match => match.toUpperCase()))
      .join(" | ");

    if (activeTopics) details.push(`Topics: ${activeTopics}`);

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
            Showing: <span className="text-sm ml-4">{getFilteredDetails()}</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row py-12 gap-10">
          {/* Pass filterData and setFilters to Sidebar */}
          <Sidebar filterData={data} setFilters={setFilters} filters={filters} />
          {/* Pass filtered courses to CourseList */}
          <CourseList filterData={data} filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <FilterMobile isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} filterData={data} setFilters={setFilters} />
    </div>
  );
}

export default Course;
