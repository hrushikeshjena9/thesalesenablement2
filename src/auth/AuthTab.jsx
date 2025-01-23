import React, { useState } from "react";
import ModuleContent from "../course-details-sections/ModuleContent";
import CourseObjectives from "../course-details-sections/CourseObjectives";
import MoreInfoContent from "../course-details-sections/MoreInfoContent";
import ContactDetails from "../course-details-sections/ContactDetails";
import LogIn from "./Login";
import SignUp from "./SignUp";

const AuthTab = () => {
  const [activeTab, setActiveTab] = useState("modules");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" py-4">
      <div className="flex justify-between  mb-6">
        <button
          onClick={() => handleTabClick("SignUp")}
          className={`px-6 py-2 rounded-md uppercase border-2 transition-colors duration-300 ${
            activeTab === "modules"
              ? "bg-[#DB0032] text-white"
              : "bg-transparent text-[#DB0032] border-[#DB0032]"
          } hover:bg-[#DB0032] hover:text-white hover:border-[#DB0032]`}
        >
          Sign Up
        </button>
        <button
          onClick={() => handleTabClick("Login")}
          className={`px-6 py-2 rounded-md border-2 uppercase transition-colors duration-300 ${
            activeTab === "objectives"
              ? "bg-[#DB0032] text-white"
              : "bg-transparent text-[#DB0032] border-[#DB0032]"
          } hover:bg-[#DB0032] hover:text-white hover:border-[#DB0032]`}
        >
          Login
        </button>
      </div>

      {/* Tab content */}
      <div className="p-6 border-t-2 border-[#DB0032]">
        {activeTab === "Login" && <LogIn />}
        {activeTab === "SignUp" && <SignUp />}
      </div>
    </div>
  );
};

export default AuthTab;
