import React, { useState } from "react";
import Logo from "../assets/logo.png";
import DesktopMenu from "../nav-menu/DesktopMenu";
import MobileMenu from "../nav-menu/MobileMenu";
import {
  FaChartLine,
  FaUserTie,
  FaClipboardList,
  FaTools,
  FaClipboardCheck,
  FaCogs,
  FaProjectDiagram,
  FaUsers,
  FaRegHandshake,
  FaLightbulb,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import { FaComments, FaStore, FaRoute } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const links = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about-us" },
    { name: "Services", route: "/services" },
    { name: "Courses", route: "/courses" },
    { name: "Blogs", route: "/blogs" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  const courses = [
    {
      name: "Professional Selling Skills",
      path: "/course-details/1",
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "Communication Skills for Sales Staff",
      path: "/course-details/2",
      icon: <FaComments />,
    },
    {
      name: "Front Line Retail Selling Skills",
      path: "/course-details/3",
      icon: <FaStore />,
    },
    {
      name: "Sales Management",
      path: "/course-details/4",
      icon: <FaChartLine />,
    },
    {
      name: "Sales Territory Planning & Routing",
      path: "/course-details/5",
      icon: <FaRoute />,
    },
    {
      name: "Retail Sales Planning and Forecasting",
      path: "/course-details/6",
      icon: <FaClipboardCheck />,
    },
  ];

  const services = [
    {
      name: "Sales Force Evaluation",
      path: "/services/sales-force-evaluation",
      icon: <FaChartLine />,
    },
    {
      name: "Recruiting Process Optimization",
      path: "/service/:slug",
      icon: <FaUserTie />,
    },
    {
      name: "Sales Candidate Assessments",
      path: "/services/sales-candidate-assessments",
      icon: <FaClipboardList />,
    },
    {
      name: "CRM Selection, Installation, and Integration",
      path: "/service/2",
      icon: <FaTools />,
    },
    {
      name: "Sales Process Optimization",
      path: "/service/3",
      icon: <FaClipboardCheck />,
    },
    { name: "Metrics Development", path: "/service/4", icon: <FaCogs /> },
    {
      name: "Pipeline Management",
      path: "/service/5",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Sales Management Development",
      path: "/service/6",
      icon: <FaUsers />,
    },
    {
      name: "Trade Show Selling",
      path: "/service/7",
      icon: <FaRegHandshake />,
    },
    {
      name: "Consulting & Strategy",
      path: "/service/8",
      icon: <FaLightbulb />,
    },
    { name: "Coaching", path: "/service/9", icon: <FaChalkboardTeacher /> },
    {
      name: "Sales Training & Professional Services Training",
      path: "/service/10",
      icon: <FaGraduationCap />,
    },
  ];

  const toggleDropdown = (dropdownName) => {
    setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName);
  };

  return (
    <section className="container mx-auto px-4 z-50">
      <nav className="text-white">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            <a href="/">
              <img src={Logo} alt="Logo" className="w-[170px] h-auto" />
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
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
