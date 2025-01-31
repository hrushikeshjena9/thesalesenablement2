// import React, { useState, useEffect } from "react";
// import Phone from "../assets/Phone.png";
// import Mail from "../assets/mail.png";
// import Facebook from "../assets/facebook.png";
// import Instagram from "../assets/instagram.png";
// import Twitter from "../assets/twitter.png";
// import Linkedin from "../assets/linkedin.png";
// import RightArrow1 from "../assets/arrow-right1.png";
// import ModalScheduleForm from "./ModalScheduleForm";
// import { FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isModalOpen]);
//   return (
//     <>
//       <header className="banner text-white bg-gray-900 sticky top-0 z-40">
//         <div className="flex flex-col  sm:flex-col sm:gap-4  md:flex-col lg:flex-row xl:flex-nowrap justify-center  sm:justify-start lg:justify-between items-center container mx-auto px-4 py-3 text-sm">
//           <div className="flex flex-col items-center  sm:flex-row sm:space-x-4 mb-3 sm:mb-0">
//             <span className="flex items-center space-x-2 mb-2 group sm:mb-0 cursor-pointer">
//               <img
//                 src={Phone}
//                 alt="Phone"
//                 className="w-[26px] h-[26px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-500"
//               />
//               <span className="xl:inline text-sm md:text-sm lg:text-sm sm:text-xs">
//                 010 335-1182
//               </span>
//             </span>
//             <span className="flex items-center space-x-2 group cursor-pointer">
//               <img
//                 src={Mail}
//                 alt="Mail"
//                 className="w-[26px] h-[26px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:p1 group-hover:ring-blue-500"
//               />
//               <span className="sm:inline text-sm lg:text-sm md:text-sm sm:text-xs">
//                 info@theenablement.com
//               </span>
//             </span>
//           </div>

//           <div className="flex space-x-10 mb-3 sm:mb-0">
//             <a href="#" aria-label="Facebook" className="group">
//               <img
//                 src={Facebook}
//                 alt="Facebook"
//                 className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-500"
//               />
//             </a>
//             <a href="#" aria-label="Instagram" className="group">
//               <img
//                 src={Instagram}
//                 alt="Instagram"
//                 className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-pink-500"
//               />
//             </a>
//             <a href="#" aria-label="Twitter" className="group">
//               <img
//                 src={Twitter}
//                 alt="Twitter"
//                 className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-400"
//               />
//             </a>
//             <a href="#" aria-label="LinkedIn" className="group">
//               <img
//                 src={Linkedin}
//                 alt="LinkedIn"
//                 className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-600"
//               />
//             </a>
//           </div>

//           <div className="flex justify-center sm:justify-end w-full sm:w-auto">
//             <button
//               type="button"
//               onClick={openModal}
//               className="text-white h-10 transition-all duration-500 ease-in-out transform bg-transparent hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:text-white sm:h-10 md:h-12 lg:h-12 xl:h-14 flex items-center uppercase space-x-2 border-btn border-white font-bold text-xs lg:text-sm sm:text-xs px-3 py-2 md:px-6 sm:px-4 sm:py-2"
//             >
//               <span>Schedule A Consultation</span>
//               <img
//                 src={RightArrow1}
//                 alt="Arrow"
//                 className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] transition-transform duration-500 ease-in-out hover:translate-x-1"
//               />
//             </button>
//             {isModalOpen && (
//               <div
//                 className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50 text-[#000]"
//                 onClick={(e) => {
//                   // Close modal if clicked outside the modal content area
//                   if (e.target === e.currentTarget) {
//                     closeModal();
//                   }
//                 }}
//               >
//                 <div className="p-4 sm:p-4 lg:p-4 rounded-md relative ">
//                   <button
//                     onClick={closeModal}
//                     className="absolute top-5 right-5 text-gray-600 hover:text-gray-800 text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out bg-transparent  p-2 rounded-full"
//                   >


//                     <span className="text-black text-2xl hover:text-red-600 transition-all duration-300 ease-in-out  font-semibold">
//                       <FaTimes />
//                     </span>
//                   </button>

