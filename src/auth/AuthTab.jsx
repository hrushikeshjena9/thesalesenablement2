// import LogIn from "./Login";
// import SignUp from "./SignUp";

// const AuthTab = ({ activeTab, setActiveTab }) => {

//   return (
//     <div className="py-12 flex flex-col items-center">
//       {/* Tab Buttons */}
//       <div className="flex bg-gray-200 sticky top-0 z-10  overflow-hidden shadow-md">
//         <button
//           onClick={() => setActiveTab("Login")}
//           className={`relative group flex justify-center items-center transition-all duration-500 ease-out uppercase text-sm font-bold px-10 py-3 
//       ${activeTab === "Login" ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white shadow-md" : "bg-[#383f71] text-white "}
//     `}
//         >
//           <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
//           <span className="relative z-10 group-hover:text-[#DB0032]">Login</span>
//         </button>
//         <button
//           onClick={() => setActiveTab("Sign Up")}
//           className={`relative group flex justify-center items-center transition-all duration-500 ease-out uppercase text-sm font-bold px-10 py-3 
//       ${activeTab === "Sign Up" ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white shadow-md" : "bg-[#383f71] text-white "}
//     `}
//         >
//           <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
//           <span className="relative z-10 group-hover:text-[#DB0032]">Sign Up</span>
//         </button>
//       </div>


//       {/* Content Section */}
//       <div className="w-full  mt-4 p-6 bg-white  ">
//         <div className="relative flex items-center my-4">
//           <div className="flex-grow border-t-2 border-[#DB0032]"></div>

//           <div className="flex-grow border-t-2 border-[#FA6602]"></div>
//         </div>
//         <div className="">
//           {activeTab === "Login" ? <LogIn /> : <SignUp />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthTab;

import LogIn from "./Login";
import SignUp from "./SignUp";
import { useState, useEffect } from "react";

const AuthTab = ({ activeTab, setActiveTab }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle the scroll event to determine visibility
  const handleScroll = () => {
    setIsVisible(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabButtonClass = (tabName) => {
    return `relative group flex justify-center items-center transition-all duration-500 ease-out uppercase text-sm font-bold px-10 py-3 
      ${activeTab === tabName ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white shadow-md" : "bg-[#383f71] text-white"}`
  };

  return (
    <div className="py-12 flex flex-col items-center">
      {/* Tab Buttons */}
      <div className={`w-full bg-white  ${isVisible ? "fixed top-20 z-20 container px-4" : "relative"}`}>
        <div className="flex justify-center z-10 py-3 bg- overflow-hidden  transition-all duration-500">

          <button
            onClick={() => setActiveTab("Login")}
            className={tabButtonClass("Login")}
          >
            <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-[#DB0032]">Login</span>
          </button>
          <button
            onClick={() => setActiveTab("Sign Up")}
            className={tabButtonClass("Sign Up")}
          >
            <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-[#DB0032]">Sign Up</span>
          </button>
        </div>
        <div className="relative flex items-center my-2 w-full">
          <div className="flex-grow border-t-2 border-[#DB0032]"></div>
          <div className="flex-grow border-t-2 border-[#FA6602]"></div>
        </div>
      </div>

      {/* Horizontal Divider */}


      {/* Content Section */}
      <div className="w-full mt-4 p-6 bg-white">
        {activeTab === "Login" ? <LogIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthTab;
