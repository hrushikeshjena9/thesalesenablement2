import React, { useState, useEffect } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import HoverLine from "../assets/hover-line.png";
import { FaLock, FaEnvelope, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import RightArrow1 from "../assets/arrow-right1.png";

const DesktopMenu = ({
  links,
  courses,
  services,
  dropdownOpen,
  toggleDropdown,
  setActiveTab
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => { setPasswordVisible(!passwordVisible) };
  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email_id: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleForgotPassword = () => {
    alert(`Password reset link sent to ${forgotEmail}`);
    setShowForgotPassword(false);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (menuName) => {
    toggleDropdown(menuName);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    toggleDropdown("");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  const validateFields = () => {
    let tempErrors = {};

    if (!loginData.email_id) tempErrors.email_id = "Email is required.";
    if (!loginData.password) tempErrors.password = "Password  is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      toast.error("Please fill all required fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    try {
      const url = "http://192.168.1.7:8000/api/v1/login";
      const { data: res } = await axios.post(url, loginData);
      if (res.status) {
        localStorage.setItem("token", res.data.token);
        toast.success(res.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        setTimeout(() => {
          window.location = "/";
        }, 3000);
      }
    } catch (error) {

      toast.error("invalid credentials", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })

    }
  };

  return (
    <>
      <ul className="hidden lg:flex xl:space-x-12 2xl:space-x-14 lg:space-x-3 bold-text1 uppercase mt-4 lg:mt-0">
        {links.map((link, index) => (
          <li key={index} className="relative">
            {["Courses", "Services"].includes(link.name) ? (
              <div
                className="relative group hover:font-bold"
                onMouseEnter={() => handleMouseEnter(link.name.toLowerCase())}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="sm:text-xs lg:text-sm xl:text-base uppercase flex items-center gap-1  space-x-2
      group-hover:text-transparent  group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] 
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
                              `block font-bold ${isActive
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] icon-hover2 transition duration-200 ease-in-out"
                                : " "
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
                          to="/courses"
                          className="text-white group flex justify-center items-center transition-all duration-300 ease-out transform uppercase text-[14px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl rounded-lg shadow-lg font-bold text-sm px-8 py-3 cursor-pointer "
                        >
                          <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                          <span className="relative text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                            All Courses
                          </span>
                        </Link>
                      ) : (
                        <Link
                          to="/services"
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
                  `relative sm:text-xs lg:text-sm xl:text-base ${isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] font-bold"
                    : "hover:text-transparent hover:bg-clip-text hover:font-bold hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
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

      <div className="hidden lg:flex gap-5">
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
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
            onClick={closeModal} // This listens for clicks on the backdrop
          >
            <div
              className="bg-white p-8 rounded-md w-full max-w-xl relative"
              onClick={(e) => e.stopPropagation()} // This prevents the modal from closing when clicking inside it
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >

                <span className="text-black text-2xl hover:text-red-600 transition-all duration-300 ease-in-out  font-semibold">
                  <FaTimes />
                </span>
              </button>
              {!showForgotPassword ? (
                <>
                  <h2 className="text-2xl font-bold text-black mb-2 text-center">
                    Welcome Back!
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm text-center">
                    TAKE THE NEXT STEP IN YOUR SALES JOURNEY
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="relative text-neutral-950">
                      <label
                        htmlFor="email_id"
                        className="block text-black font-normal mb-1 text-sm"
                      >
                        Email Address
                      </label>
                      <FaEnvelope className="absolute left-3 top-10 text-gray-400" />
                      <input
                        id="email_id"
                        type="email"
                        name="email_id"
                        placeholder="Email Address"
                        onChange={handleChange}
                        value={loginData.email_id}
                        className="w-full border border-gray-300 pl-10 mt-1 p-2"
                      />
                      {errors && <span className="text-red-500 text-xs mt-2">{errors.email_id}</span>}
                    </div>
                    <div className="relative text-neutral-950">
                      <label
                        htmlFor="password"
                        className="block font-normal text-black mb-1 text-sm"
                      >
                        Password
                      </label>
                      <FaLock className="absolute left-3 top-10 text-gray-400" />
                      <input
                        id="password"
                        name="password"
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        onChange={handleChange}
                        value={loginData.password}
                        className="w-full border border-gray-300 pl-10 pr-10 mt-1 p-2"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-10 text-gray-400 focus:outline-none"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      {errors && <span className="text-red-500 text-xs mt-2">{errors.password}</span>}

                    </div>
                    <div className="flex justify-between text-black items-center">

                      <label htmlFor="remember" className="flex gap-2  cursor-pointer items-center">
                        <input
                          id="remember"
                          type="checkbox"
                          className="checkbox-custom w-5 h-5 border-2 border-[#DB0032] rounded-sm hover:border-[#FA6602] appearance-none relative transition-all ease-in cursor-pointer"
                        />
                        <span className="text-sm">Remember Me</span>
                      </label>

                      <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-sm text-[#DB0032] hover:text-[#FA6602] cursor-pointer"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        type="submit"
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

                  <div className="flex justify-center mt-4">
                    <p className="text-sm text-gray-600 inline-block">
                      <Link
                        to="/login-signup"
                        className={`font-semibold text-sm text-[#DB0032] hover:text-[#FA6602] transition-all`}
                      >
                        Create An Account
                      </Link>
                    </p>
                  </div>

                  <div className="text-xs text-gray-600 flex justify-center gap-1 py-6">
                    <span className="mt-1">
                      {" "}
                      By continuing, you agree to the
                    </span>
                    <Link to="/terms-and-conditions">
                      <span className="text-sm font-bold text-[#DB0032] hover:text-[#FA6602]  cursor-pointer">
                        Terms, Conditions and Privacy policy.
                      </span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl text-black font-bold mb-2 text-center">
                    Forgot Password
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm text-center">
                    Reset your password by submitting your email address linked
                    to your GIBS account. We will send you an email with a link
                    to choose a new password.
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
                        className="block text-black font-normal mb-1 text-sm"
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
                        className="text-sm text-[#DB0032] hover:text-[#FA6602] cursor-pointer"
                      >
                        Back to Login
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

        <NavLink
          to="/login-signup"
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
