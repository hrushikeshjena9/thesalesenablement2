import React from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import heroImage1 from "../assets/banner2.jpg";

function LogIn() {

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
            <h1 className="text-4xl text-white font-bold mb-4">LOGIN</h1>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-gray-100 py-4 md:py-8 lg:py-12">
        <div className="max-w-md w-full bg-white p-3 md:p-4 lg:p-6 rounded shadow-lg mx-2 md:mx-3 lg:mx-4">
          <h2 className="text-2xl font-bold mb-2 text-center">Welcome Back!</h2>
          <p className="text-gray-600 mb-4 text-sm text-center">
            TAKE THE NEXT STEP IN YOUR SALES JOURNEY
          </p>

          <form className="space-y-3 mt-3">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded pl-10 p-2"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded pl-10 p-2"
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
              <button className="text-white transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-8 py-2">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default LogIn;