//                   <ModalScheduleForm />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import Phone from "../assets/Phone.png";
import Mail from "../assets/mail.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import RightArrow1 from "../assets/arrow-right1.png";
import ModalScheduleForm from "./ModalScheduleForm";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
  return (
    <>
      <header className="banner text-white bg-gray-900 sticky top-0 z-40">
        <div className="flex flex-col  sm:flex-col sm:gap-4  md:flex-col lg:flex-row xl:flex-nowrap justify-center  sm:justify-start lg:justify-between items-center container mx-auto px-4 py-3 text-sm">
          <div className="flex flex-col items-center  sm:flex-row sm:space-x-4 mb-3 sm:mb-0">
            <span className="flex items-center space-x-2 mb-2 group sm:mb-0 cursor-pointer">
              <img
                src={Phone}
                alt="Phone"
                className="w-[26px] h-[26px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-500"
              />
              <span className="xl:inline text-sm md:text-sm lg:text-sm sm:text-xs">
                010 335-1182
              </span>
            </span>
            <span className="flex items-center space-x-2 group cursor-pointer">
              <img
                src={Mail}
                alt="Mail"
                className="w-[26px] h-[26px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:p1 group-hover:ring-blue-500"
              />
              <span className="sm:inline text-sm lg:text-sm md:text-sm sm:text-xs">
                info@theenablement.com
              </span>
            </span>
          </div>

          <div className="flex space-x-10 mb-3 sm:mb-0">
            <a href="#" aria-label="Facebook" className="group">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-500"
              />
            </a>
            <a href="#" aria-label="Instagram" className="group">
              <img
                src={Instagram}
                alt="Instagram"
                className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-pink-500"
              />
            </a>
            <a href="#" aria-label="Twitter" className="group">
              <img
                src={Twitter}
                alt="Twitter"
                className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-400"
              />
            </a>
            <a href="#" aria-label="LinkedIn" className="group">
              <img
                src={Linkedin}
                alt="LinkedIn"
                className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-600"
              />
            </a>
          </div>

          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <button
              type="button"
              onClick={openModal}
              className="text-white h-10 transition-all duration-500 ease-in-out transform bg-transparent hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:text-white sm:h-10 md:h-12 lg:h-12 xl:h-14 flex items-center uppercase space-x-2 border-btn border-white font-bold text-xs lg:text-sm sm:text-xs px-3 py-2 md:px-6 sm:px-4 sm:py-2"
            >
              <span>Schedule A Consultation</span>
              <img
                src={RightArrow1}
                alt="Arrow"
                className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] transition-transform duration-500 ease-in-out hover:translate-x-1"
              />
            </button>
            {isModalOpen && (
              <div
                className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50 text-[#000]"
                onClick={(e) => {
                  // Close modal if clicked outside the modal content area
                  if (e.target === e.currentTarget) {
                    closeModal();
                  }
                }}
              >
                <div className="p-4 sm:p-4 lg:p-4 rounded-md relative ">
                  <button
                    onClick={closeModal}
                    className="absolute top-5 right-5 text-gray-600 hover:text-gray-800 text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out bg-transparent  p-2 rounded-full"
                  >


                    <span className="text-black text-2xl hover:text-red-600 transition-all duration-300 ease-in-out  font-semibold">
                      <FaTimes />
                    </span>
                  </button>

                  <ModalScheduleForm />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;


// import React, { useState, useEffect } from "react";
// import Phone from "../assets/Phone.png";
// import Mail from "../assets/mail.png";
// import Facebook from "../assets/facebook.png";
// import Instagram from "../assets/instagram.png";
// import Twitter from "../assets/twitter.png";
// import Linkedin from "../assets/linkedin.png";
// import RightArrow1 from "../assets/arrow-right1.png";
// import { FaTimes } from "react-icons/fa";
// import ModalScheduleForm from "./ModalScheduleForm";

// const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the header on small devices

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState); // Toggle the state of the menu
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isModalOpen]);

//   return (
//     <>
//       <header className="banner text-white bg-gray-900 sticky top-0 z-40">
//         <div className="flex flex-col sm:flex-row sm:gap-4 md:flex-row lg:flex-row xl:flex-nowrap justify-center sm:justify-start lg:justify-between items-center container mx-auto px-4 py-3 text-sm">
//           {/* Toggle Button for Small Devices */}
//           <div className="sm:hidden flex justify-between items-center w-full mb-3">
//             <button onClick={toggleMenu} className="text-white text-xl">
//               {isMenuOpen ? (
//                 <FaTimes className="text-2xl" />
//               ) : (
//                 <img src={RightArrow1} alt="Arrow" className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]" />
//               )}
//             </button>
//           </div>

