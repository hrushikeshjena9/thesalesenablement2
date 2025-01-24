import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CourseSidebar = ({ setFilters }) => {
  const [location, setLocation] = useState({
    onsite: false,
    virtual: false,
    viewAll: true,
  });
  const [audience, setAudience] = useState({
    "sales-leaders": false,
    "sales-teams": false,
    viewAll: true,
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

    // Update topics state based on checkbox change
    setTopics((prev) => {
      const updatedTopics = { ...prev, [id]: checked };

      // Apply filters after the topics state is updated
      handleApplyFilters(updatedTopics);

      return updatedTopics;
    });
  };
// useEffect(() => {
//   handleApplyFilters();
// }, [topics]);




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
                  className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
                />
                <label
                  htmlFor={topic}
                  className="text-sm cursor-pointer md:text-[16px]"
                >
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
                className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
              />
              <label
                htmlFor="onsite"
                className="text-sm md:text-[16px] cursor-pointer"
              >
                On Site
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="virtual"
                checked={location.virtual}
                onChange={handleCheckboxChange} // Call this for location changes
                className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
              />
              <label
                htmlFor="virtual"
                className="text-sm md:text-[16px] cursor-pointer"
              >
                Virtual
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="viewAll"
                checked={location.viewAll}
                onChange={handleCheckboxChange}
                className="mr-2 w-6 h-6 border-2 cursor-pointer hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
              />
              <label
                htmlFor="viewAll"
                className="text-sm md:text-[16px] cursor-pointer"
              >
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
                className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
              />
              <label
                htmlFor="sales-leaders"
                className="text-sm md:text-[16px] cursor-pointer"
              >
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
                className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
              />
              <label
                htmlFor="sales-teams"
                className="text-sm md:text-[16px] cursor-pointer"
              >
                Sales Teams
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;
