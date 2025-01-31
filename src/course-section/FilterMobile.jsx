import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

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
    <div>
      <button
        className="md:hidden fixed bottom-24 right-4 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white px-4 py-2 rounded-lg shadow-md z-50"
        onClick={() => setIsOpen(true)}
      >
        Show Filters
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside
        className={`fixed bottom-0 right-0 h-2/1 w-4/5 z-50 max-w-sm bg-white shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 h-full flex flex-col">

          <button
               className="absolute top-5 right-5 text-gray-600 hover:text-gray-800 text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out bg-transparent  p-2 rounded-full"
            onClick={() => setIsOpen(false)}
               >
     
     
                 <span className="text-black text-2xl hover:text-red-600 transition-all duration-300 ease-in-out  font-semibold">
                   <FaTimes />
                 </span>
               </button>
        
   
          <div className="flex flex-col w-full flex-1 overflow-y-auto">
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">
                Training Sessions
              </label>
              <div className="space-y-3">
                {Object.keys(topics).map((topic) => (
                  <div key={topic} className="flex items-center">
                    <input
                      type="checkbox"
                      id={topic}
                      checked={topics[topic]}
                      onChange={handleTopicChange}
                      className="mr-2 w-5 h-5 cursor-pointer border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor={topic} className="text-sm cursor-pointer">
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
              <div className="space-y-3">
                {["onsite", "virtual", "view All"].map((locationType) => (
                  <div key={locationType} className="flex items-center">
                    <input
                      type="radio"
                      id={locationType}
                      name="location"
                      checked={location === locationType}
                      onChange={updateFilter(setLocation)}
                      className="mr-2 w-5 h-5 cursor-pointer border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor={locationType} className="text-sm cursor-pointer">
                      {locationType.charAt(0).toUpperCase() + locationType.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">Audience</label>
              <div className="space-y-3">
                {["sales-leaders", "sales-teams", "view All"].map((audienceType) => (
                  <div key={audienceType} className="flex items-center">
                    <input
                      type="radio"
                      id={audienceType}
                      name="audience"
                      checked={audience === audienceType}
                      onChange={updateFilter(setAudience)}
                      className="mr-2 w-5 h-5 cursor-pointer border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor={audienceType} className="text-sm cursor-pointer">
                      {audienceType.replace("-", " ").replace(/\b\w/g, (match) => match.toUpperCase())}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <button
            onClick={handleApplyFilters}
            className="px-6 group md:px-8 uppercase py-3 md:py-4  bg-gradient-to-r from-[#DB0032] to-[#FF6A00] text-white text-sm md:text-lg font-semibold shadow-lg  transition-all duration-300 focus:outline-none relative overflow-hidden"
          >
            <span className="absolute inset-0 w-0 h-full bg-[#383F71] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10">
              Apply Filters
            </span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default FilterMobile;
