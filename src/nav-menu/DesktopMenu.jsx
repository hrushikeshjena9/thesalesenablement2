import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import HoverLine from "../assets/hover-line.png";
import { FaLock, FaEnvelope, FaTimes } from "react-icons/fa";

const DesktopMenu = ({
  links,
  courses,
  services,
  dropdownOpen,
  toggleDropdown,
}) => {
  // State to track hover status for dropdown menu
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter to toggle dropdown visibility
  const handleMouseEnter = (menuName) => {
    toggleDropdown(menuName);
    setIsHovered(true);
  };

  // Handle mouse leave to reset dropdown visibility
  const handleMouseLeave = () => {
    toggleDropdown(""); // Reset dropdown
    setIsHovered(false);
  };

  const [isLogInOpen, setIsLogInOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLogInOpen(true);
  };

  const closeModal = () => {
    setIsLogInOpen(false);
  };

  useEffect(() => {
    if (isLogInOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLogInOpen]);
  return (
    <>
      <ul className="hidden lg:flex xl:space-x-12 2xl:space-x-14 lg:space-x-3 bold-text1 uppercase mt-4 lg:mt-0">
        {links.map((link, index) => (
          <li key={index} className="relative">
            {["Courses", "Services"].includes(link.name) ? (
              <div
                className="relative group hover:font-bold"
                onMouseEnter={() => handleMouseEnter(link.name.toLowerCase())} // Toggle dropdown on hover
                onMouseLeave={handleMouseLeave} // Reset dropdown when mouse leaves
              >
                <button
                  // className="sm:text-xs lg:text-sm xl:text-base uppercase hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] flex items-center ">
                  className="sm:text-xs lg:text-sm xl:text-base uppercase flex items-center gap-1  space-x-2
      group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] 
      transition-colors duration-300 ease-in-out
      active:text-white active:bg-gradient-to-r  active:from-[#060b33] active:to-[#383f71]"
                >
                  <span>{link.name}</span>
                  <FiChevronDown className="transition-transform w-6 h-6 duration-200 group-hover:text-[#DB0032] text-inherit" />
                </button>

                {dropdownOpen === link.name.toLowerCase() && (
                  <ul className="absolute left-1/2 transform -translate-x-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[750px] xl:w-[950px] bg-white text-gray-700 rounded-lg shadow-lg z-20 p-4">
                    {(link.name === "Courses" ? courses : services).map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="flex icon-hover items-center space-x-3 p-4 group bg-white hover:text-white shadow-md text-sm rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#DB0032] hover:to-[#FA6602]"
                        >
                          <span className="text-xl icon-hover1 text-white font-bold transition duration-200 ease-in-out bg-gradient-to-r from-[#DB0032] to-[#FA6602] rounded-full p-3 ">
                            {item.icon}
                          </span>

                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `block font-bold ${
                                isActive
                                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] icon-hover2 transition duration-200 ease-in-out"
                                  : ""
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      )
                    )}
                    <div className="flex justify-start mt-4">
                      {link.name === "Courses" ? (
                        <Link
                          to="/courses" // Adjust this to your actual URL for courses
                          className="text-white group flex justify-center items-center transition-all duration-300 ease-out transform uppercase text-[14px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl rounded-lg shadow-lg font-bold text-sm px-8 py-3 cursor-pointer "
                        >
                          <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                          <span className="relative text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                            All Courses
                          </span>
                        </Link>
                      ) : (
                        <Link
                          to="/services" // Adjust this to your actual URL for services
                          className="text-white group flex justify-center rounded-lg shadow-lg items-center transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
                        >
                          <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                          <span className="relative text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                            All Services
                          </span>
                        </Link>
                      )}
                    </div>
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

            {/* Hover line */}
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

      <div className="hidden lg:flex space-x-5">
        <NavLink
          onClick={handleLoginClick}
          className="text-white group flex justify-center items-center transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
        >
          <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          <span className="relative text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
            Login
          </span>
        </NavLink>

        {isLogInOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-md w-full md:w-96 lg:w-1/3 xl:w-1/4 relative">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
              <h2 className="text-2xl md:text-xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                Sign in or Create an account
              </h2>

              <form className="space-y-4 mt-4">
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded pl-10 p-2.5"
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded pl-10 p-2.5"
                  />
                </div>
                <div className="flex justify-between items-center text-sm text-black">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </label>
                  <a href="#" className="hover:text-[#DB0032]">
                    Forgot Password?
                  </a>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button className="text-white uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold px-10 py-3 w-full">
                    LOGIN
                  </button>
                </div>
              </form>

              <div className="text-center my-4 relative">
                <div className="absolute w-full h-px bg-gray-300 top-1/2"></div>
                <span className="bg-white px-4 relative z-10 text-gray-500">
                  Or
                </span>
              </div>

              <p className="text-center text-sm text-gray-600">
                Not Registered Yet?{" "}
                <NavLink
                  to="/sign-up"
                  className="text-sm uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text"
                >
                  Create An Account
                </NavLink>
              </p>
            </div>
          </div>
        )}

        <NavLink
          to="/sign-up"
          type="button"
          className="text-white group transition-transform duration-500 ease-out transform uppercase text-[12px] hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] font-bold text-sm px-10 py-3 border-btn border-white hover:border-[#ed3b15]"
        >
          <span>Sign up</span>
        </NavLink>
      </div>
    </>
  );
};

export default DesktopMenu;
