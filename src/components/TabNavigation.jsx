
import React, { useState } from "react";
import ModuleContent from "../course-details-sections/ModuleContent";
import CourseObjectives from "../course-details-sections/CourseObjectives";
import MoreInfoContent from "../course-details-sections/MoreInfoContent";
import ContactDetails from "../course-details-sections/ContactDetails";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("modules");

  const tabButtonClass = (tab) =>
    `relative overflow-hidden px-6 py-3 md:px-8 md:py-3  uppercase text-sm md:text-base font-semibold 
  transition-all duration-300 ease-in-out group
  ${activeTab === tab ? "bg-[#DB0032] text-white " : "bg-[#383F71] text-white "} 
  hover:bg-[#DB0032] hover:text-[#ffff] hover:`;

  return (
    <div className="py-4 px-4 md:px-6 lg:px-8 w-full">
      {/* Responsive Tabs */}
      <div className="flex flex-wrap justify-center md:justify-between gap-3 mb-6">
        {[
          { label: "Modules", value: "modules" },
          { label: "Course Objectives", value: "objectives" },
          { label: "More Information", value: "moreInfo" },
          { label: "Contact Details", value: "contact" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={tabButtonClass(tab.value)}
          >
            <span className="absolute inset-0 w-0 h-full bg-[#DB0032] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6 border-t-2 border-[#DB0032]">
        {activeTab === "modules" && <ModuleContent />}
        {activeTab === "objectives" && <CourseObjectives />}
        {activeTab === "moreInfo" && <MoreInfoContent />}
        {activeTab === "contact" && <ContactDetails />}
      </div>
    </div>
  );
};

export default TabNavigation;
