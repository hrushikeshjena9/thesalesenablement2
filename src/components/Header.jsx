import React from "react";
import Phone from "../assets/Phone.png";
import Mail from "../assets/mail.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import RightArrow1 from "../assets/arrow-right1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="banner text-white bg-gray-900 sticky top-0 z-50">
        <div className="flex flex-wrap sm:flex-row sm:gap-4 md:flex-row md:flex-wrap lg:flex-nowrap xl:flex-nowrap justify-between items-center container mx-auto px-4 py-3 text-sm">
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-3 sm:mb-0">
            <span className="flex items-center space-x-2 mb-2 group sm:mb-0 cursor-pointer">
              <img
                src={Phone}
                alt="Phone"
                className="w-[26px] h-[26px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-blue-500"
              />
              <span className="xl:inline text-lg md:text-sm lg:text-sm sm:text-sm">
                010 335-1182
              </span>
            </span>
            <span className="flex items-center space-x-2 group cursor-pointer">
              <img
                src={Mail}
                alt="Mail"
                className="w-[26px] h-[26px] transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:p1 group-hover:ring-blue-500"
              />
              <span className="sm:inline lg:text-sm md:text-sm sm:text-xs">
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
            <Link
              to="/schedule-a-consultation"
              type="button"
              className="text-white h-10 transition-all duration-500 ease-in-out transform bg-transparent hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:text-white sm:h-10 md:h-12 lg:h-12 xl:h-14 flex items-center uppercase space-x-2 border-btn border-white font-bold text-base lg:text-sm sm:text-xs px-3 py-2 md:px-6 sm:px-4 sm:py-2"
            >
              <span>Schedule A Consultation</span>
              <img
                src={RightArrow1}
                alt="Arrow"
                className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] transition-transform duration-500 ease-in-out hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
