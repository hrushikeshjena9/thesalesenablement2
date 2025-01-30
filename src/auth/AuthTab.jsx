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

const AuthTab = ({ activeTab, setActiveTab }) => {

  return (
    <div className="py-12 flex flex-col items-center">
      {/* Tab Buttons */}
      <div className="flex bg-gray-200 sticky top-0 z-10 overflow-hidden shadow-md">
        <button
          onClick={() => setActiveTab("Login")}
          className={`relative group flex justify-center items-center transition-all duration-500 ease-out uppercase text-sm font-bold px-10 py-3 
      ${activeTab === "Login" ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white shadow-md" : "bg-[#383f71] text-white "}
    `}
        >
          <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          <span className="relative z-10 group-hover:text-[#DB0032]">Login</span>
        </button>
        <button
          onClick={() => setActiveTab("Sign Up")}
          className={`relative group flex justify-center items-center transition-all duration-500 ease-out uppercase text-sm font-bold px-10 py-3 
      ${activeTab === "Sign Up" ? "bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white shadow-md" : "bg-[#383f71] text-white "}
    `}
        >
          <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          <span className="relative z-10 group-hover:text-[#DB0032]">Sign Up</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full mt-4 p-6 bg-white">
        <div className="relative flex items-center my-4">
          <div className="flex-grow border-t-2 border-[#DB0032]"></div>
          <div className="flex-grow border-t-2 border-[#FA6602]"></div>
        </div>
        <div>
          {activeTab === "Login" ? <LogIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default AuthTab;
