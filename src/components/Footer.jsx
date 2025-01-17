import React from "react";
import Logo from "../assets/logo.png";
import RightArrow1 from "../assets/arrow-right1.png";
import ArrowAdd from "../assets/Advance.png";
import Location from "../assets/location.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/Phone.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import FooterLine from "../assets/line-footer.png";

function Footer() {
  return (
    <footer className="bg-gradient-2 text-white">
      {/* Top Section */}
      

      {/* Middle Section */}
      <div className="banner-footer">
        <div className="container px-4 py-10 mx-auto md:block lg:flex xl:flex gap-12 justify-between">
          <div className="w-full md:w-full xs-w-full sm:w-full lg:w-1/3 xl:w-1/3">
            <div className="">
              <p className="mb-4 bold-text1">
                At The Enablement Company, we help your sales team achieve
                exceptional results with tailored training and enablement
                solutions to enhance strategies, improve performance, and
                optimize processes.
              </p>
              <h5 className="mb-2 font-bold uppercase text-base sm:text-xl  md:text-xl lg:text-xl xl:text-2xl">
                Schedule a Consultation
              </h5>
              {/* <button
                type="button"
                className="flex md:px-12 hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]  transition-transform duration-500 ease-out transform  md:py-3 md:w-auto  uppercase items-center text-white font-bold text-sm md:text-sm lg:text-sm xl:text-xl 2xl:text-lg px-5 py-2 border-2 border-white"
              >
                Get Started Now
                <img src={RightArrow1} alt="arrow" className="w-6 h-6 ml-2" />
              </button> */}
              <button
  type="button"
  className="flex md:px-12 hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:from-[#FA6602] hover:to-[#DB0032] transition-all duration-500 ease-out transform md:py-3 md:w-auto uppercase items-center text-white font-bold text-sm md:text-sm lg:text-sm xl:text-xl 2xl:text-lg px-5 py-2 border-2 border-white"
>
  Get Started Now
  <img src={RightArrow1} alt="arrow" className="w-6 h-6 ml-2" />
</button>

            </div>
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3">
            <div className="grid grid-cols-1 mt-6 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-5 xl:gap-12 justify-between">
              {/* Courses Column */}
              <div>
                <h5 className="font-bold text-lg md:text-2xl  mb-4">Courses</h5>
                <img src={FooterLine} alt="Line" className="w-[110px] mb-4" />
                {[
                  "Professional Selling Skills",
                  "Front Line Retail Selling Skills",
                  "Sales Management",
                  "Sales Territory Planning & Routing",
                  "Retail Sales Planning and Forecasting",
                  "Communication Skills for Sales Staff",
                ].map((course, index) => (
                  <div key={index} className="flex cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] items-center mb-2">
                    <img src={ArrowAdd} alt="arrow" className="w-6 h-6 mr-2" />
                    <p>{course}</p>
                  </div>
                ))}
              </div>

              {/* Quick Links Column */}
              <div>
                <h5 className="font-bold text-lg md:text-2xl mb-4">
                  Quick Links
                </h5>
                <img src={FooterLine} alt="Line" className="w-[110px] mb-4" />
                {["Home", "About Us", "Services", "Blogs", "Contact Us"].map(
                  (link, index) => (
                    <div key={index} className="flex hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] cursor-pointer items-center mb-2">
                      <img
                        src={ArrowAdd}
                        alt="arrow"
                        className="w-6 h-6 mr-2"
                      />
                      <p>{link}</p>
                    </div>
                  )
                )}
              </div>

              {/* Contact Column */}
              <div>
                <h5 className="font-bold md:text-2xl text-lg mb-4 ">
                  Contact Us
                </h5>
                <img src={FooterLine} alt="Line" className="w-[110px] mb-4" />

                <div className="flex flex-row gap-4  mb-2 sm:flex-row sm:gap-4 md:gap-4 md:flex-row lg:flex-col xl:flex-row">
                  <img src={Location} alt="location" className="w-6 h-6 mb-2" />
                  <p>28 Sturdee Road, Rosebank, Johannesburg</p>
                </div>

                <div className="flex flex-row gap-4   mb-2 sm:flex-row sm:gap-4 md:gap-4 lg:flex-col xl:flex-row">
                  <img src={Phone} alt="phone" className="w-6 h-6 mb-2" />
                  <p>010 335-1182</p>
                </div>

                <div className="flex flex-row gap-4  mb-2 sm:flex-row sm:gap-4 md:gap-4 md:flex-row lg:flex-col xl:flex-row">
                  <img src={Mail} alt="mail" className="w-6 h-6 mb-2" />
                  <p>info@theenablement.com</p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="banner">
        <div className="container mx-auto flex bold-text1 flex-col md:flex-wrap lg:flex-row xl:flex-row justify-between items-center px-4 py-4 text-center md:text-left">
          <p>
            Copyright © 2024 All Rights Reserved By{" "}
            <span className="uppercase font-bold">
              The Sales Enablement Company
            </span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[Facebook, Instagram, Twitter, Linkedin].map((icon, index) => (
              <img key={index} src={icon} alt="social" className="w-10 h-10" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
