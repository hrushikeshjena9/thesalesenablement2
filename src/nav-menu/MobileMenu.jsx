import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const MobileMenu = ({ links,isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40 ${isMenuOpen ? "block" : "hidden"}`}
    >
      <div className="absolute top-0 right-0 text-white bg-gradient-to-r from-[#060B33] to-[#383F71] w-3/4 h-full shadow-xl transform translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <img src={Logo} alt="Logo" className="w-[150px]" />
          <button onClick={toggleMenu} className="text-white text-3xl">
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

        <div className="flex flex-col space-y-4 p-6 border-t">
          <NavLink
            to="/login"
            className="text-white group justify-center align-middle flex transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
          >
            Login
          </NavLink>
          <NavLink
            to="/sign-up"
            className="text-transparent justify-center flex align-middle transition-transform duration-500 ease-out transform uppercase text-[12px] bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
            }}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
