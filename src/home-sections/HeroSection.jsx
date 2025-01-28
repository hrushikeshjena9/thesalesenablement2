import React, { useRef, useState, useEffect } from "react";
import heroImage from "../assets/Logo-banner.png";
import heroImage1 from "../assets/banner2.jpg";
import heroImage2 from "../assets/banner.png";
import heroImage3 from "../assets/banner3.png";
import SliderBtnLeft from "../assets/slider-btn-left.png";
import SliderBtnRight from "../assets/slider-btn-right.png";
import Navbar from "../components/Navbar";
import RightArrow from "../assets/arrow-right.png";
import RightArrow1 from "../assets/arrow-right1.png";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroImage3, heroImage1, heroImage2];
  const slideContent = [
    {
      title: "HELPING SALESPEOPLE RELIABLY AND CONSISTENTLY EXCEED TARGETS.",
      description:
        "Our mission is to transform sales performance by equipping professionals with the skills, insights, and tools to excel. With tailored training and cutting-edge solutions, we help sales leaders and CEOs connect, close deals, and achieve exceptional results.",
      buttonText1: "Contact Us Today",
      buttonText2: "Discover Our Services",
      path1: "/contact-us",  
      path2: "/services",
    },
    {
      title: "EMPOWERING SALES LEADERS WITH THE TOOLS FOR SUCCESS AND GROWTH",
      description:
        "We provide the best training, coaching, and solutions to ensure that sales leaders and teams can overcome challenges and thrive in a competitive market, we help sales leaders and CEOs connect, close deals, and achieve exceptional results.",
      buttonText1: "Start Your Journey",
      buttonText2: "Contact Us More",
      path1: "/courses",  
      path2: "/contact-us",
    },
    {
      title: "OPTIMIZING SALES PROCESSES FOR MAXIMUM BETTER PERFORMANCE.",
      description:
        "Our services help streamline sales operations, boosting efficiency and enabling sales teams to close more deals with less effort. Transform your approach to sales today. we help sales leaders and CEOs connect, close deals, and achieve exceptional results.",
      buttonText1: "Get in Touch",
      buttonText2: "See How We Can Help",
      path1: "/contact-us",  
      path2: "/services",
    },
  ];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          return 0;
        }
      });
    }, 48);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const handleButtonClick = (path) => {
    // Assuming you want to navigate using react-router
    window.location.href = path;
  };
  

  return (
    <>
      <section>
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide]})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>

          <div className="relative bg-layer">
            <Navbar />
            <div className="text-white flex flex-col lg:flex-row items-center justify-between container mx-auto">
              <AnimatePresence>
                <motion.div
                  key={slides[currentSlide].id}
                  className="lg:w-1/2 text-center lg:text-left h-[500px] flex flex-col justify-center px-4 sm:px-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <motion.h1
                    key={`slide-${currentSlide}`}
                    className="text-2xl sm:text-3xl lg:text-[36px] lg:leading-[48px] font-bold mb-4 mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    {slideContent[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    key={`description-${currentSlide}`}
                    className="text-base sm:text-[16px] lg:leading-[34px] bold-text1 lg:text-[18px] mb-6 mx-auto lg:mx-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    {slideContent[currentSlide].description}
                  </motion.p>

                  <motion.div
                    key={`buttons-${currentSlide}`}
                    className="flex flex-col lg:flex-row justify-between lg:justify-between items-center gap-4 lg:items-start mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleButtonClick(slideContent[currentSlide].path1)}
                      className="relative uppercase font-medium text-white transition-all duration-300 ease-in-out overflow-hidden group bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none shadow-lg flex items-center justify-center text-sm md:text-[14px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] px-5 py-2.5 w-full md:px-2 md:py-2 lg:px-3 lg:py-3 xl:px-6 xl:py-3 md:w-[250px] lg:w-auto xl:w-auto"
                    >
                      <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      <span className="relative text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] flex items-center">
                        {slideContent[currentSlide].buttonText1}
                        <img
                          src={RightArrow1}
                          alt="Arrow Icon"
                          className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out group-hover:hidden" // Hide on hover
                        />
                        <img
                          src={RightArrow} 
                          alt="Arrow Icon Hover"
                          className="w-6 h-6 ml-2 transition-transform duration-300 ease-in-out hidden group-hover:inline" // Show on hover
                        />
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleButtonClick(slideContent[currentSlide].path2)}
                      className="text-white transition-transform duration-500 ease-in-out transform hover:bg-white hover:text-[#DB0032] uppercase w-full justify-center xs:text-[12px] md:w-[250px] lg:w-auto xl:w-auto flex sm:justify-center md:justify-around xl:justify-around lg:justify-around items-center space-x-2 border-2 border-white md:text-[12px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] sm:text-sm px-3 py-2 md:px-6 md:py-2 xl:px-6 xl:py-2.5 2xl:py-3 lg:px-6 lg:py-2.5 sm:px-4 sm:py-2"
                    >
                      {slideContent[currentSlide].buttonText2}
                      <img
                        src={RightArrow}
                        alt="arrow"
                        className="w-6 h-6 ml-2"
                      />
                    </button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end hidden lg:flex"
                ref={ref2}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: inView2 ? 1 : 0,
                  opacity: inView2 ? 1 : 0,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src={heroImage}
                  alt="Hero Section Illustration"
                  className="max-w-full h-auto object-contain lg:object-cover"
                />
              </motion.div>
            </div>

            <div className="container mx-auto px-4">
              <div className="btn-hero-slider ">
                <button
                  onClick={goToPreviousSlide}
                  className="focus:outline-none "
                  aria-label="Previous Slide"
                >
                  <img
                    src={SliderBtnLeft}
                    alt="Previous Slide"
                    className="w-12 h-12 hover:scale-110 transition-transform  "
                  />
                </button>
                <button
                  onClick={goToNextSlide}
                  className="focus:outline-none ml-4"
                  aria-label="Next Slide"
                >
                  <img
                    src={SliderBtnRight}
                    alt="Next Slide"
                    className="w-12 h-12 hover:scale-110 transition-transform "
                  />
                </button>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "120px",
                overflow: "hidden",
              }}
            >
              <svg
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              >
                <path
                  d={
                    isMobile
                      ? "M0,70 Q100,0 200,70 L200,100 L0,100 Z"
                      : "M0,90 Q100,-68 200,90 L200,100 L0,100 Z"
                  }
                  fill="white"
                />
              </svg>

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                }}
              >
                <svg
                  viewBox="0 0 200 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="red" stopOpacity="1" />
                      <stop offset="100%" stopColor="orange" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <path
                    d={
                      isMobile
                        ? "M0,70 Q100,0 200,70"
                        : "M0,90 Q100,-68, 200,90"
                    }
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeDasharray="565"
                    strokeDashoffset={565 - (progress / 100) * 565}
                    strokeLinejoin="round"
                    strokeLinecap="square"
                    style={{
                      transition: "stroke-dashoffset 0.05s linear",
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
