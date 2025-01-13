// src/components/Sidebar.js
import React, { useState } from 'react';

const CourseSidebar = ({ setFilters }) => {
  const [location, setLocation] = useState('both');
  const [audience, setAudience] = useState('both');
  const [topics, setTopics] = useState({
    sellingSkills: false,
    frontlineRetail: false,
    salesManagement: false,
    territoryPlanning: false,
    retailPlanning: false,
    communicationSkills: false,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = () => {
    setFilters({ location, audience, topics, searchTerm });
  };

  return (
    <aside
      className={`w-full md:w-1/4 bg-gray-100 p-6 shadow-lg md:block ${isOpen ? 'block' : 'hidden'} md:flex`}
    >
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden absolute top-4 left-4 bg-blue-600 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Filters' : 'Show Filters'}
      </button>

      {/* Sidebar Content */}
      <div className="flex flex-col w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Sales Training Filters</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Search Courses</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Location</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="onsite">Onsite</option>
            <option value="virtual">Virtual</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Audience Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Audience</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
          >
            <option value="sales-leaders">Sales Leaders</option>
            <option value="sales-teams">Sales Teams</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Topics Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Topics</label>
          <div className="space-y-2">
            {[
              'sellingSkills',
              'frontlineRetail',
              'salesManagement',
              'territoryPlanning',
              'retailPlanning',
              'communicationSkills',
            ].map((topic) => (
              <div key={topic} className="flex items-center">
                <input
                  type="checkbox"
                  id={topic}
                  checked={topics[topic]}
                  onChange={() => {
                    setTopics((prev) => ({ ...prev, [topic]: !prev[topic] }));
                  }}
                  className="mr-2"
                />
                <label className="text-sm" htmlFor={topic}>
                  {topic.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleFilterChange}
        >
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default CourseSidebar;
