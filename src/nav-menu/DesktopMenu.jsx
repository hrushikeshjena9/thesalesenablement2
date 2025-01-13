import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
      // Cleanup on component unmount
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
                        <li key={idx} className="px-4 py-2  cursor-pointer">
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
        {/* <NavLink
          onClick={handleLoginClick}
          className="text-white group transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
        >
          <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          <span className="relative text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] flex items-center">
            Login
          </span>
        </NavLink> */}
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
          <div className="fixed inset-0 flex justify-end items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-md w-full md:w-96 lg:w-1/2 xl:w-1/3 2xl:w-1/4 relative">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
              <h2 className="text-2xl uppercase md:text-xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
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
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </label>
                  <a href="#" className="text-sm text-blue-500">
                    Forgot Password?
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <button className="text-white transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3">
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
                <a
                  href="/sign-up"
                  className="text-sm uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text"
                >
                  Create An Account
                </a>
              </p>
            </div>
          </div>
        )}
        <NavLink
          to="/sign-up"
          type="button"
           className="text-white group transition-transform duration-500 ease-out transform uppercase text-[12px] hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]  font-bold text-sm px-10 py-3 border-btn border-white"
          // className="text-white h-10 transition-all text-[12px] duration-500 ease-in-out transform bg-transparent hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:text-white  flex items-center uppercase space-x-2 border-btn border-white font-bold text-base lg:text-sm sm:text-xs px-10 py-3"
        >
          <span>Sign up</span>
        </NavLink>
       
      </div>
    </>
  );
};

export default DesktopMenu;
