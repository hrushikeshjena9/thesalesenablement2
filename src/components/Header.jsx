

// import React from "react";
// import Phone from "../assets/Phone.png";
// import Mail from "../assets/mail.png";
// import Facebook from "../assets/facebook.png";
// import Instagram from "../assets/instagram.png";
// import Twitter from "../assets/twitter.png";
// import Linkedin from "../assets/linkedin.png";
// import RightArrow1 from "../assets/arrow-right1.png";

// const Header = () => {
//   return (
//     <>
//       <header className="banner text-white bg-gray-900">
//         <div className="flex flex-wrap justify-between items-center container mx-auto px-4 py-3 text-sm">
//           {/* Contact Info */}
//           <div className="flex flex-col sm:flex-row sm:space-x-4 mb-3 sm:mb-0">
//             <span className="flex items-center space-x-2 mb-2 sm:mb-0">
//               <img src={Phone} alt="Phone" className="w-[26px] h-[26px]" />
//               <span className=" sm:inline text-xs sm:text-sm">
//                 010 335-1182
//               </span>
//             </span>
//             <span className="flex items-center space-x-2">
//               <img src={Mail} alt="Mail" className="w-[26px] h-[26px]" />
//               <span className=" sm:inline text-xs sm:text-sm">
//                 info@theenablement.com
//               </span>
//             </span>
//           </div>

//           {/* Social Media Links */}
//           <div className="flex space-x-4 mb-3 sm:mb-0">
//             <a href="#" aria-label="Facebook">
//               <img
//                 src={Facebook}
//                 alt="Facebook"
//                 className="w-[28px] sm:w-[24px] h-[28px] sm:h-[24px]"
//               />
//             </a>
//             <a href="#" aria-label="Instagram">
//               <img
//                 src={Instagram}
//                 alt="Instagram"
//                 className="w-[28px] sm:w-[24px] h-[28px] sm:h-[24px]"
//               />
//             </a>
//             <a href="#" aria-label="Twitter">
//               <img
//                 src={Twitter}
//                 alt="Twitter"
//                 className="w-[28px] sm:w-[24px] h-[28px] sm:h-[24px]"
//               />
//             </a>
//             <a href="#" aria-label="LinkedIn">
//               <img
//                 src={Linkedin}
//                 alt="LinkedIn"
//                 className="w-[28px] sm:w-[24px] h-[28px] sm:h-[24px]"
//               />
//             </a>
//           </div>

//           {/* Schedule Consultation Button */}
//           <div className="flex justify-center sm:justify-end w-full sm:w-auto">
//             <button
//               type="button"
//               className="text-white flex items-center space-x-2 border-btn border-white font-medium text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
//             >
//               <span>Schedule A Consultation</span>
//               <img
//                 src={RightArrow1}
//                 alt="Arrow"
//                 className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]"
//               />
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;





import React from "react";
import Phone from "../assets/Phone.png";
import Mail from "../assets/mail.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import RightArrow1 from "../assets/arrow-right1.png";

const Header = () => {
  return (
    <>
      <header className="banner text-white bg-gray-900">
        <div className="flex flex-wrap justify-between items-center container mx-auto px-4 py-3 text-sm">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-3 sm:mb-0">
            <span className="flex items-center space-x-2 mb-2 sm:mb-0">
              <img src={Phone} alt="Phone" className="w-[26px] h-[26px]" />
              <span className=" sm:inline text-lg lg:text-lg sm:text-sm">
                010 335-1182
              </span>
            </span>
            <span className="flex items-center space-x-2">
              <img src={Mail} alt="Mail" className="w-[26px] h-[26px]" />
              <span className=" sm:inline text-lg md:text-lg sm:text-sm">
                info@theenablement.com
              </span>
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-3 sm:mb-0">
            <a href="#" aria-label="Facebook">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-[28px] sm:w-[24px] md:w-[28px] md:h-[28px] h-[28px] sm:h-[24px]"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src={Instagram}
                alt="Instagram"
                className="w-[28px] sm:w-[24px] md:w-[28px] md:h-[28px] h-[28px] sm:h-[24px]"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src={Twitter}
                alt="Twitter"
                className="w-[28px] sm:w-[24px] md:w-[28px] md:h-[28px] h-[28px] sm:h-[24px]"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src={Linkedin}
                alt="LinkedIn"
                className="w-[28px] sm:w-[24px] md:w-[28px] md:h-[28px] h-[28px] sm:h-[24px]"
              />
            </a>
          </div>

          {/* Schedule Consultation Button */}
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <button
              type="button"
              className="text-white h-14 flex items-center uppercase space-x-2 border-btn border-white font-bold text-xs sm:text-sm px-3 py-2 md:px-6 sm:px-4 sm:py-2"
            >
              <span>Schedule A Consultation</span>
              <img
                src={RightArrow1}
                alt="Arrow"
                className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
