import { useState } from "react";
import WaterBubbleBackground from "./WaterBubbleBackground";
import heroImage from "../assets/Logo-banner.png";

function AdminAuth() {
    const [isSignup, setIsSignup] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#060B33] to-[#383F71] px-4 overflow-hidden">
            <WaterBubbleBackground />


            <img src={heroImage} alt="Company Logo" className="w-1/2 sm:w-1/4 mb-6 relative z-10" />


            <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 max-w-4xl w-full min-h-[500px] relative z-10">

                <div className="hidden sm:flex items-center justify-center bg-gray-100">
                    <img
                        src="https://img.freepik.com/free-photo/smiling-young-businessman_1098-778.jpg?t=st=1739180693~exp=1739184293~hmac=1293ed75c42a70604e34f5b26468fffb47ed502c683a11e322cac6fc979dc3a7&w=1380"
                        alt="Admin Access"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6 sm:p-10 flex flex-col justify-center w-full min-h-[500px]">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
                        {isForgotPassword
                            ? "Reset Password"
                            : isSignup
                                ? "Admin Signup"
                                : "Admin Login"}
                    </h2>


                    {isForgotPassword ? (
                        <div>
                            <label htmlFor="forgotEmail" className="block text-gray-600 text-sm mb-1">
                                Enter your email to reset password
                            </label>
                            <input
                                id="forgotEmail"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#060b33]"
                                required
                            />
                            <button
                                type="submit"
                                className="text-white group text-nowrap mt-4 transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-xs md:text-sm px-5 py-2.5 w-full md:px-6 md:py-3 md:w-full lg:w-full xl:w-full 2xl:w-full flex items-center justify-center"
                            >
                                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                                <span className="relative text-white group-hover:text-white flex items-center">

                                    Send Reset Link
                                </span>
                            </button>
                            <p
                                className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:text-[#DB0032]"
                                onClick={() => setIsForgotPassword(false)}
                            >
                                Back to Login
                            </p>
                        </div>
                    ) : (
                        <form className="space-y-4 flex flex-col">
                            {isSignup && (
                                <div>
                                    <label htmlFor="name" className="block text-gray-600 text-sm mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-[#060b33]"
                                        required
                                    />
                                </div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-gray-600 text-sm mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-[#060b33]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-gray-600 text-sm mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-[#060b33]"
                                    required
                                />
                            </div>

                            {isSignup && (
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-gray-600 text-sm mb-1">
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm your password"
                                        className="w-full px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-[#060b33]"
                                        required
                                    />
                                </div>
                            )}

                            <button
                                type="submit"
                                className="text-white group text-nowrap transition-transform duration-500 ease-out transform uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-xs md:text-sm px-5 py-2.5 w-full md:px-6 md:py-3 md:w-full lg:w-full xl:w-full 2xl:w-full flex items-center justify-center"
                            >
                                <span className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"></span>
                                <span className="relative text-white group-hover:text-white flex items-center">     {isSignup ? "Sign Up" : "Login"}         </span>
                            </button>
                        </form>
                    )}

                    {/* Forgot Password Link */}
                    {!isSignup && !isForgotPassword && (
                        <p
                            className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:text-[#DB0032]"
                            onClick={() => setIsForgotPassword(true)}
                        >
                            Forgot password?
                        </p>
                    )}


                    {!isForgotPassword && (
                        <p
                            className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:text-[#DB0032]"
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {isSignup
                                ? "Already have an account? Login here"
                                : "Don't have an account? Sign up here"}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminAuth;
