// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../assets/logo.png";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", route: "/" },
//     { name: "About Us", route: "/about-us" },
//     { name: "Services", route: "/services" },
//     { name: "Courses", route: "/courses" },
//     { name: "Blogs", route: "/blogs" },
//     { name: "Contact Us", route: "/contact-us" },
//   ];

//   return (
//     <section className="container mx-auto px-4">
//       <nav className="text-white">
//         <div className="flex justify-between items-center py-4">
//           <div className="text-xl font-bold">
//             <img src={Logo} alt="Logo" className="w-[200px] h-auto" />
//           </div>

//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden text-white focus:outline-none"
//           >
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>

//           <ul className="hidden lg:flex lg:space-x-6 font-normal mt-4 lg:mt-0">
//             {links.map((link, index) => (
//               <NavLink
//                 key={index}
//                 to={link.route}
//                 className={({ isActive }) =>
//                   `relative text-lg lg:text-base ${
//                     isActive
//                       ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] font-bold"
//                       : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </ul>

//           <div className="hidden lg:flex space-x-5">
//             <button
//               type="button"
//               className="text-white text-[12px] w-[105px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none font-bold text-sm px-6  py-3"
//             >
//               Login
//             </button>
//             <button
//               type="button"
//               className="text-transparent text-[12px] bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-6 py-3"
//               style={{
//                 border: "2px solid transparent",
//                 borderImage:
//                   "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
//               }}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40 ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <div
//             className={`absolute top-0 right-0 text-white bg-gradient-to-r from-[#060B33] to-[#383F71] w-3/4 h-full shadow-xl transform ${
//               isMenuOpen ? "translate-x-0" : "translate-x-full"
//             } transition-transform duration-300 ease-in-out`}
//           >
//             <div className="flex justify-between items-center p-6 border-b">
//               <img src={Logo} alt="Logo" className="w-[150px]" />
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-white text-3xl"
//               >
//                 &times;
//               </button>
//             </div>

//             <ul className="p-6 space-y-6">
//               {links.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.route}
//                     className={({ isActive }) =>
//                       `block text-xl ${
//                         isActive
//                           ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] font-bold"
//                           : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
//                       }`
//                     }
//                   >
//                     {link.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             <div className="p-6 space-y-4">
//               <button
//                 type="button"
//                 className="w-full text-white py-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none"
//               >
//                 Login
//               </button>
//               <button
//                 type="button"
//                 className="w-full text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl py-3 font-medium"
//                 style={{
//                   border: "2px solid transparent",
//                   borderImage:
//                     "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
//                 }}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// }

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about-us" },
    { name: "Services", route: "/services" },
    { name: "Courses", route: "/courses" },
    { name: "Blogs", route: "/blogs" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  return (
    <section className="container mx-auto px-4">
      <nav className="text-white">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            <img src={Logo} alt="Logo" className="w-[170px] h-auto" />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <ul className="hidden lg:flex lg:space-x-12 bold-text1 uppercase  mt-4 lg:mt-0">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.route}
                className={({ isActive }) =>
                  `relative text-lg  lg:text-base ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] font-bold"
                      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          <div className="hidden lg:flex space-x-5">
            <button
              type="button"
              className="text-white uppercase text-[12px]  bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none font-bold text-sm px-10  py-3"
            >
              Login
            </button>
            <button
              type="button"
              className="text-transparent uppercase text-[12px] bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-10 sm:px-10 py-3"
              style={{
                border: "2px solid transparent",
                borderImage:
                  "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 text-white bg-gradient-to-r from-[#060B33] to-[#383F71] w-3/4 h-full shadow-xl transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <img src={Logo} alt="Logo" className="w-[150px]" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-3xl"
              >
                &times;
              </button>
            </div>

            <ul className="p-6 space-y-6">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.route}
                    className={({ isActive }) =>
                      `block text-xl ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] font-bold"
                          : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="p-6 space-y-4">
              <button
                type="button"
                className="w-full text-white py-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none"
              >
                Login
              </button>
              <button
                type="button"
                className="w-full text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl py-3 font-medium"
                style={{
                  border: "2px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
