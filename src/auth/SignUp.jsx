import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhoneAlt,
  FaEye,
  FaEyeSlash,
  FaChevronDown,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import RightArrow1 from "../assets/arrow-right1.png";

function SignUp({ setActiveTab }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const titles = [
    " AProf",
    "Adv",
    "Brig",
    "Capt",
    "Col",
    "Comd",
    "Dr",
    "Ds",
    "Gen",
    "Judge",
    "Lt",
    "LtGen",
    "Miss",
    "Mr",
    "Mrs",
    "Ms",
    "Past",
    "Prof",
    "Rev",
    "Sir",
    "Sr",
    "Amb",
    "Mx",
  ];

  return (
    <>


      <section className=" py-12 flex items-center justify-center ">
        <div className="max-w-xl w-full bg-white p-6 md:p-8 lg:p-10  py-6  shadow-xl mx-4 md:mx-6 lg:mx-8">
          <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-600 mb-6 text-sm text-center leading-relaxed">
            Start your journey toward greater success with our platform.
          </p>

          <form className="space-y-6">
            <div className="relative">
              <label
                htmlFor="title"
                className="block font-normal mb-1 text-sm "
              >
                Title
              </label>
              <select
                id="title"
                className="w-full border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:ring-2 hover:ring-1 hover:ring-[#060B33] focus:ring-[#383F71] appearance-none"
              >
                <option value="" disabled selected className="font-normal">
                  Select Your Title
                </option>
                {titles.map((title, index) => (
                  <option key={index} value={title.toLowerCase()}>
                    {title}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-10  text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <label
                htmlFor="firstName"
                className="block font-normal mb-1 text-sm"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-gray-300  px-10 py-3 text-sm focus:outline-none focus:ring-2 hover:ring-1 hover:ring-[#060B33] focus:ring-[#383F71] appearance-none"
              />
              <FaUser className="absolute left-3 top-9  text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <label
                htmlFor="lastName"
                className="block font-normal mb-1 text-sm"
              >
                Last Name
              </label>
              <FaUser className="absolute left-3 top-9  text-gray-400 pointer-events-none" />
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-gray-300  px-10 py-3 text-sm focus:outline-none focus:ring-2 hover:ring-1 hover:ring-[#060B33] focus:ring-[#383F71] appearance-none"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className="block font-normal mb-1 text-sm"
              >
                Phone Number
              </label>
              <FaPhoneAlt className="absolute left-3 top-9  text-gray-400 pointer-events-none" />
              <input
                id="phoneNumber"
                type="number"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300  px-10 py-3 text-sm focus:outline-none focus:ring-2 hover:ring-1 hover:ring-[#060B33] focus:ring-[#383F71] appearance-none"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="emailAddress"
                className="block font-normal mb-1 text-sm"
              >
                Email Address
              </label>
              <FaEnvelope className="absolute left-3 top-9  text-gray-400 pointer-events-none" />
              <input
                id="emailAddress"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300  px-10 py-3 text-sm focus:outline-none focus:ring-2 hover:ring-1 hover:ring-[#060B33] focus:ring-[#383F71] appearance-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block font-normal mb-1 text-sm"
              >
                Password
              </label>
              <FaLock className="absolute left-3 top-[35%] text-gray-400 pointer-events-none" />
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Create a password"
                className="w-full border border-gray-300  px-10 py-3 text-sm focus:outline-none focus:ring-2 hover:ring-1 hover:ring-[#060B33] focus:ring-[#383F71] appearance-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-10 text-gray-400 hover:text-gray-600"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
              <div className="mt-2 text-xs text-gray-500 flex justify-between">
                <div className="rounded-full px-1 mx-2 flex justify-center align-middle text-gray h-4 w-4 border-2 border-gray-500">
                  i
                </div>
                <div>
                  <i className="text-gray-400">
                    Note: The password must contain a minimum of 8 characters
                    with 1 Uppercase, 1 Lowercase, 1 Number, and 1 Special
                    character.
                  </i>
                </div>
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block font-normal mb-1 text-sm"
              >
                Confirm Password
              </label>
              <FaLock className="absolute left-3 top-9  text-gray-400 pointer-events-none" />
              <input
                id="confirmPassword"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Re-enter your password"
                className="w-full border border-gray-300  px-10 py-3 text-sm focus:outline-none focus:ring-2 hover:ring-1 hover:ring-[#060B33] focus:ring-[#383F71] appearance-none"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-10 text-gray-400 hover:text-gray-600"
              >
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="May we send you marketing material via email and other
                electronic channels?"
                type="checkbox"
                className="h-4 w-4 cursor-pointer "
              />
              <label
                htmlFor="May we send you marketing material via email and other
                electronic channels?"
                className="text-xs text-gray-600 cursor-pointer"
              >
                May we send you marketing material via email and other
                electronic channels?
              </label>
            </div>
            <div className="flex items-center space-x-2 ">
              <input
                id="Terms and Conditions"
                type="checkbox"
                className="h-4 w-4 cursor-pointer"
              />
              <Link to="/terms-and-conditions">
                <label
                  htmlFor="Terms and Conditions"
                  className="text-xs cursor-pointer text-gray-600"
                >
                  I agree to the{" "}
                  <span className="text-sm font-bold text-[#DB0032] hover:text-[#FA6602] cursor-pointer">
                    Terms, Conditions and Privacy policy.
                  </span>
                </label>
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <button
                to="/login-signup"
                type="button"
                className="text-white w-full group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5   flex items-center justify-center"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                <span className="relative text-white group-hover:text-white flex items-center">
                  Sign Up
                  <img
                    src={RightArrow1}
                    alt="Arrow Icon"
                    className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                  />
                </span>
              </button>
            </div>
          </form>

          <div className="mt-6 justify-around flex space-x-3">
            <p className="text-sm text-gray-600 inline-block">
              Already have an account?{" "}
              <button
                onClick={() => setActiveTab("Login")} // Ensure this updates the state
                className={`font-semibold text-sm text-[#DB0032] hover:text-[#FA6602] transition-all`}
              >
                Login
              </button>

            </p>
            <div className="font-bold">|</div>
            <div className="text-sm text-gray-600">
              If you require support{" "}
              <a href="#" className="text-[#DB0032] hover:text-[#FA6602] ">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
