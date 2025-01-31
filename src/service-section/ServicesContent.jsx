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
    icon: SalesForceEvaluation,
  },

  {
    title: "Recruiting Process Optimization",
    description:
      "Streamlining recruitment to attract and retain top-tier sales talent.",
    image: Blog2,
    icon: SalesForceEvaluation,
  },
  {
    title: "Sales Candidate Assessments",
    description: "Leveraging advanced tools to identify high-potential hires.",
    image: Blog3,
    icon: SalesForceEvaluation,
  },
  {
    title: "CRM Selection, Installation, and Integration",
    description:
      "Helping businesses choose and implement the right CRM system.",
    image: Blog1,
    icon: SalesForceEvaluation,
  },
  {
    title: "Sales Process Optimization",
    description:
      "Designing structured, customized processes for better outcomes.",
    image: Blog4,
    icon: SalesForceEvaluation,
  },
  {
    title: "Metrics Development",
    description: "Identifying KPIs and predictive indicators to drive revenue.",
    image: Blog3,
    icon: SalesForceEvaluation,
  },
  {
    title: "Pipeline Management",
    description:
      "Building formal, staged, and criteria-based pipeline systems.",
    image: Blog1,
    icon: SalesForceEvaluation,
  },
  {
    title: "Sales Management Development",
    description:
      "Training managers in coaching, motivation, and accountability.",
    image: Blog2,
    icon: SalesForceEvaluation,
  },
  {
    title: "Trade Show Selling",
    description:
      "Turning event participation into measurable sales opportunities.",
    image: Blog4,
    icon: SalesForceEvaluation,
  },
  {
    title: "Consulting & Strategy",
    description: "Offering market, account, and business strategy support.",
    image: Blog1,
    icon: SalesForceEvaluation,
  },
  {
    title: "Coaching",
    description: "Executive and sales coaching to improve outcomes.",
    image: Blog2,
    icon: SalesForceEvaluation,
  },
  {
    title: "Sales Training & Professional Services Training",
    description: "Results-focused training programs.",
    image: Blog4,
    icon: SalesForceEvaluation,
  },
];

const ServiceContent = () => {
  return (
    <>
      <section className=" py-10">
        <div className=" container">
          <h2 className="text-sm sm:text-base lg:text-lg uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text font-bold mb-2 sm:mb-4 lg:mb-6">
            Consulting & Services
          </h2>

          <div>
            <h1 className="text-sm sm:text-2xl lg:text-3xl font-bold uppercase lg:leading-[48px] mb-5">
              Professional Sales Enablement <br />
              <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                Services Can Drive Success
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/service/${index}`}
                state={service}
                className="block"
              >
                <div
                  className="border-2 flex flex-col h-full"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #DB0032, #FA6602) 1",
                  }}
                >
                  <div className="relative flex-1">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[233px] p-2 object-cover mb-4 transition-all duration-500 ease-in-out hover:grayscale-0 hover:opacity-90"
                    />

                    <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-r from-[#DB0032] to-[#FA6602] rounded-full flex items-center justify-center shadow-md">
                      <img
                        src={service.icon}
                        alt="Icon"
                        className="w-10 h-10 object-contain transition-transform duration-300 ease-in-out transform hover:rotate-y-180"
                      />
                    </div>
                  </div>

                  <h3 className="text-sm  lg:text-lg uppercase font-semibold mb-2 p-4 text-center">
                    {service.title}
                  </h3>

                  <p className="mb-4 text-sm sm:text-sm md:text-base font-light sm:font-normal  px-6 text-center flex-1">
                    {service.description}
                    <hr className="mt-4" />
                  </p>

                  <div className="flex justify-center">
                    <Link
                      to={`/service/${index}`}
                      state={service}
                      className="relative w-[86%] icon-hover mb-4 px-6 py-3 flex items-center justify-center font-medium text-xs sm:text-sm  text-[#DB0032] border-2 border-transparent rounded-md transition-all duration-500 ease-out hover:text-white hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]"
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