//           {/* Contact Info */}
//           <div className={`flex flex-col items-center sm:flex-row sm:space-x-4 mb-3 sm:mb-0 ${isMenuOpen ? "block" : "hidden sm:flex sm:flex-col md:flex-col lg:flex-row sm:space-x-4 sm:mb-0"}`}>
//             <span className="flex items-center space-x-2 mb-2 group sm:mb-0 cursor-pointer">
//               <img
//                 src={Phone}
//                 alt="Phone"
//                 className="w-[26px] h-[26px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-500"
//               />
//               <span className="xl:inline text-sm md:text-sm lg:text-sm sm:text-xs">
//                 010 335-1182
//               </span>
//             </span>
//             <span className="flex items-center space-x-2 group cursor-pointer">
//               <img
//                 src={Mail}
//                 alt="Mail"
//                 className="w-[26px] h-[26px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:p1 group-hover:ring-blue-500"
//               />
//               <span className="sm:inline text-sm lg:text-sm md:text-sm sm:text-xs">
//                 info@theenablement.com
//               </span>
//             </span>
//           </div>

//           {/* Social Icons */}
//           <div className={`flex space-x-10 mb-3 sm:mb-0 ${isMenuOpen ? "block" : "hidden sm:flex"}`}>
//             <a href="#" aria-label="Facebook" className="group">
//               <img
//                 src={Facebook}
//                 alt="Facebook"
//                 className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-500"
//               />
//             </a>
//             <a href="#" aria-label="Instagram" className="group">
//               <img
//                 src={Instagram}
//                 alt="Instagram"
//                 className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-pink-500"
//               />
//             </a>
//             <a href="#" aria-label="Twitter" className="group">
//               <img
//                 src={Twitter}
//                 alt="Twitter"
//                 className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-400"
//               />
//             </a>
//             <a href="#" aria-label="LinkedIn" className="group">
//               <img
//                 src={Linkedin}
//                 alt="LinkedIn"
//                 className="w-[28px] sm:w-[24px] lg:w-[34px] lg:h-[34px] md:w-[28px] md:h-[28px] xl:h-[40px] xl:w-[40px] h-[28px] sm:h-[24px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-600"
//               />
//             </a>
//           </div>

//           {/* Schedule Button */}
//           <div className={`flex justify-center sm:justify-end w-full sm:w-auto ${isMenuOpen ? "block" : "hidden sm:flex"}`}>
//             <button
//               type="button"
//               onClick={openModal}
//               className="text-white h-10 transition-all duration-500 ease-in-out transform bg-transparent hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:text-white sm:h-10 md:h-12 lg:h-12 xl:h-14 flex items-center uppercase space-x-2 border-btn border-white font-bold text-xs lg:text-sm sm:text-xs px-3 py-2 md:px-6 sm:px-4 sm:py-2"
//             >
//               <span>Schedule A Consultation</span>
//               <img
//                 src={RightArrow1}
//                 alt="Arrow"
//                 className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] transition-transform duration-500 ease-in-out hover:translate-x-1"
//               />
//             </button>
//           </div>

//           {/* Modal for Consultation */}
//           {isModalOpen && (
//             <div
//               className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50 text-[#000]"
//               onClick={(e) => {
//                 if (e.target === e.currentTarget) {
//                   closeModal();
//                 }
//               }}
//             >
//               <div className="p-4 sm:p-4 lg:p-4 rounded-md relative ">
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-5 right-5 text-gray-600 hover:text-gray-800 text-xl sm:text-2xl md:text-3xl transition-all duration-300 ease-in-out bg-transparent p-2 rounded-full"
//                 >
//                   <span className="text-black text-2xl hover:text-red-600 transition-all duration-300 ease-in-out font-semibold">
//                     <FaTimes />
//                   </span>
//                 </button>

//                 <ModalScheduleForm />
//               </div>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
