import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import HoverLine from "../assets/hover-line.png";

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

  return (
    <>
      <ul className="hidden lg:flex xl:space-x-12 2xl:space-x-14 lg:space-x-3 bold-text1 uppercase mt-4 lg:mt-0">
        {links.map((link, index) => (
          <li key={index} className="relative">
            {["Courses", "Services"].includes(link.name) ? (
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.name.toLowerCase())} // Toggle dropdown on hover
                onMouseLeave={handleMouseLeave} // Reset dropdown when mouse leaves
              >
                <button className="sm:text-xs lg:text-sm xl:text-base uppercase hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] flex items-center">
                  {link.name}
                  <FiChevronDown
                    size={20}
                    className="ml-2 transition-transform group-hover:rotate-180 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                  />
                </button>

                {/* Conditional dropdown rendering */}
                {dropdownOpen === link.name.toLowerCase() && (
                  <ul className="absolute left-0 mt-2 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-[#060B33] text-white shadow-lg z-50">
                    {(link.name === "Courses" ? courses : services).map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2  cursor-pointer"
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
                            {item.name}
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

            {/* Display hover line when the link is active */}
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

      {/* Login and Sign-Up Buttons */}
      <div className="hidden lg:flex space-x-5">
        <NavLink
          to="/login"
          className="text-white transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
        >
          Login
        </NavLink>
        <NavLink
          to="/sign-up"
          className="text-transparent transition-transform duration-500 ease-out transform uppercase text-[12px] bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
          style={{
            border: "2px solid transparent",
            borderImage:
              "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
          }}
        >
          Sign Up
        </NavLink>
      </div>
    </>
  );
};

export default DesktopMenu;
