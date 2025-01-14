// import React from "react";
// import { FaLock, FaEnvelope } from "react-icons/fa";
// import Navbar from "../components/Navbar";

// function LogIn() {
//   return (
//     <>
//       <section className="relative w-full h-full overflow-hidden course-bg">
//         <div className="relative bg-layer">
//           <Navbar />
//           <div className="text-white flex items-center justify-center container mx-auto px-4 py-12">
//             <h1 className="text-5xl uppercase font-bold">Log-In</h1>
//           </div>
//         </div>
//       </section>
//       <section className="flex items-center justify-center bg-gray-100 py-8">
//         <div className="max-w-md w-full bg-white p-6 rounded shadow-lg mx-4">
//           <h2 className="text-2xl font-bold mb-2 text-center">Welcome Back!</h2>
//           <p className="text-gray-600 mb-4 text-sm text-center">
//             TAKE THE NEXT STEP IN YOUR SALES JOURNEY
//           </p>

//           <form className="space-y-4">
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border border-gray-300 rounded pl-10 p-2"
//               />
//             </div>
//             <div className="relative">
//               <FaLock className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full border border-gray-300 rounded pl-10 p-2"
//               />
//             </div>
//             <div className="flex justify-between items-center">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Remember Me
//               </label>
//               <a href="#" className="text-sm text-blue-500">
//                 Forgot Password?
//               </a>
//             </div>
//             <div className="flex justify-center items-center">
//               <button className="text-white transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-8 py-2">
//                 LOGIN
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// export default LogIn;



import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

function LogIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleForgotPassword = () => {
    // Handle forgot password submission here
    alert(`Password reset link sent to ${forgotEmail}`);
    setShowForgotPassword(false); // Hide the forgot password form after submission
  };

  return (
    <>
     <section className="relative w-full h-full overflow-hidden course-bg">
       <div className="relative bg-layer">
         <Navbar />
         <div className="text-white flex items-center justify-center container mx-auto px-4 py-12">
           <h1 className="text-5xl uppercase font-bold">Log-In</h1>
         </div>
       </div>
     </section>
      <section className="flex items-center justify-center bg-gray-100 py-6">
        <div className="max-w-md w-full bg-white p-6 rounded shadow-lg mx-4">
          {!showForgotPassword ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-center">Welcome Back!</h2>
              <p className="text-gray-600 mb-4 text-sm text-center">
                TAKE THE NEXT STEP IN YOUR SALES JOURNEY
              </p>

              <form className="space-y-4">
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
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded pl-10 pr-10 p-2"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="text-white transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-8 py-2">
                    LOGIN
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2 text-center">Forgot Password</h2>
              <p className="text-gray-600 mb-4 text-sm text-center">
                Enter your email to reset your password
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleForgotPassword();
                }}
                className="space-y-4"
              >
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded pl-10 p-2"
                    required
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="text-white transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-8 py-2"
                  >
                    RESET PASSWORD
                  </button>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="text-sm text-blue-500 hover:underline"
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
