// // import React from "react";
// // import CaseRightArrow from "../assets/caser-arrow-right.png";
// // import { motion } from "framer-motion";
// // import { useState, useEffect, useRef } from "react";
// // function CaseStudies() {
// //   const [inView, setInView] = useState(false);
// //   const elementRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting && !inView) {
// //           setInView(true); // Set to true only once when in view
// //         }
// //       },
// //       {
// //         threshold: 0.2, // Trigger when 50% of the element is in the viewport
// //         once: true, // Ensures the animation only triggers once
// //       }
// //     );

// //     // Ensure the element is available before observing
// //     if (elementRef.current) {
// //       observer.observe(elementRef.current);
// //     }

// //     return () => {
// //       if (elementRef.current) {
// //         observer.disconnect();
// //       }
// //     };
// //   }, [inView]);
// //   return (
// //     <section className=" case-study py-12 container mx-auto px-4">
// //       <div className=" text-center md:text-left mb-auto">
// //         <div className="w-full mb-8">
// //           <h5 className="text-[16px] sm:text-[24px] md:text-[24px]  font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
// //             Our Case Studies
// //           </h5>

// //           <h2 className="text-[18px] md:text-[36px] sm:text-[28px] font-bold  mt-2 mb-2 sm:mt-4 sm:mb-4 md:mt-7 md:mb-7 lg:mt-7 lg:mb-7 xl:mt-7 xl:mb-7 2xl:mt-7 2xl:mb-7    w-full  lg:w-full xl:w-[700px]">
// //             Driving Success with Proven <br />
// //             <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
// //               Strategies
// //             </span>
// //           </h2>
// //           <p className="text-sm sm:text-lg  md:w-full lg:w-full xl:w-[70%] md:leading-[32px] leading-[24px] mt-5 sm:mt-8 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12 px-4 md:px-0 text-justify">
// //             We take pride in delivering measurable results for our clients. Our
// //             case studies highlight how our tailored solutions have helped sales
// //             teams achieve exceptional performance. Explore these success stories
// //             to see how we drive real change for organizations like yours.
// //           </p>
// //         </div>

// //         <motion.div
// //           ref={elementRef} // Assign the ref to the motion div
// //           className="grid grid-cols-1 bg-cont sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-0"
// //           initial={{ opacity: 0, y: 100 }} // Start from below the viewport (y: 100px)
// //           viewport={{ once: true, amount: 0.5 }}
// //           animate={{
// //             opacity: inView ? 1 : 0, // Fade in when in view
// //             y: inView ? 0 : 100, // Move to final position (y: 0) when in view
// //           }}
// //           transition={{
// //             duration: 1.5, // Transition duration
// //             ease: "easeInOut", // Smooth easing
// //           }}
// //         >
// //           <div className="group cursor-pointer case1 flex justify-center items-end w-full h-[350px]">
// //             <div className="bg-white w-full sm:w-[426.59px] h-[140px] p-4 transition-all transform group-hover:scale-105 group-hover:h-[220px] duration-300 ease-in-out">
// //               <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
// //                 Case Study
// //               </h3>
// //               <p className="text-gray-800 uppercase font-bold mt-2 text-sm sm:text-base">
// //                 Accelerating Growth for Innovate Company- Startup
// //               </p>
// //               <div className="flex items-end justify-end">
// //                 <img
// //                   src={CaseRightArrow}
// //                   alt="Case Right Arrow"
// //                   className="mt-2 w-[24px] h-[24px]"
// //                 />
// //               </div>
// //               <p className="absolute opacity-0 group-hover:opacity-100 text-gray-600 mt-2 transition-opacity duration-300 ease-in-out text-sm sm:text-base bottom-[20px] left-[20px] right-[20px]">
// //                 This case study highlights how we helped Innovate Company
// //                 achieve remarkable growth in a competitive market.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Case Study 2 */}
// //           <div className="group cursor-pointer case2 flex justify-center items-end w-full h-[350px]">
// //             <div className="bg-white w-full sm:w-[426.59px] h-[140px] p-4 transition-all transform group-hover:scale-105 group-hover:h-[220px] duration-300 ease-in-out">
// //               <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
// //                 Case Study
// //               </h3>
// //               <p className="text-gray-800 uppercase font-bold mt-2 text-sm sm:text-base">
// //                 Boosting Sales Leadership at GlobalTech Pvt Ltd
// //               </p>
// //               <div className="flex items-end justify-end">
// //                 <img
// //                   src={CaseRightArrow}
// //                   alt="Case Right Arrow"
// //                   className="mt-2 w-[24px] h-[24px]"
// //                 />
// //               </div>
// //               <p className="absolute opacity-0 group-hover:opacity-100 text-gray-600 mt-2 transition-opacity duration-300 ease-in-out text-sm sm:text-base bottom-[20px] left-[20px] right-[20px]">
// //                 Learn how we boosted sales leadership at GlobalTech through our
// //                 tailored strategies.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Case Study 3 */}
// //           <div className="group cursor-pointer case3 flex justify-center items-end w-full h-[350px]">
// //             <div className="bg-white w-full sm:w-[426.59px] h-[140px] p-4 transition-all transform group-hover:scale-105 group-hover:h-[220px] duration-300 ease-in-out">
// //               <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
// //                 Case Study
// //               </h3>
// //               <p className="text-gray-800 uppercase font-bold mt-2 text-sm sm:text-base">
// //                 Accelerating Growth for Innovate Company- Startup
// //               </p>
// //               <div className="flex items-end justify-end">
// //                 <img
// //                   src={CaseRightArrow}
// //                   alt="Case Right Arrow"
// //                   className="mt-2 w-[24px] h-[24px]"
// //                 />
// //               </div>
// //               <p className="absolute opacity-0 group-hover:opacity-100 text-gray-600 mt-2 transition-opacity duration-300 ease-in-out text-sm sm:text-base bottom-[20px] left-[20px] right-[20px]">
// //                 Explore how our expertise drove rapid growth for a startup
// //                 navigating new challenges.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Case Study 4 */}
// //           <div className="group cursor-pointer case4 flex justify-center items-end w-full h-[350px]">
// //             <div className="bg-white w-full sm:w-[426.59px] h-[140px] p-4 transition-all transform group-hover:scale-105 group-hover:h-[220px] duration-300 ease-in-out">
// //               <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
// //                 Case Study
// //               </h3>
// //               <p className="text-gray-800 uppercase font-bold mt-2 text-sm sm:text-base">
// //                 Redefining Sales Effectiveness for Skyline Enterprises
// //               </p>
// //               <div className="flex items-end justify-end">
// //                 <img
// //                   src={CaseRightArrow}
// //                   alt="Case Right Arrow"
// //                   className="mt-2 w-[24px] h-[24px]"
// //                 />
// //               </div>
// //               <p className="absolute opacity-0 group-hover:opacity-100 text-gray-600 mt-2 transition-opacity duration-300 ease-in-out text-sm sm:text-base bottom-[20px] left-[20px] right-[20px]">
// //                 See how we helped Skyline Enterprises redefine their sales
// //                 effectiveness with a customized approach.
// //               </p>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default CaseStudies;

