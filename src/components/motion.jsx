// // // import React from 'react';
// // // import { motion } from 'framer-motion';

// // // const ScrollAnimationLeftRight = () => {
// // //   const leftVariants = {
// // //     hidden: { opacity: 0, x: -100 },
// // //     visible: {
// // //       opacity: 1,
// // //       x: 0,
// // //       transition: { duration: 0.8, ease: 'easeOut' },
// // //     },
// // //   };

// // //   const rightVariants = {
// // //     hidden: { opacity: 0, x: 100 },
// // //     visible: {
// // //       opacity: 1,
// // //       x: 0,
// // //       transition: { duration: 0.8, ease: 'easeOut' },
// // //     },
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       {/* Element Coming From Left */}
// // //       <motion.div
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% visible
// // //         variants={leftVariants}
// // //         style={styles.boxLeft}
// // //       >
// // //         Coming from Left
// // //       </motion.div>

// // //       {/* Element Coming From Right */}
// // //       <motion.div
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% visible
// // //         variants={rightVariants}
// // //         style={styles.boxRight}
// // //       >
// // //         Coming from Right
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // export default ScrollAnimationLeftRight;

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';

// // const ScrollAnimation = () => {
// //   const [ref1, inView1] = useInView({ threshold: 0.5 });
// //   const [ref2, inView2] = useInView({ threshold: 0.5 });

// //   return (
// //     <div style={styles.container}>
// //       {/* Element coming from the left */}
// //       <motion.div
// //         ref={ref1}
// //         initial={{ x: '-100vw', opacity: 0 }} // Start from the left side
// //         animate={{
// //           x: inView1 ? 0 : '-100vw', // Animate to original position if in view
// //           opacity: inView1 ? 1 : 0,
// //         }}
// //         transition={{ duration: 1, ease: 'easeOut' }}
// //         style={styles.box}
// //       >
// //         From Left
// //       </motion.div>

// //       {/* Element zooming in */}
// //       <motion.div
// //         ref={ref2}
// //         initial={{ scale: 0, opacity: 0 }} // Start as smaller element
// //         animate={{
// //           scale: inView2 ? 1 : 0, // Zoom in when in view
// //           opacity: inView2 ? 1 : 0,
// //         }}
// //         transition={{ duration: 1, ease: 'easeOut' }}
// //         style={styles.box}
// //       >
// //         Zoom In
// //       </motion.div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     height: '200vh', // Make the container scrollable
// //     padding: '50px',
// //   },
// //   box: {
// //     height: '100px',
// //     width: '100%',
// //     marginBottom: '50px',
// //     backgroundColor: '#f4f4f4',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     fontSize: '1.5rem',
// //   },
// // };

// // export default ScrollAnimation;

// {
//   /* <AnimatePresence>
//             <motion.div
//               key={currentSlide} 
//               className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
//               style={{
//                 backgroundImage: `url(${slides[currentSlide]})`,
//               }}
//               initial={{ opacity: 0.3, x: 100 }} 
//               animate={{ opacity: 0.8, x: 0 }} 
//               exit={{ opacity: 0, x: -100 }} 
//               transition={{
//                 duration: 1, 
//                 ease: "easeInOut", 
//               }}
           
