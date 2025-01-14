import React, { useState } from "react";
import Logo from "../assets/logo.png";
import DesktopMenu from "../nav-menu/DesktopMenu";
import MobileMenu from "../nav-menu/MobileMenu";
import { FaChartLine, FaUserTie, FaClipboardList, FaTools, FaClipboardCheck, FaCogs, FaProjectDiagram, FaUsers, FaRegHandshake, FaLightbulb, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import {  FaComments, FaStore, FaRoute, } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const links = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Courses", route: "/courses" },
    { name: "Blogs", route: "/blogs" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  // const courses = [
  //   { name: "Professional Selling Skills", path: "/courses/professional-selling-skills" },
  //   { name: "Communication Skills for Sales Staff", path: "/courses/communication-skills-for-sales-staff" },
  //   { name: "Front Line Retail Selling Skills", path: "/courses/front-line-retail-selling-skills" },
  //   { name: "Sales Management", path: "/courses/sales-management" },
  //   { name: "Sales Territory Planning & Routing", path: "/courses/sales-territory-planning-routing" },
  //   { name: "Retail Sales Planning and Forecasting", path: "/courses/retail-sales-planning-forecasting" },
  // ];


const courses = [
  { name: "Professional Selling Skills", path: "/courses/professional-selling-skills", icon: <FaChalkboardTeacher /> },
  { name: "Communication Skills for Sales Staff", path: "/courses/communication-skills-for-sales-staff", icon: <FaComments /> },
  { name: "Front Line Retail Selling Skills", path: "/courses/front-line-retail-selling-skills", icon: <FaStore /> },
  { name: "Sales Management", path: "/courses/sales-management", icon: <FaChartLine /> },
  { name: "Sales Territory Planning & Routing", path: "/courses/sales-territory-planning-routing", icon: <FaRoute /> },
  { name: "Retail Sales Planning and Forecasting", path: "/courses/retail-sales-planning-forecasting", icon: <FaClipboardCheck /> },
];


const services = [
  { name: "Sales Force Evaluation", path: "/services/sales-force-evaluation", icon: <FaChartLine /> },
  { name: "Recruiting Process Optimization", path: "/services/recruiting-process-optimization", icon: <FaUserTie /> },
  { name: "Sales Candidate Assessments", path: "/services/sales-candidate-assessments", icon: <FaClipboardList /> },
  { name: "CRM Selection, Installation, and Integration", path: "/services/crm-selection-installation-integration", icon: <FaTools /> },
  { name: "Sales Process Optimization", path: "/services/sales-process-optimization", icon: <FaClipboardCheck /> },
  { name: "Metrics Development", path: "/services/metrics-development", icon: <FaCogs /> },
  { name: "Pipeline Management", path: "/services/pipeline-management", icon: <FaProjectDiagram /> },
  { name: "Sales Management Development", path: "/services/sales-management-development", icon: <FaUsers /> },
  { name: "Trade Show Selling", path: "/services/trade-show-selling", icon: <FaRegHandshake /> },
  { name: "Consulting & Strategy", path: "/services/consulting-strategy", icon: <FaLightbulb /> },
  { name: "Coaching", path: "/services/coaching", icon: <FaChalkboardTeacher /> },
  { name: "Sales Training & Professional Services Training", path: "/services/sales-training-professional-services-training", icon: <FaGraduationCap /> },
];

  // const services = [
  //   { name: "Sales Force Evaluation", path: "/services/sales-force-evaluation" },
  //   { name: "Recruiting Process Optimization", path: "/services/recruiting-process-optimization" },
  //   { name: "Sales Candidate Assessments", path: "/services/sales-candidate-assessments" },
  //   { name: "CRM Selection, Installation, and Integration", path: "/services/crm-selection-installation-integration" },
  //   { name: "Sales Process Optimization", path: "/services/sales-process-optimization" },
  //   { name: "Metrics Development", path: "/services/metrics-development" },
  //   { name: "Pipeline Management", path: "/services/pipeline-management" },
  //   { name: "Sales Management Development", path: "/services/sales-management-development" },
  //   { name: "Trade Show Selling", path: "/services/trade-show-selling" },
  //   { name: "Consulting & Strategy", path: "/services/consulting-strategy" },
  //   { name: "Coaching", path: "/services/coaching" },
  //   { name: "Sales Training & Professional Services Training", path: "/services/sales-training-professional-services-training" },
  // ];

  const toggleDropdown = (dropdownName) => {
    setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName);
  };

  return (
    <section className="container mx-auto px-4">
      <nav className="text-white">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            <img src={Logo} alt="Logo" className="w-[170px] h-auto" />
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <DesktopMenu
            links={links}
            courses={courses}
            services={services}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />
        </div>

        <MobileMenu
          links={links}
          courses={courses}
          services={services}
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
        />
      </nav>
    </section>
  );
}

export default Navbar;
