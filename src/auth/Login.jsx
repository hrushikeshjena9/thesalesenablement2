import React from "react";
import loginBg2 from "../assets/loginBg2.png";
import LeftArrow from "../assets/testi-left-arr.png";
import Logo from "../assets/SignupLogo.png";
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  }
  return (
    <section className=" about-class container mx-0">
      <div className="max-w-screen-xl mx-0 ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 3xl:grid-cols-12 gap-8 items-center">
          <div
            className="relative col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7 3xl:col-span-7 bg-cover bg-center flex flex-col justify-start items-start p-6 text-white min-h-[600px]"
            style={{
              backgroundImage: `url(${loginBg2})`,
            }}
          >
            <div className="absolute inset-0 bg-[#060b33bd] backdrop-blur-1">
              <button
              onClick={handleBackToHome}
                type="button"
                className="flex items-center space-x-2 text-white border border-white px-4 py-2 mx-4 my-2 uppercase text-sm hover:bg-white hover:text-[#060b33bd] transition-all duration-300"
              >
                <img src={LeftArrow} alt="Back Arrow" className="w-4 h-4" />
                <span>Back to Home</span>
              </button>

              <div className="flex-grow flex flex-col justify-center items-center text-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-[80%] md:w-[90%] lg:w-[80%] h-auto mb-4"
                />
                <p className="text-white text-[20px] md:text-[32px] lg:text-[40px] uppercase text-center">
                  Unlock Your Sales Potential!
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5 3xl:col-span-5 bg-white p-8">
            <h2 className="text-2xl font-bold mb-2">Welcome Back !</h2>
            <p className="text-gray-600 mb-6 text-sm">
              TAKE THE NEXT STEP IN YOUR SALES JOURNEY
            </p>

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

            {/* <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="text-sm uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text"
              >
                Login
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
