import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScreenResolutionPopup from "./components/ScreenResolutionPopup";
import { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import NotFound from "./components/Not-found";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Course from "./pages/Course";
import About from "./pages/About";
import Services from "./home-sections/Services";
import Service from "./pages/Services";
import Contact from "./pages/ContactUs";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div
          style={{
            background: "linear-gradient(to right, #DB0032, #FA6602)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="flex flex-wrap">
            <Bars
              height="80"
              width="80"
              color="#FFFFFF"
              ariaLabel="bars-loading"
              visible={true}
            />
          </div>
        </div>
      ) : (
        <div
          className={`transition-opacity duration-1000 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          {isPopupOpen && <ScreenResolutionPopup />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;


// import React, { useState } from 'react';

// const MegaMenu = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="relative">
//       <nav className="flex space-x-8 p-4 bg-gray-800 text-white">
//         <div 
//           className="relative group"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <button className="px-4 py-2">Products</button>
          
//           {/* Mega Menu Dropdown */}
//           {isHovered && (
//             <div className="absolute left-0 mt-2 w-80 bg-white text-gray-800 shadow-xl rounded-lg p-6 space-y-4">
//               <div className="grid grid-cols-3 gap-6">
//                 <div>
//                   <h3 className="font-semibold text-lg">Category 1</h3>
//                   <ul className="space-y-2">
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 1</a></li>
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 2</a></li>
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 3</a></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">Category 2</h3>
//                   <ul className="space-y-2">
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 1</a></li>
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 2</a></li>
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 3</a></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">Category 3</h3>
//                   <ul className="space-y-2">
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 1</a></li>
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 2</a></li>
//                     <li><a href="#" className="text-sm hover:text-blue-500">Link 3</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <button className="px-4 py-2">About</button>
//         <button className="px-4 py-2">Services</button>
//         <button className="px-4 py-2">Contact</button>
//       </nav>
//     </div>
//   );
// };

// export default MegaMenu;
