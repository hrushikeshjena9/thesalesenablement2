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
      <div className="flex flex-col md:flex-row container mx-auto justify-between items-center py-6 px-4 md:px-4">
        <img
          src={Logo}
          alt="Logo"
          className="w-[180px] md:w-[150px] lg:w-[200px] xl:w-[300px]  h-auto mb-4 md:mb-0"
        />
        <div className="flex flex-col md:flex-row items-center sm:gap-2 md:gap-3 lg:gap-0 xl:gap-0 2xl:gap-0  w-full md:w-auto">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full sm:w-full  border sm:px-9 md:px-10 lg:px-5 xl:px-12  text-lg md:py-3.5 lg:py-4 xl:py-4 2xl:py-4  md:w-[250px] lg:w-[430px] xl:w-[430px]  border-gray-300 px-12 py-2 mb-4 sm:mb-0 sm:mr-0 md:mr-0 lg:mr-2 xl:mr-2 2xl:mr-2 focus:outline-none"
          />
          <button
            type="button"
            className="w-full uppercase sm:px-10 md:px-6 md:py-3 sm:w-full md:w-[200px]  lg:w-[250px] xl:w-[300px]  flex items-center border-2 border-white text-white px-4 py-2 justify-center gap-4 hover:text-white border-btn  font-medium text-sm  md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl text-center  dark:hover:text-white"
          >
            Subscribe
            <img src={RightArrow1} alt="arrow" className="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>

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
              <button
                type="button"
                className="flex md:px-12 md:py-3 md:w-auto  uppercase items-center text-white font-bold text-sm md:text-sm lg:text-sm xl:text-xl 2xl:text-lg px-5 py-2 border-2 border-white"
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
                  <div key={index} className="flex items-center mb-2">
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
                    <div key={index} className="flex items-center mb-2">
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
