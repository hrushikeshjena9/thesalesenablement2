import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import RightArrow1 from "../assets/arrow-right1.png";

function LogIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${forgotEmail}`);
    setShowForgotPassword(false);
  };

  return (
    <>
      <section className="relative w-full h-full  course-bg">
        <div className="relative bg-layer">
          <Navbar />
          <div className="text-white flex items-center justify-center container mx-auto px-4 py-12">
            <h1 className="text-5xl uppercase font-bold">Login</h1>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-gray-100 py-6">
        <div className="max-w-xl w-full bg-white p-6 md:p-8 lg:p-10  shadow-xl mx-4 md:mx-6 lg:mx-8">
          {!showForgotPassword ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-center">
                Welcome Back!
              </h2>
              <p className="text-gray-600 mb-4 text-sm text-center">
                TAKE THE NEXT STEP IN YOUR SALES JOURNEY
              </p>

              <form className="space-y-4">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block font-normal mb-1 text-sm"
                  >
                    Email Address
                  </label>
                  <FaEnvelope className="absolute left-3 top-10 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 pl-10 mt-1 p-2"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block font-normal mb-1 text-sm"
                  >
                    Password
                  </label>
                  <FaLock className="absolute left-3 top-10 text-gray-400" />
                  <input
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-gray-300 pl-10 pr-10 mt-1 p-2"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-10 text-gray-400 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="remember" className="flex items-center">
                    <input id="remember" type="checkbox" className="mr-2" />
                    Remember Me
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="text-white w-full group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 flex items-center justify-center"
                  >
                    <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                    <span className="relative text-white group-hover:text-white flex items-center">
                      Login
                      <img
                        src={RightArrow1}
                        alt="Arrow Icon"
                        className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                      />
                    </span>
                  </button>
                </div>
              </form>

              <div className="text-xs text-gray-600 flex justify-center gap-1 py-6">
                <span className="mt-1"> By continuing, you agree to the</span>
                <Link to="/terms-and-conditions">
                  <span className="text-sm font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text underline cursor-pointer">
                    Terms, Conditions and Privacy policy.
                  </span>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2 text-center">
                Forgot Password
              </h2>
              <p className="text-gray-600 mb-4 text-sm text-center">
                Reset your password by submitting your email address linked to
                your GIBS account. We will send you an email with a link to
                choose a new password.
              </p>
              <hr />
              <br />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleForgotPassword();
                }}
                className="space-y-4"
              >
                <div className="relative">
                  <label
                    htmlFor="forgotEmail"
                    className="block font-normal mb-1 text-sm"
                  >
                    Email Address
                  </label>
                  <FaEnvelope className="absolute left-3 top-1/2  text-gray-400 pointer-events-none" />
                  <input
                    id="forgotEmail"
                    type="email"
                    placeholder="Email Address"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full border border-gray-300 pl-10 p-2"
                    required
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="text-white w-full group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-sm md:text-[13px] px-5 py-2.5 flex items-center justify-center"
                  >
                    <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                    <span className="relative text-white group-hover:text-white flex items-center">
                      Reset Password
                      <img
                        src={RightArrow1}
                        alt="Arrow Icon"
                        className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out"
                      />
                    </span>
                  </button>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="text-sm bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text underline cursor-pointer"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default LogIn;
