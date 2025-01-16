import React from "react";
import { FaArrowRight, FaBullhorn, FaChartLine, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Blog4 from "../assets/blog-4.png";
import Blog2 from "../assets/blog1.png";
import Blog3 from "../assets/blog2.png";
import Blog1 from "../assets/blog3.png";
import SalesForceEvaluation from "../assets/iconsalesevolation.png";

const services = [
  {
    title: "Sales Force Evaluation",
    description:
      "Focused on analyzing salespeople, systems, and strategies to address key performance gaps.",
    image: Blog4,
    icon: SalesForceEvaluation, // Add the icon here
  },

  {
    title: "Recruiting Process Optimization",
    description:
      "Streamlining recruitment to attract and retain top-tier sales talent.",
      image: Blog2,
      icon: SalesForceEvaluation, // Add the icon here
  
  },
  {
    title: "Sales Candidate Assessments",
    description: "Leveraging advanced tools to identify high-potential hires.",
    image: Blog3,
    icon: SalesForceEvaluation, // Add the icon here

  },
  {
    title: "CRM Selection, Installation, and Integration",
    description:
      "Helping businesses choose and implement the right CRM system.",
      image: Blog1,
      icon: SalesForceEvaluation, // Add the icon here
  
  },
  {
    title: "Sales Process Optimization",
    description:
      "Designing structured, customized processes for better outcomes.",
      image: Blog4,
      icon: SalesForceEvaluation, // Add the icon here
  
  },
  {
    title: "Metrics Development",
    description: "Identifying KPIs and predictive indicators to drive revenue.",
    image: Blog3,
    icon: SalesForceEvaluation, // Add the icon here

  },
  {
    title: "Pipeline Management",
    description:
      "Building formal, staged, and criteria-based pipeline systems.",
      image: Blog1,
      icon: SalesForceEvaluation, // Add the icon here
  
  },
  {
    title: "Sales Management Development",
    description:
      "Training managers in coaching, motivation, and accountability.",
      image: Blog2,
      icon: SalesForceEvaluation, // Add the icon here
  
  },
  {
    title: "Trade Show Selling",
    description:
      "Turning event participation into measurable sales opportunities.",
      image: Blog4,
      icon: SalesForceEvaluation, // Add the icon here
  
  },
  {
    title: "Consulting & Strategy",
    description: "Offering market, account, and business strategy support.",
    image: Blog1,
    icon: SalesForceEvaluation, // Add the icon here

  },
  {
    title: "Coaching",
    description: "Executive and sales coaching to improve outcomes.",
    image: Blog2,
    icon: SalesForceEvaluation, // Add the icon here

  },
  {
    title: "Sales Training & Professional Services Training",
    description: "Results-focused training programs.",
    image: Blog4,
    icon: SalesForceEvaluation, // Add the icon here

  },
];

const ServiceContent = () => {
  return (
    <>
      <section className=" py-10">
        <div className=" container">
          <h2 className="text-xl uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text font-bold   mb-6">
            Consulting & Services
          </h2>
          <div className="">
            {" "}
            <h1 className="text-3xl font-bold uppercase leading-[48px] mb-5">
              Professional Sales Enablement {""} <br />
              <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                Services Can Drive Success
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/service/${index}`} // Use the index to route to the details page
                state={service} // Pass the service data as state
                className="block"
              >
                <div
                  className="border-2 flex flex-col"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #DB0032, #FA6602) 1",
                    height: "100%", // Ensure cards stretch equally in height
                  }}
                >
                  <div className="relative flex-1">
                    {/* Image Section */}
                    <img
                      src={service.image} // Assuming each service has an image
                      alt={service.title}
                      className="w-full h-[233px] p-2 object-cover mb-4"
                    />
                    {/* Circle Image with Icon */}
                    <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-r from-[#DB0032] to-[#FA6602] rounded-full flex items-center justify-center shadow-md">
                      <img
                        src={service.icon} // Assuming each service has an icon URL
                        alt="Icon"
                        className="w-10 h-10 object-contain transition-transform duration-300 ease-in-out transform hover:rotate-y-180"
                      />
                    </div>

                  </div>

                  <h3 className="text-lg sm:text-sm md:text-[17px] uppercase font-semibold mb-2 p-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-left mb-4 text-sm px-6 text-center sm:text-base">
                    {service.description}
                    <hr className="mt-4" />
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to={`/service/${index}`}
                      state={service} // Pass the service data as state
                      className="relative w-[86%] icon-hover mb-4 px-6 py-3 flex items-center justify-center font-medium text-sm text-[#DB0032] border-2 border-transparent rounded-md transition-all duration-500 ease-out hover:text-white hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
                      style={{
                        borderImage:
                          "linear-gradient(to right, #DB0032, #FA6602) 1",
                      }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#DB0032] to-[#FA6602] opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                      <span className="relative z-10 flex items-center">
                        LEARN MORE
                        <FaArrowRight className="w-5 h-5 icon-hover2 ml-2 text-[#DB0032] transition-colors duration-500 ease-out hover:text-white" />
                      </span>
                    </Link>
                  </div>
                  {/* {blogData.link} */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceContent;

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Blog4 from "../assets/blog-4.png";
// import SalesForceEvaluation from "../assets/iconsalesevolation.png";

// // Define services data
// const services = [
//   {
//     title: "Sales Force Evaluation",
//     description:
//       "Focused on analyzing salespeople, systems, and strategies to address key performance gaps.",
//     image: Blog4,
//     icon: SalesForceEvaluation,
//   },
//   // Other service objects...
// ];

// const ServiceContent = () => {
//   return (
//     <section className="py-10">
//       <div className="container">
//         <h2 className="text-xl uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text font-bold mb-6">
//           Consulting & Services
//         </h2>
//         <h1 className="text-3xl font-bold uppercase leading-[48px] mb-5">
//           Professional Sales Enablement <br />
//           <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
//             Services Can Drive Success
//           </span>
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Link
//               key={index}
//               to={{
//                 pathname: `/service`,
//                 search: `?title=${encodeURIComponent(
//                   service.title
//                 )}&description=${encodeURIComponent(
//                   service.description
//                 )}&image=${encodeURIComponent(
//                   service.image
//                 )}&icon=${encodeURIComponent(service.icon)}`,
//               }}
//               className="block"
//               onClick={() => {
//                 // Log the search params being passed in the Link
//                 console.log(
//                   `Redirecting to /service with params: `,
//                   `title=${encodeURIComponent(service.title)}`,
//                   `description=${encodeURIComponent(service.description)}`,
//                   `image=${encodeURIComponent(service.image)}`,
//                   `icon=${encodeURIComponent(service.icon)}`
//                 );
//               }}
//             >
//               <div
//                 className="border-2 flex flex-col"
//                 style={{
//                   borderImage: "linear-gradient(to right, #DB0032, #FA6602) 1",
//                   height: "100%",
//                 }}
//               >
//                 <div className="relative flex-1">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-[233px] p-2 object-cover mb-4"
//                   />
//                   <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-r from-[#DB0032] to-[#FA6602] rounded-full flex items-center justify-center shadow-md">
//                     <img
//                       src={service.icon}
//                       alt="Icon"
//                       className="w-10 h-10 object-contain transition-transform duration-300 ease-in-out transform hover:rotate-y-180"
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-lg sm:text-sm md:text-[17px] uppercase font-semibold mb-2 p-4 text-center">
//                   {service.title}
//                 </h3>
//                 <p className="text-left mb-4 text-sm px-6 text-center sm:text-base">
//                   {service.description}
//                   <hr className="mt-4" />
//                 </p>
//                 <div className="flex justify-center">
//                   <Link
//                     to={{
//                       pathname: `/service`,
//                       search: `?title=${encodeURIComponent(
//                         service.title
//                       )}&description=${encodeURIComponent(
//                         service.description
//                       )}&image=${encodeURIComponent(
//                         service.image
//                       )}&icon=${encodeURIComponent(service.icon)}`,
//                     }}
//                     className="relative w-[86%] icon-hover mb-4 px-6 py-3 flex items-center justify-center font-medium text-sm text-[#DB0032] border-2 border-transparent rounded-md transition-all duration-500 ease-out hover:text-white hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
//                   >
//                     <span className="absolute inset-0 bg-gradient-to-r from-[#DB0032] to-[#FA6602] opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out"></span>
//                     <span className="relative z-10 flex items-center">
//                       LEARN MORE
//                       <FaArrowRight className="w-5 h-5 icon-hover2 ml-2 text-[#DB0032] transition-colors duration-500 ease-out hover:text-white" />
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceContent;
