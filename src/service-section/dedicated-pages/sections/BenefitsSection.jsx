// import React from "react";
// import { FaChartLine, FaBullseye, FaSearch, FaRocket } from "react-icons/fa";

// const BenefitsSection = () => {
//   const benefits = [
//     {
//       icon: <FaChartLine className="text-blue-500 text-4xl" />,
//       title: "Identify Performance Gaps",
//       description:
//         "Gain insights into individual and team performance metrics.",
//     },
//     {
//       icon: <FaBullseye className="text-green-500 text-4xl" />,
//       title: "Enhance Strategic Decision-Making",
//       description:
//         "Use actionable insights to align team goals with organizational objectives.",
//     },
//     {
//       icon: <FaSearch className="text-yellow-500 text-4xl" />,
//       title: "Improve Hiring Efficiency",
//       description:
//         "Assess candidate fit and competency for specific sales roles.",
//     },
//     {
//       icon: <FaRocket className="text-red-500 text-4xl" />,
//       title: "Boost Productivity",
//       description:
//         "Provide tailored feedback to improve sales techniques and results.",
//     },
//   ];

//   return (
//     <section className="py-16 px-6 banner">
//       {/* Title */}
//       <h2 className="text-3xl font-bold text-center mb-10 text-white relative z-10">
//         Why Use the Sales Force Evaluation Tool?
//       </h2>

//       {/* Benefits Grid */}
//       <div className="px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {benefits.map((benefit, index) => (
//           <div
//             key={index}
//             className="flex items-start bg-white shadow-lg rounded-lg p-6 icon-hover space-x-4 hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out relative z-10"
//           >
//             {/* Icon */}
//             <div className="p-3 bg-transparent rounded-full icon-hover3 hover:text-[#DB0032]">
//               {benefit.icon}
//             </div>
//             {/* Text */}
//             <div>
//               <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
//               <p className="">{benefit.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;

import React from "react";
import { FaChartLine, FaBullseye, FaSearch, FaRocket } from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaChartLine className="text-blue-500 text-4xl" />,
      title: "Identify Performance Gaps",
      description:
        "Gain insights into individual and team performance metrics.",
    },
    {
      icon: <FaBullseye className="text-green-500 text-4xl" />,
      title: "Enhance Strategic Decision-Making",
      description:
        "Use actionable insights to align team goals with organizational objectives.",
    },
    {
      icon: <FaSearch className="text-yellow-500 text-4xl" />,
      title: "Improve Hiring Efficiency",
      description:
        "Assess candidate fit and competency for specific sales roles.",
    },
    {
      icon: <FaRocket className="text-red-500 text-4xl" />,
      title: "Boost Productivity",
      description:
        "Provide tailored feedback to improve sales techniques and results.",
    },
  ];

  return (
    <section className="py-16 px-6 banner">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-white relative z-10">
        Why Use the Sales Force Evaluation Tool?
      </h2>

      {/* Benefits Grid */}
      <div className="px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 icon-hover space-y-4 hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out relative z-10"
          >
            {/* Icon */}
            <div className="p-4 bg-transparent rounded-full icon-hover3 text-[#DB0032]">
              {benefit.icon}
            </div>
            {/* Text */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
