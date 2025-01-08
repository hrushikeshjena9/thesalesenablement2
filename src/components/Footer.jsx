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
          className="w-[180px] md:w-[300px] h-auto mb-4 md:mb-0"
        />
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full sm:w-auto border md:px-12 text-lg md:py-3 md:w-auto  border-gray-300 px-4 py-2 mb-4 sm:mb-0 sm:mr-2 "
          />
          <button
            type="button"
            className="w-full uppercase md:px-6 md:py-3 md:w-auto  sm:w-auto flex items-center border-2 border-white text-white px-4 py-2 justify-between hover:text-white border-btn  font-medium text-sm md:text-lg text-center  dark:hover:text-white"
          >
            Subscribe
            <img src={RightArrow1} alt="arrow" className="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="banner-footer">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-10">
          {/* Left Column */}
          <div>
            <p className="mb-4">
              At The Enablement Company, we help your sales team achieve
              exceptional results with tailored training and enablement
              solutions to enhance strategies, improve performance, and optimize
              processes.
            </p>
            <h5 className="mb-2 font-bold text-lg">Schedule a Consultation</h5>
            <button
              type="button"
              className="flex md:px-6 md:py-3 md:w-auto  uppercase items-center text-white font-bold text-sm px-5 py-2 border-2 border-white"
            >
              Get Started Now
              <img src={RightArrow1} alt="arrow" className="w-6 h-6 ml-2" />
            </button>
          </div>

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
            <h5 className="font-bold text-lg md:text-2xl mb-4">Quick Links</h5>
            <img src={FooterLine} alt="Line" className="w-[110px] mb-4" />
            {["Home", "About Us", "Services", "Blogs", "Contact Us"].map(
              (link, index) => (
                <div key={index} className="flex items-center mb-2">
                  <img src={ArrowAdd} alt="arrow" className="w-6 h-6 mr-2" />
                  <p>{link}</p>
                </div>
              )
            )}
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-bold md:text-2xl text-lg mb-4">Contact Us</h5>
            <img src={FooterLine} alt="Line" className="w-[110px] mb-4" />
            <div className="flex items-center mb-2">
              <img src={Location} alt="location" className="w-6 h-6 mr-2" />
              <p>28 Sturdee Road, Rosebank, Johannesburg</p>
            </div>
            <div className="flex items-center mb-2">
              <img src={Phone} alt="phone" className="w-6 h-6 mr-2" />
              <p>010 335-1182</p>
            </div>
            <div className="flex items-center">
              <img src={Mail} alt="mail" className="w-6 h-6 mr-2" />
              <p>info@theenablement.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="banner">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 text-center md:text-left">
          <p>
            Copyright © 2024 All Rights Reserved By{" "}
            <span className="uppercase font-bold">
              The Sales Enablement Company
            </span>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[Facebook, Instagram, Twitter, Linkedin].map((icon, index) => (
              <img key={index} src={icon} alt="social" className="w-7 h-7" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
