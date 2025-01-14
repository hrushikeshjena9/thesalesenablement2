import React from "react";
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import heroImage1 from "../assets/banner2.jpg";

function SignUp() {
  return (
    <>
      <section>
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage1})`,
            filter: "blur(0px)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
        <div className="relative bg-gradient-to-b from-black to-transparent" style={{ backgroundColor: '#060b33bd' }}>
          <div>
            <Navbar />
          </div>
          <div className="container mx-auto text-center py-20">
            <h1 className="text-4xl text-white font-bold mb-4">SIGN-UP</h1>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg w-full bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Create Your Account
          </h2>
          <p className="text-gray-600 mb-6 text-sm text-center">
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
              <button className="text-white transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 py-3">
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
