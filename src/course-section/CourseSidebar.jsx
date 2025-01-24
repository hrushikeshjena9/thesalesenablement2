// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const CourseSidebar = ({ setFilters }) => {
//   const [location, setLocation] = useState("viewAll");
//   const [audience, setAudience] = useState("viewAll");
//   const [topics, setTopics] = useState({
//     sellingSkills: false,
//     frontlineRetail: false,
//     salesManagement: false,
//     territoryPlanning: false,
//     retailPlanning: false,
//     communicationSkills: false,
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("all");
//   const [price, setPrice] = useState("50");
//   const [date, setDate] = useState(new Date());
//   const [isOpen, setIsOpen] = useState(false);

//   const handleApplyFilters = () => {
//     setFilters({
//       location,
//       audience,
//       topics,
//       category,
//       price,
//       date,
//     });
//   };

//   const handleClearFilters = () => {
//     setLocation("viewAll");
//     setAudience("viewAll");
//     setTopics({
//       sellingSkills: false,
//       frontlineRetail: false,
//       salesManagement: false,
//       territoryPlanning: false,
//       retailPlanning: false,
//       communicationSkills: false,
//     });
//     setSearchTerm("");
//     setCategory("all");
//     setPrice("50");
//     setDate(new Date());
//   };

//   const handleCheckboxChange1 = (e) => {
//     const { id, checked } = e.target;
//     setAudience((prev) => ({
//       ...prev,
//       [id]: checked,
//     }));
//   };
//   const handleCheckboxChange = (e) => {
//     const { id, checked } = e.target;
//     setLocation((prev) => ({
//       ...prev,
//       [id]: checked,
//     }));
//   };
//   return (
//     <aside
//       className={`w-full md:w-1/4 h-1/3  p-6 md:block ${
//         isOpen ? "block" : "hidden"
//       }`}
//     >
//       <button
//         className="md:hidden fixed top-4 left-4 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white px-4 py-2 rounded-lg shadow-md"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "Close Filters" : "Show Filters"}
//       </button>

//       <div className="flex flex-col w-full">
//         <div className="mb-6">
//           <label className="block text-lg font-semibold  mb-3">
//             Training Sessions
//           </label>
//           <div className="space-y-4">
//             {Object.keys(topics).map((topic) => (
//               <div key={topic} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   checked={topics[topic]}
//                   onChange={() =>
//                     setTopics((prev) => ({ ...prev, [topic]: !prev[topic] }))
//                   }
//                   className="mr-2 w-6 h-6"
//                 />
//                 <label htmlFor={topic} className="text-lg">
//                   {topic.charAt(0).toUpperCase() +
//                     topic.slice(1).replace(/([A-Z])/g, " $1")}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <label className="block text-lg font-semibold  mb-3">Location</label>
//           <div className="space-y-4 w-full ">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="onsite"
//                 checked={location.onsite}
//                 onChange={handleCheckboxChange}
//                 className="mr-2 w-6 h-6"
//               />
//               <label htmlFor="onsite" className="text-lg cursor-pointer">
//                 On Site
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="virtual"
//                 checked={location.virtual}
//                 onChange={handleCheckboxChange}
//                 className="mr-2 w-6 h-6"
//               />
//               <label htmlFor="virtual" className="text-lg cursor-pointer">
//                 Virtual
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="viewAll"
//                 checked={location.viewAll}
//                 onChange={handleCheckboxChange}
//                 className="mr-2 w-6 h-6"
//               />
//               <label htmlFor="viewAll" className="text-lg cursor-pointer">
//                 View All
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6">
//           <label className="block text-lg font-semibold  mb-3">
//             Audience
//           </label>
//           <div className="w-full  focus:outline-none focus:ring-2 focus:ring-[#060B33]">
//             {/* Sales Leaders Checkbox */}
//             <div className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 id="sales-leaders"
//                 checked={audience["sales-leaders"]}
//                 onChange={handleCheckboxChange}
//                 className="mr-2 w-6 h-6"
//               />
//               <label htmlFor="sales-leaders" className="text-lg cursor-pointer">
//                 Sales Leaders
//               </label>
//             </div>

//             {/* Sales Teams Checkbox */}
//             <div className="flex items-center mb-2">
//               <input
//                 type="checkbox"
//                 id="sales-teams"
//                 checked={audience["sales-teams"]}
//                 onChange={handleCheckboxChange}
//                 className="mr-2 w-6 h-6"
//               />
//               <label htmlFor="sales-teams" className="text-lg cursor-pointer">
//                 Sales Teams
//               </label>
//             </div>

