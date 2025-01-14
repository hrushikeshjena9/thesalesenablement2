import React from "react";
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import heroImage1 from "../assets/banner2.jpg";

function SignUp() {
  return (
    <>
      <section>
        <div className="relative w-full h-full overflow-hidden course-bg">
          <div className="relative   bg-layer">
            <Navbar />

            <div className="text-white flex items-center justify-center container mx-auto px-4 h-[200px]">
              <h1 className="text-5xl uppercase font-bold">Sign-UP</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 md:p-8 lg:p-10 rounded shadow-lg mx-4 md:mx-6 lg:mx-8">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Create Your Account
          </h2>
          <p className="text-gray-600 mb-4 md:mb-6 text-sm text-center">
            Continue your journey toward greater sales success with us.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded pl-10 p-2.5"
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded pl-10 p-2.5"
                />
              </div>
            </div>

            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded pl-10 p-2.5"
              />
            </div>

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

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded pl-10 p-2.5"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <label className="text-gray-600 text-sm">
                I agree to the{" "}
                <span className="text-sm uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                  Terms and Conditions
                </span>
              </label>
            </div>

            <div className="flex justify-center items-center">
              <button className="text-white transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-8 py-2 md:px-10 md:py-3">
                SIGN UP
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-sm uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text"
            >
              Login
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
}

export default SignUp;