// import React from "react";
// import CaseRightArrow from "../assets/caser-arrow-right.png";
// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";

// const caseStudiesData = [
//   {
//     id: 1,
//     title: "Case Study",
//     subtitle: "Accelerating Growth for Innovate Company- Startup",
//     description:
//       "This case study highlights how we helped Innovate Company achieve remarkable growth in a competitive market.",
//     className: "case1",
//   },
//   {
//     id: 2,
//     title: "Case Study",
//     subtitle: "Boosting Sales Leadership at GlobalTech Pvt Ltd",
//     description:
//       "Learn how we boosted sales leadership at GlobalTech through our tailored strategies.",
//     className: "case2",
//   },
//   {
//     id: 3,
//     title: "Case Study",
//     subtitle: "Accelerating Growth for Innovate Company- Startup",
//     description:
//       "Explore how our expertise drove rapid growth for a startup navigating new challenges.",
//     className: "case3",
//   },
//   {
//     id: 4,
//     title: "Case Study",
//     subtitle: "Redefining Sales Effectiveness for Skyline Enterprises",
//     description:
//       "See how we helped Skyline Enterprises redefine their sales effectiveness with a customized approach.",
//     className: "case4",
//   },
// ];

// function CaseStudies() {
//   const [inView, setInView] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !inView) {
//           setInView(true);
//         }
//       },
//       {
//         threshold: 0.2,
//       }
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.disconnect();
//       }
//     };
//   }, [inView]);

//   return (
//     <section className="case-study py-12 container mx-auto px-4">
//       <div className="text-center md:text-left mb-auto">
//         <div className="w-full mb-8">
//           <h5 className="text-[16px] sm:text-[24px] md:text-[24px] font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
//             Our Case Studies
//           </h5>

//           <h2 className="text-[18px] md:text-[36px] sm:text-[28px] font-bold mt-2 mb-2 sm:mt-4 sm:mb-4 md:mt-7 md:mb-7 lg:mt-7 lg:mb-7 xl:mt-7 xl:mb-7 2xl:mt-7 2xl:mb-7 w-full lg:w-full xl:w-[700px]">
//             Driving Success with Proven <br />
//             <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
//               Strategies
//             </span>
//           </h2>
//           <p className="text-sm sm:text-lg md:w-full lg:w-full xl:w-[70%] md:leading-[32px] leading-[24px] mt-5 sm:mt-8 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12 px-4 md:px-0 text-justify">
//             We take pride in delivering measurable results for our clients. Our
//             case studies highlight how our tailored solutions have helped sales
//             teams achieve exceptional performance. Explore these success stories
//             to see how we drive real change for organizations like yours.
//           </p>
//         </div>