//             {/* View All Checkbox */}
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="viewAll"
//                 checked={audience.viewAll}
//                 onChange={handleCheckboxChange1}
//                 className="mr-2 w-6 h-6"
//               />
//               <label htmlFor="viewAll" className="text-lg cursor-pointer">
//                 View All
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default CourseSidebar;

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CourseSidebar = ({ setFilters }) => {
  const [location, setLocation] = useState({
    onsite: false,
    virtual: false,
    viewAll: false,
  });
  const [audience, setAudience] = useState({
    "sales-leaders": false,
    "sales-teams": false,
    viewAll: false,
  });
  const [topics, setTopics] = useState({
    sellingSkills: false,
    frontlineRetail: false,
    salesManagement: false,
    territoryPlanning: false,
    retailPlanning: false,
    communicationSkills: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleApplyFilters = () => {
    setFilters({
      location,
      audience,
      topics,
    });
  };

  const handleClearFilters = () => {
    setLocation({
      onsite: false,
      virtual: false,
      viewAll: false,
    });
    setAudience({
      "sales-leaders": false,
      "sales-teams": false,
      viewAll: false,
    });
    setTopics({
      sellingSkills: false,
      frontlineRetail: false,
      salesManagement: false,
      territoryPlanning: false,
      retailPlanning: false,
      communicationSkills: false,
    });
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;

    if (id === "viewAll") {
      // If 'View All' is checked, uncheck other checkboxes
      if (checked) {
        setLocation({
          onsite: false,
          virtual: false,
          viewAll: true,
        });
      } else {
        setLocation((prev) => ({ ...prev, viewAll: false }));
      }
    } else {
      setLocation((prev) => ({ ...prev, [id]: checked }));
    }
  };

  const handleCheckboxChange1 = (e) => {
    const { id, checked } = e.target;

    if (id === "viewAll") {
      // If 'View All' is checked, uncheck other checkboxes
      if (checked) {
        setAudience({
          "sales-leaders": false,
          "sales-teams": false,
          viewAll: true,
        });
      } else {
        setAudience((prev) => ({ ...prev, viewAll: false }));
      }
    } else {
      setAudience((prev) => ({ ...prev, [id]: checked }));
    }
  };
  const handleTopicCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setTopics((prev) => {
      const newTopics = { ...prev, [id]: checked };
      handleApplyFilters(); // Apply filters on change
      return newTopics;
    });
  };

  return (
    <aside
      className={`w-full md:w-1/4 h-1/3 p-6 md:block ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <button
        className="md:hidden fixed top-4 left-4 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white px-4 py-2 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Filters" : "Show Filters"}
      </button>

      <div className="flex flex-col w-full">
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-3">
            Training Sessions
          </label>
          <div className="space-y-4">
            {Object.keys(topics).map((topic) => (
              <div key={topic} className="flex items-center">
                <input
                  type="checkbox"
                  id={topic}
                  checked={topics[topic]}
                  onChange={handleTopicCheckboxChange} // Call this for topic changes
                  className="mr-2 w-6 h-6"
                />
                <label htmlFor={topic} className="text-lg">
                  {topic.charAt(0).toUpperCase() +
                    topic.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-3">Location</label>
          <div className="space-y-4 w-full ">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="onsite"
                checked={location.onsite}
                onChange={handleCheckboxChange} // Call this for location changes
                className="mr-2 w-6 h-6"
              />
              <label htmlFor="onsite" className="text-lg cursor-pointer">
                On Site
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="virtual"
                checked={location.virtual}
                onChange={handleCheckboxChange} // Call this for location changes
                className="mr-2 w-6 h-6"
              />
              <label htmlFor="virtual" className="text-lg cursor-pointer">
                Virtual
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="viewAll"
                checked={location.viewAll}
                onChange={handleCheckboxChange} // Call this for location changes
                className="mr-2 w-6 h-6"
              />
              <label htmlFor="viewAll" className="text-lg cursor-pointer">
                View All
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-3">Audience</label>
          <div className="w-full  focus:outline-none focus:ring-2 focus:ring-[#060B33]">
            {/* Sales Leaders Checkbox */}
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="sales-leaders"
                checked={audience["sales-leaders"]}
                onChange={handleCheckboxChange1} // Call this for audience changes
                className="mr-2 w-6 h-6"
              />
              <label htmlFor="sales-leaders" className="text-lg cursor-pointer">
                Sales Leaders
              </label>
            </div>

            {/* Sales Teams Checkbox */}
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="sales-teams"
                checked={audience["sales-teams"]}
                onChange={handleCheckboxChange1} // Call this for audience changes
                className="mr-2 w-6 h-6"
              />
              <label htmlFor="sales-teams" className="text-lg cursor-pointer">
                Sales Teams
              </label>
            </div>

            {/* View All Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="viewAll"
                checked={audience.viewAll}
                onChange={handleCheckboxChange1} // Call this for audience changes
                className="mr-2 w-6 h-6"
              />
              <label htmlFor="viewAll" className="text-lg cursor-pointer">
                View All
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;
