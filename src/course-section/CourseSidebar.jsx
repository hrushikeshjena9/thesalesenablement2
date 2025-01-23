// import React, { useState } from "react";
// import Calendar from "react-calendar"; // Import Calendar component
// import "react-calendar/dist/Calendar.css"; // Import calendar styles

// const CourseSidebar = ({ setFilters }) => {
//   const [location, setLocation] = useState("both");
//   const [audience, setAudience] = useState("both");
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
//   const [price, setPrice] = useState("all");
//   const [instructors, setInstructors] = useState({
//     "John Doe": false,
//     "Jane Smith": false,
//     "David Lee": false,
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   const [date, setDate] = useState(new Date()); // State for selected date

//   const handleFilterChange = () => {
//     setFilters({
//       location,
//       audience,
//       topics,
//       searchTerm,
//       category,
//       price,
//       instructors,
//       date, // Add selected date to filters
//     });
//   };

//   const handleClearFilters = () => {
//     setLocation("both");
//     setAudience("both");
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
//     setPrice("all");
//     setInstructors({
//       "John Doe": false,
//       "Jane Smith": false,
//       "David Lee": false,
//     });
//     setDate(new Date()); // Reset date
//   };

//   return (
//     <aside
//       className={`w-full md:w-1/4 h-1/2 bg-gray-100 p-6 shadow-lg md:block ${
//         isOpen ? "block" : "hidden"
//       } md:flex`}
//     >
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden absolute top-4 left-4 bg- text-white p-2 rounded"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "Close Filters" : "Show Filters"}
//       </button>

//       {/* Sidebar Content */}
//       <div className="flex flex-col w-full">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">
//           Sales Training Filters
//         </h2>

//         {/* Search Bar */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">
//             Search Courses
//           </label>
//           <input
//             type="text"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-"
//             placeholder="Search for courses"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Location Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">
//             Location
//           </label>
//           <select
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             <option value="onsite">Onsite</option>
//             <option value="virtual">Virtual</option>
//             <option value="both">Both</option>
//           </select>
//         </div>

//         {/* Audience Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">
//             Audience
//           </label>
//           <select
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-"
//             value={audience}
//             onChange={(e) => setAudience(e.target.value)}
//           >
//             <option value="sales-leaders">Sales Leaders</option>
//             <option value="sales-teams">Sales Teams</option>
//             <option value="both">Both</option>
//           </select>
//         </div>

//         {/* Topics Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">
//             Topics
//           </label>
//           <div className="space-y-2">
//             {[
//               "sellingSkills",
//               "frontlineRetail",
//               "salesManagement",
//               "territoryPlanning",
//               "retailPlanning",
//               "communicationSkills",
//             ].map((topic) => (
//               <div key={topic} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id={topic}
//                   checked={topics[topic]}
//                   onChange={() => {
//                     setTopics((prev) => ({ ...prev, [topic]: !prev[topic] }));
//                   }}
//                   className="mr-2"
//                 />
//                 <label className="text-sm" htmlFor={topic}>
//                   {topic.replace(/([A-Z])/g, " $1").toUpperCase()}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">
//             Category
//           </label>
//           <select
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="all">All</option>
//             <option value="leadership">Leadership</option>
//             <option value="sales">Sales</option>
//             <option value="management">Management</option>
//           </select>
//         </div>

//         {/* Price Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">
//             Price
//           </label>
//           <div className="flex items-center">
//             <span className="text-sm text-gray-600">${price}</span>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               step="1"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Instructor Filter */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">
//             Instructor
//           </label>
//           <div className="space-y-2">
//             {Object.keys(instructors).map((instructor) => (
//               <div key={instructor} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id={instructor}
//                   checked={instructors[instructor]}
//                   onChange={() => {
//                     setInstructors((prev) => ({
//                       ...prev,
//                       [instructor]: !prev[instructor],
//                     }));
//                   }}
//                   className="mr-2"
//                 />
//                 <label className="text-sm" htmlFor={instructor}>
//                   {instructor}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Calendar View */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600 mb-2">
//             Select Date
//           </label>
//           <Calendar
//             value={date}
//             onChange={setDate}
//             className="border border-gray-300 rounded-lg"
//           />
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex gap-4">
//           <button
//             className="w-full bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white p-3"
//             onClick={handleFilterChange}
//           >
//             Apply Filters
//           </button>
//           <button
//             className="w-full bg-gray-300 text-black p-3"
//             onClick={handleClearFilters}
//           >
//             Clear Filters
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default CourseSidebar;


import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CourseSidebar = ({ setFilters }) => {
  const [location, setLocation] = useState("both");
  const [audience, setAudience] = useState("both");
  const [topics, setTopics] = useState({
    sellingSkills: false,
    frontlineRetail: false,
    salesManagement: false,
    territoryPlanning: false,
    retailPlanning: false,
    communicationSkills: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("50");
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleApplyFilters = () => {
    setFilters({
      location,
      audience,
      topics,
      searchTerm,
      category,
      price,
      date,
    });
  };

  const handleClearFilters = () => {
    setLocation("both");
    setAudience("both");
    setTopics({
      sellingSkills: false,
      frontlineRetail: false,
      salesManagement: false,
      territoryPlanning: false,
      retailPlanning: false,
      communicationSkills: false,
    });
    setSearchTerm("");
    setCategory("all");
    setPrice("50");
    setDate(new Date());
  };

  return (
    <aside
      className={`w-full md:w-1/4 bg-gray-50 shadow-lg rounded-lg p-6 md:block ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white px-4 py-2 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Filters" : "Show Filters"}
      </button>

      {/* Sidebar Content */}
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter Courses</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Search
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#060B33]"
            placeholder="Search for courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Location Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Location
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#060B33]"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="onsite">Onsite</option>
            <option value="virtual">Virtual</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Audience Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Audience
          </label>
          <select
            className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-[#060B33]"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
          >
            <option value="sales-leaders">Sales Leaders</option>
            <option value="sales-teams">Sales Teams</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Topics Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Topics
          </label>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(topics).map((topic) => (
              <div key={topic} className="flex items-center">
                <input
                  type="checkbox"
                  id={topic}
                  checked={topics[topic]}
                  onChange={() =>
                    setTopics((prev) => ({ ...prev, [topic]: !prev[topic] }))
                  }
                  className="mr-2 focus:ring-[#FA6602]"
                />
                <label htmlFor={topic} className="text-sm">
                  {topic.replace(/([A-Z])/g, " $1")}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Category
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#060B33]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="leadership">Leadership</option>
            <option value="sales">Sales</option>
            <option value="management">Management</option>
          </select>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Price Range: ${price}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            className="w-full focus:ring-[#060B33]"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Calendar Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Select Date
          </label>
          <Calendar
            value={date}
            onChange={setDate}
            className="border border-gray-300 rounded-md"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="w-full bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white py-3 rounded-lg shadow-md"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
          <button
            className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg"
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;
