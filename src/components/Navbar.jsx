import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import HoverLine from "../assets/hover-line.png";
import { FiChevronDown } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      path: "/courses/professional-selling-skills",
    },
    {
      name: "Communication Skills for Sales Staff",
      path: "/courses/communication-skills-for-sales-staff",
    },
    {
      name: "Front Line Retail Selling Skills",
      path: "/courses/front-line-retail-selling-skills",
    },
    { name: "Sales Management", path: "/courses/sales-management" },
    {
      name: "Sales Territory Planning & Routing",
      path: "/courses/sales-territory-planning-routing",
    },
    {
      name: "Retail Sales Planning and Forecasting",
      path: "/courses/retail-sales-planning-forecasting",
    },
  ];

  const services = [
    {
      name: "Sales Force Evaluation",
      path: "/services/sales-force-evaluation",
    },
    {
      name: "Recruiting Process Optimization",
      path: "/services/recruiting-process-optimization",
    },
    {
      name: "Sales Candidate Assessments",
      path: "/services/sales-candidate-assessments",
    },
    {
      name: "CRM Selection, Installation, and Integration",
      path: "/services/crm-selection-installation-integration",
    },
    {
      name: "Sales Process Optimization",
      path: "/services/sales-process-optimization",
    },
    { name: "Metrics Development", path: "/services/metrics-development" },
    { name: "Pipeline Management", path: "/services/pipeline-management" },
    {
      name: "Sales Management Development",
      path: "/services/sales-management-development",
    },
    { name: "Trade Show Selling", path: "/services/trade-show-selling" },
    { name: "Consulting & Strategy", path: "/services/consulting-strategy" },
    { name: "Coaching", path: "/services/coaching" },
    {
      name: "Sales Training & Professional Services Training",
      path: "/services/sales-training-professional-services-training",
    },
  ];
  const toggleDropdown = (dropdownName) => {
    setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName);
  };

  return (
    <section className="container mx-auto px-4">
      <nav className="text-white">
        {/* Logo and Hamburger Menu */}
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            <img src={Logo} alt="Logo" className="w-[170px] h-auto" />
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

          <ul className="hidden lg:flex xl:space-x-12 2xl:space-x-14 lg:space-x-3 bold-text1 uppercase mt-4 lg:mt-0">
            {links.map((link, index) => (
              <li key={index} className="relative">
                {["Courses", "Services"].includes(link.name) ? (
                  <div className="relative group">
                    <button
                      className="sm:text-xs lg:text-sm xl:text-base uppercase hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] flex items-center"
                      onMouseEnter={() => {
                        toggleDropdown(link.name.toLowerCase()); // Change 'products' to the appropriate dropdown name
                        setIsHovered(true);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                        setActiveDropdown(""); // Reset dropdown when leaving
                      }}
                    >
                      {link.name}
                      <FiChevronDown
                        size={20}
                        className="ml-2 transition-transform group-hover:rotate-180 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                      />
                    </button>
                    {dropdownOpen === link.name.toLowerCase() && (
                      <ul className="absolute left-0 mt-2 bg-[#060B33] text-white shadow-lg  w-64 z-50">
                        {(link.name === "Courses" ? courses : services).map(
                          (item, idx) => (
                            <li
                              key={idx}
                              className="px-4 py-2 hover:bg-white cursor-pointer"
                            >
                              <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                  `block ${
                                    isActive
                                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                                      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                                  }`
                                }
                              >
                                {item.name}{" "}
                              </NavLink>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.route}
                    className={({ isActive }) =>
                      `relative sm:text-xs lg:text-sm xl:text-base ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] font-bold"
                          : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
                {window.location.pathname === link.route && (
                  <img
                    src={HoverLine}
                    alt="HoverLine"
                    className="absolute left-0 right-0 mx-auto -bottom-2 w-full"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Login/SignUp Buttons */}
          <div className="hidden lg:flex space-x-5">
            <Link
              to="/login"
              type="button"
              className="text-white  transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              type="button"
              className="text-transparent  transition-transform duration-500 ease-out transform uppercase text-[12px] bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
              style={{
                border: "2px solid transparent",
                borderImage:
                  "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40">
            <div className="absolute top-0 right-0 text-white bg-gradient-to-r from-[#060B33] to-[#383F71] w-3/4 h-full shadow-xl transform translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <img src={Logo} alt="Logo" className="w-[150px]" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-3xl"
                >
                  &times;
                </button>
              </div>

              <ul className="p-6 space-y-6">
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.route}
                      className={({ isActive }) =>
                        `block text-xl ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] font-bold"
                            : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Buttons Section */}
              <div className="flex flex-col space-y-4 p-6 border-t">
                <button
                  type="button"
                  className="text-white transition-transform duration-500 ease-out  transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="text-transparent transition-transform duration-500 ease-out  transform uppercase text-[12px] bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
                  style={{
                    border: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}

export default Navbar;
