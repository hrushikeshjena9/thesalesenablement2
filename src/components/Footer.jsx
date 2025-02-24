import React, { useState, useEffect,  } from "react";
import { name } from '../../package.json';
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
import { motion } from "framer-motion";
import ModalScheduleForm from "./ModalScheduleForm";
import { FaTimes } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
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
    <footer className="bg-gradient-2 text-white">
      <div className="banner-footer">
        <div className="container px-4 py-10 mx-auto md:block lg:flex xl:flex gap-12 justify-between">
          <motion.div
            className="w-full md:w-full xs-w-full sm:w-full lg:w-1/3 xl:w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
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
                onClick={openModal}
                className="flex md:px-12 hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:from-[#FA6602] hover:to-[#DB0032] transition-all duration-500 ease-out transform md:py-3 md:w-auto uppercase items-center text-white font-bold text-sm md:text-sm lg:text-sm xl:text-xl 2xl:text-lg px-5 py-2  border-2 border-white"
              >
                Get Started Now
                <img src={RightArrow1} alt="arrow" className="w-6 h-6 ml-2" />
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
                      {/* <div className="bg-black hover:bg-red-600 hover:text-white rounded-full h-7 w-7 flex items-center justify-center">
                      <span className="text-white text-2xl font-semibold">
                        <FaTimes />
                      </span>
                    </div> */}

                      <span className="text-black text-2xl hover:text-red-600 transition-all duration-300 ease-in-out  font-semibold">
                        <FaTimes />
                      </span>
                    </button>

                    <ModalScheduleForm />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 mt-6 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-5 xl:gap-12 justify-between">
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
                  <div
                    key={index}
                    className="flex cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] items-center mb-2"
                  >
                    <img src={ArrowAdd} alt="arrow" className="w-6 h-6 mr-2" />
                    <p>{course}</p>
                  </div>
                ))}
              </div>

              <div>
                <h5 className="font-bold text-lg md:text-2xl mb-4">
                  Quick Links
                </h5>
                <img src={FooterLine} alt="Line" className="w-[110px] mb-4" />

                {["Home", "About Us", "Services", "Blogs", "Contact Us"].map(
                  (link, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        (window.location.href =
                          link === "Home"
                            ? "/"
                            : `/${link.toLowerCase().replace(/\s+/g, "-")}`)
                      }
                      className="flex hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] cursor-pointer items-center mb-2"
                    >
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

              <div>
                <h5 className="font-bold md:text-2xl text-lg mb-4 ">
                  Contact Us
                </h5>
                <img src={FooterLine} alt="Line" className="w-[110px] mb-4" />

                <div className="flex flex-row gap-4  mb-2 sm:flex-row sm:gap-4 md:gap-4 md:flex-row lg:flex-col xl:flex-row hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                  <img src={Location} alt="location" className="w-6 h-6 mb-2" />
                  <a
                    href="https://www.google.com/maps?q=28+Sturdee+Road,+Rosebank,+Johannesburg"
                    target="_blank"
                    className="flex items-center"
                  >
                    <p>28 Sturdee Road, Rosebank, Johannesburg</p>
                  </a>
                </div>

                <div className="flex flex-row gap-4   mb-2 sm:flex-row sm:gap-4 md:gap-4 lg:flex-col xl:flex-row hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                  <img src={Phone} alt="phone" className="w-6 h-6 mb-2" />
                  <a href="tel:+0103351182" className="flex items-center">
                    <p>010 335-1182</p>
                  </a>
                </div>

                <div className="flex flex-row gap-4  mb-2 sm:flex-row sm:gap-4 md:gap-4 md:flex-row lg:flex-col xl:flex-row hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                  <img src={Mail} alt="mail" className="w-6 h-6 mb-2" />
                  <a
                    href="mailto:info@theenablement.com"
                    className="flex items-center"
                  >
                    <p>info@theenablement.com</p>
                  </a>
                </div>
              </div>
            </div>{" "}
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="banner">
        <div className="container mx-auto flex bold-text1 flex-col md:flex-wrap lg:flex-row xl:flex-row justify-between items-center px-4 py-4 text-center md:text-left">
          <p>
            Copyright © {currentYear} All Rights Reserved By{" "}
            <span className="uppercase font-bold">
            {name}
            </span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[Facebook, Instagram, Twitter, Linkedin].map((icon, index) => (
              <div key={index} className="relative">
                <img
                  src={icon}
                  alt="social"
                  className="w-10 h-10 transition-all cursor-pointer duration-300 ease-in-out hover:shadow-[0px_0px_0px_2px_rgba(219,0,50,0.9),0px_0px_0px_2px_rgba(250,102,2,0.9)] "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
