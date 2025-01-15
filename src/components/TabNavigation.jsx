import React, { useState } from 'react';
import ModuleContent from '../course-details-sections/ModuleContent';
import CourseObjectives from '../course-details-sections/CourseObjectives';
import MoreInfoContent from '../course-details-sections/MoreInfoContent';
import ContactDetails from '../course-details-sections/ContactDetails';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('modules');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" py-4">
      {/* Tab buttons */}
      <div className="flex justify-between  mb-6">
        <button
          onClick={() => handleTabClick('modules')}
          className={`px-6 py-2 rounded-md uppercase border-2 transition-colors duration-300 ${
            activeTab === 'modules'
              ? 'bg-[#DB0032] text-white'
              : 'bg-transparent text-[#DB0032] border-[#DB0032]'
          } hover:bg-[#DB0032] hover:text-white hover:border-[#DB0032]`}
        >
          Modules
        </button>
        <button
          onClick={() => handleTabClick('objectives')}
          className={`px-6 py-2 rounded-md border-2 uppercase transition-colors duration-300 ${
            activeTab === 'objectives'
              ? 'bg-[#DB0032] text-white'
              : 'bg-transparent text-[#DB0032] border-[#DB0032]'
          } hover:bg-[#DB0032] hover:text-white hover:border-[#DB0032]`}
        >
          Course Objectives
        </button>
      
        <button
          onClick={() => handleTabClick('moreInfo')}
          className={`px-6 py-2 rounded-md border-2 uppercase transition-colors duration-300 ${
            activeTab === 'moreInfo'
              ? 'bg-[#DB0032] text-white'
              : 'bg-transparent text-[#DB0032] border-[#DB0032]'
          } hover:bg-[#DB0032] hover:text-white hover:border-[#DB0032]`}
        >
          More Information
        </button>
        <button
          onClick={() => handleTabClick('contact')}
          className={`px-6 py-2 rounded-md border-2 uppercase transition-colors duration-300 ${
            activeTab === 'contact'
              ? 'bg-[#DB0032] text-white'
              : 'bg-transparent text-[#DB0032] border-[#DB0032]'
          } hover:bg-[#DB0032] hover:text-white hover:border-[#DB0032]`}
        >
          Contact Details
        </button>
      </div>

      {/* Tab content */}
      <div className="p-6 border-t-2 border-[#DB0032]">
        {activeTab === 'modules' && <ModuleContent/>}
        {activeTab === 'objectives' && <CourseObjectives/>}
  
        {activeTab === 'moreInfo' && <MoreInfoContent/>}
        {activeTab === 'contact' && <ContactDetails/>}
      </div>
     
    </div>
  );
};

export default TabNavigation;
