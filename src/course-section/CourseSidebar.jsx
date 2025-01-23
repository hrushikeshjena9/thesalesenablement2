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
      className={`w-full md:w-1/4 h-1/3 bg-gray-50 shadow-lg rounded-lg p-6 md:block ${
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Filter Courses
        </h2>

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
        {/* Topics Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Topics
          </label>
          <div className="space-y-4">
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
                  {topic.charAt(0).toUpperCase() +
                    topic.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
              </div>
            ))}
          </div>
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

        {/* Category Filter */}
        {/* <div className="mb-6">
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
        </div> */}
      </div>
    </aside>
  );
};

export default CourseSidebar;