//         <motion.div
//           ref={elementRef}
//           className="grid grid-cols-1 bg-cont sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-0"
//           initial={{ opacity: 0, y: 100 }}
//           viewport={{ once: true, amount: 0.5 }}
//           animate={{
//             opacity: inView ? 1 : 0,
//             y: inView ? 0 : 100,
//           }}
//           transition={{
//             duration: 1.5,
//             ease: "easeInOut",
//           }}
//         >
//           {caseStudiesData.map((caseStudy) => (
//             <div
//               key={caseStudy.id}
//               className={`group cursor-pointer ${caseStudy.className} flex justify-center items-end w-full h-[350px]`}
//             >
//               <div className="bg-white w-full sm:w-[426.59px] h-[140px] p-4 transition-all transform group-hover:scale-105 group-hover:h-[220px] duration-300 ease-in-out">
//                 <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
//                   {caseStudy.title}
//                 </h3>
//                 <p className="text-gray-800 uppercase font-bold mt-2 text-sm sm:text-base">
//                   {caseStudy.subtitle}
//                 </p>
//                 <div className="flex items-end justify-end">
//                   <img
//                     src={CaseRightArrow}
//                     alt="Case Right Arrow"
//                     className="mt-2 w-[24px] h-[24px]"
//                   />
//                 </div>
//                 <p className="absolute opacity-0 group-hover:opacity-100 text-gray-600 mt-2 transition-opacity duration-300 ease-in-out text-sm sm:text-base bottom-[20px] left-[20px] right-[20px]">
//                   {caseStudy.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default CaseStudies;

import React from "react";
import CaseRightArrow from "../assets/caser-arrow-right.png";
import SampleLogo from "../assets/logo.png"; // Replace with your actual logo path
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const caseStudiesData = [
  {
    id: 1,
    title: "Case Study",
    subtitle: "Accelerating Growth for Innovate Company- Startup",
    description:
      "This case study highlights how we helped Innovate Company achieve remarkable growth in a competitive market.",
    className: "case1",
    logo: SampleLogo, // Add the logo path here
  },
  {
    id: 2,
    title: "Case Study",
    subtitle: "Boosting Sales Leadership at GlobalTech Pvt Ltd",
    description:
      "Learn how we boosted sales leadership at GlobalTech through our tailored strategies.",
    className: "case2",
    logo: SampleLogo,
  },
  {
    id: 3,
    title: "Case Study",
    subtitle: "Accelerating Growth for Innovate Company- Startup",
    description:
      "Explore how our expertise drove rapid growth for a startup navigating new challenges.",
    className: "case3",
    logo: SampleLogo,
  },
  {
    id: 4,
    title: "Case Study",
    subtitle: "Redefining Sales Effectiveness for Skyline Enterprises",
    description:
      "See how we helped Skyline Enterprises redefine their sales effectiveness with a customized approach.",
    className: "case4",
    logo: SampleLogo,
  },
];

function CaseStudies() {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [inView]);

  return (
    <section className="case-study py-12 container mx-auto px-4">
      <div className="text-center md:text-left mb-auto">
        <div className="w-full mb-8">
          <h5 className="text-[16px] sm:text-[24px] md:text-[24px] font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            Our Case Studies
          </h5>

          <h2 className="text-[18px] md:text-[36px] sm:text-[28px] font-bold mt-2 mb-2 sm:mt-4 sm:mb-4 md:mt-7 md:mb-7 lg:mt-7 lg:mb-7 xl:mt-7 xl:mb-7 2xl:mt-7 2xl:mb-7 w-full lg:w-full xl:w-[700px]">
            Driving Success with Proven <br />
            <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
              Strategies
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:w-full lg:w-full xl:w-[70%] md:leading-[32px] leading-[24px] mt-5 sm:mt-8 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12 px-4 md:px-0 text-justify">
            We take pride in delivering measurable results for our clients. Our
            case studies highlight how our tailored solutions have helped sales
            teams achieve exceptional performance. Explore these success stories
            to see how we drive real change for organizations like yours.
          </p>
        </div>

        <motion.div
          ref={elementRef}
          className="grid grid-cols-1 bg-cont sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-0"
          initial={{ opacity: 0, y: 100 }}
          viewport={{ once: true, amount: 0.5 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          {caseStudiesData.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className={`group cursor-pointer ${caseStudy.className} flex justify-center items-end w-full h-[350px]`}
            >
              <div className="bg-white w-full sm:w-[426.59px] h-[140px] p-4 transition-all transform group-hover:scale-105 group-hover:h-[220px] duration-300 ease-in-out">
                <div className="flex justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                    {caseStudy.title}
                  </h3>
                  <img
                    src={caseStudy.logo}
                    alt="Company Logo"
                    className="w-10 h-10"
                  />
                </div>
                <p className="text-gray-800 uppercase font-bold mt-2 text-sm sm:text-base">
                  {caseStudy.subtitle}
                </p>
                <div className="flex items-end justify-end">
                  <img
                    src={CaseRightArrow}
                    alt="Case Right Arrow"
                    className="mt-2 w-[24px] h-[24px]"
                  />
                </div>
                <p className="absolute opacity-0 group-hover:opacity-100 text-gray-600 mt-2 transition-opacity duration-300 ease-in-out text-sm sm:text-base bottom-[20px] left-[20px] right-[20px]">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudies;