//             />
//           </AnimatePresence> */
// }
// {
//   /* <AnimatePresence>
//         <motion.div
//           key={currentSlide} // Key to trigger animation when currentSlide changes
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${slides[currentSlide]})`,
//           }}
//           initial={{ opacity: 0, x: '100%' }} // Start from the right
//           animate={{ opacity: 1, x: 0 }} // Slide in to the center with full opacity
//           exit={{ opacity: 0, x: '-100%' }} // Slide out to the left
//           transition={{
//             duration: 1, // Transition duration
//             ease: 'easeInOut', // Easing for smooth transition
//           }}
//         />
//       </AnimatePresence> */
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const ScrollPopup = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   // Use the intersection observer hook to detect when a section is in view
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Triggers only once when in view
//     threshold: 0.5, // Trigger when 50% of the section is in view
//   });

//   // Show modal when the section is in view
//   React.useEffect(() => {
//     if (inView) {
//       setModalVisible(true); // Show modal when in view
//     }
//   }, [inView]);

//   const closeModal = () => setModalVisible(false);

//   return (
//     <div>
//       {/* Trigger section for modal */}
//       <div ref={ref}>Scroll to this section to trigger modal</div>

//       {/* Pop-up Modal */}
//       {modalVisible && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.div
//             initial={{ y: "-50vh" }}
//             animate={{ y: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             <h2>Welcome to the Modal!</h2>
//             <p>This pop-up appears when you scroll to the specific section.</p>
//             <button onClick={closeModal}>Close</button>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ScrollPopup;



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
    },
    {
      title: "EMPOWERING SALES LEADERS WITH THE TOOLS FOR SUCCESS AND GROWTH",
      description:
        "We provide the best training, coaching, and solutions to ensure that sales leaders and teams can overcome challenges and thrive in a competitive market, we help sales leaders and CEOs connect, close deals, and achieve exceptional results.",
      buttonText1: "Start Your Journey",
      buttonText2: "Contact Us More",
    },
    {
      title: "OPTIMIZING SALES PROCESSES FOR MAXIMUM BETTER PERFORMANCE.",
      description:
        "Our services help streamline sales operations, boosting efficiency and enabling sales teams to close more deals with less effort. Transform your approach to sales today. we help sales leaders and CEOs connect, close deals, and achieve exceptional results.",
      buttonText1: "Get in Touch",
      buttonText2: "See How We Can Help",
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
    }, 50);

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
              <motion.div
                className="lg:w-1/2 text-center lg:text-left h-[500px] transition-opacity duration-1000 ease-in-out  flex flex-col justify-center px-4 sm:px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={leftVariants}
              >
                <motion.h1
                  className="text-2xl  sm:text-3xl  lg:text-[36px] lg:leading-[48px]  font-bold mb-4 mt-12"
                  variants={textVariants}
                >
                  {slideContent[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="text-base sm:text-[16px] lg:leading-[34px] bold-text1  lg:text-[18px] mb-6 mx-auto lg:mx-0"
                  variants={textVariants}
                >
                  {slideContent[currentSlide].description}
                </motion.p>

                <div className="flex flex-col  lg:flex-row justify-between lg:justify-between items-center gap-4 lg:items-start  mb-6">
                  <button
                    type="button"
                    className="text-white  transition-transform duration-500 ease-out transform  uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:scale-110 hover:bg-gradient-to-bl focus:outline-none  text-sm md:text-[14px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] px-5 py-2.5 w-full md:px-2 md:py-2  lg:px-3 lg:py-3  xl:px-6 xl:py-3  md:w-[250px] lg:w-auto xl:w-auto flex items-center justify-center"
                  >
                    {slideContent[currentSlide].buttonText1}
                    <img
                      src={RightArrow1}
                      alt="Logo"
                      className="w-6 h-6 ml-2"
                    />
                  </button>
                  <button
                    type="button"
                    className="text-white transition-transform duration-500 ease-out transform  uppercase w-full hover:scale-110 justify-center xs:text-[12px] md:w-[250px] lg:w-auto xl:w-auto flex sm:justify-center md:justify-around xl:justify-around lg:justify-around items-center space-x-2 border-btn border-white  md:text-[12px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] sm:text-sm px-3 py-2 md:px-6 md:py-2 xl:px-6 xl:py-2 2xl:py-2.5 lg:px-6 lg:py-2.5 sm:px-4 sm:py-2"
                  >
                    {slideContent[currentSlide].buttonText2}
                    <img
                      src={RightArrow}
                      alt="arrow"
                      className="w-6 h-6 ml-2"
                    />
                  </button>
                </div>
              </motion.div>

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
                    className="w-12 h-12 transition-transform hover:scale-110 "
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
                    className="w-12 h-12 transition-transform hover:scale-110"
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
                  backgroundColor: "#FA6602",
                  opacity: 0.5,
                  zIndex: 0,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
