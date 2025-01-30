import React, { useState, useEffect } from "react";

const FilterMobile = ({ setFilters }) => {
  const [location, setLocation] = useState("");
  const [audience, setAudience] = useState("");
  const [topics, setTopics] = useState({
    sellingSkills: false,
    frontlineRetail: false,
    salesManagement: false,
    territoryPlanning: false,
    retailPlanning: false,
    communicationSkills: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = (setter) => (e) => {
    setter(e.target.id);
  };

  const handleTopicChange = (e) => {
    const { id, checked } = e.target;
    setTopics((prev) => ({ ...prev, [id]: checked }));
  };

  const handleApplyFilters = () => {
    setFilters({ location, audience, topics });
    setIsOpen(false);
  };

  return (
    <aside
      className={`w-full  h-1/3 p-6 md:block ${isOpen ? "block" : "hidden"}`}
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
                  onChange={handleTopicChange}
                  className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
                />
                <label
                  htmlFor={topic}
                  className="text-sm cursor-pointer md:text-[16px]"
                >
                  {topic
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (match) => match.toUpperCase())}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-3">Location</label>
          <div className="space-y-4">
            {["onsite", "virtual"].map((locationType) => (
              <div key={locationType} className="flex items-center">
                <input
                  type="checkbox"
                  id={locationType}
                  checked={location === locationType}
                  onChange={updateFilter(setLocation)}
                  className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
                />
                <label
                  htmlFor={locationType}
                  className="text-sm cursor-pointer md:text-[16px]"
                >
                  {locationType.charAt(0).toUpperCase() + locationType.slice(1)}
                </label>
              </div>
            ))}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="viewAll"
                checked={location === "viewAll"}
                onChange={updateFilter(setLocation)}
                className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
              />
              <label
                htmlFor="viewAll"
                className="text-sm cursor-pointer md:text-[16px]"
              >
                View All
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-3">Audience</label>
          <div className="space-y-4">
            {["sales-leaders", "sales-teams"].map((audienceType) => (
              <div key={audienceType} className="flex items-center">
                <input
                  type="checkbox"
                  id={audienceType}
                  checked={audience === audienceType}
                  onChange={updateFilter(setAudience)}
                  className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
                />
                <label
                  htmlFor={audienceType}
                  className="text-sm cursor-pointer md:text-[16px]"
                >
                  {audienceType
                    .replace("-", " ")
                    .replace(/\b\w/g, (match) => match.toUpperCase())
                    .replace(/\s+/g, " ")}
                </label>
              </div>
            ))}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="viewAllAudience"
                checked={audience === "viewAll"}
                onChange={updateFilter(setAudience)}
                className="mr-2 w-6 h-6 cursor-pointer border-2 hover:rounded-sm hover:border-[#DB0032] hover:ring-2 hover:ring-[#DB0032] focus:ring-2 focus:ring-[#DB0032] transition duration-200 ease-in-out"
              />
              <label
                htmlFor="viewAllAudience"
                className="text-sm cursor-pointer md:text-[16px]"
              >
                View All
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleApplyFilters}
            className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white px-6 py-2 rounded-lg shadow-md"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterMobile;
