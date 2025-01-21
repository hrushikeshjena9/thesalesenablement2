import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroServices from "../service-section/HeroServices";
import { useLocation } from "react-router-dom";
import FAQ from "../contactus-sections/Faq";

const ServiceDetailSection = () => {
  const location = useLocation();
  const service = location.state;
  if (!service) return <div>Service Not Found</div>;

  const pricingPackages = [
    {
      id: 1,
      name: "Basic Package",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      price: "$49/month",
    },
    {
      id: 2,
      name: "Standard Package",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      price: "$99/month",
    },
    {
      id: 3,
      name: "Premium Package",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      price: "$149/month",
    },
  ];

  const hoverAnimation =
    "transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg";

  return (
    <>
      <HeroServices />
      {/* <FAQ /> */}
      <section className="w-3/4 mx-auto py-6 px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">{service.title}</h1>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="mb-12 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Pricing
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((packageItem) => (
              <div
                key={packageItem.id}
                className={`bg-white rounded-lg shadow-md p-6 text-center ${hoverAnimation}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {packageItem.name}
                </h3>
                <ul className="mb-4 text-gray-700">
                  {packageItem.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-bold text-gray-900 mb-4">
                  {packageItem.price}
                </p>
                <Link
                  to="/pricing"
                  className="text-white group inline-flex justify-center items-center transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-8 py-3 relative overflow-hidden rounded-lg"
                >
                  <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  <span className="relative text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                    Select Plan
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <div className="flex items-center justify-center my-8">
            {/* <div className="h-[1px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] flex-1"></div> */}
            <h2 className="text-3xl font-bold text-gray-900 text-center mx-4 whitespace-nowrap">
              Related Services
            </h2>
            {/* <div className="h-[1px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] flex-1"></div> */}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`bg-white rounded-lg shadow-md p-6 text-center ${hoverAnimation}`}
            >
              <h3 className="text-lg font-bold text-gray-900">Service A</h3>
              <p className="text-gray-700 mt-2">
                Brief description of Service A.
              </p>
              <Link
                to="/services/a"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
            <div
              className={`bg-white rounded-lg shadow-md p-6 text-center ${hoverAnimation}`}
            >
              <h3 className="text-lg font-bold text-gray-900">Service B</h3>
              <p className="text-gray-700 mt-2">
                Brief description of Service B.
              </p>
              <Link
                to="/services/b"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
            <div
              className={`bg-white rounded-lg shadow-md p-6 text-center ${hoverAnimation}`}
            >
              <h3 className="text-lg font-bold text-gray-900">Service C</h3>
              <p className="text-gray-700 mt-2">
                Brief description of Service C.
              </p>
              <Link
                to="/services/a"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
            <div
              className={`bg-white rounded-lg shadow-md p-6 text-center ${hoverAnimation}`}
            >
              <h3 className="text-lg font-bold text-gray-900">Service D</h3>
              <p className="text-gray-700 mt-2">
                Brief description of Service D.
              </p>
              <Link
                to="/services/a"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact-us"
            className="text-white group inline-flex justify-center items-center transition-transform duration-500 ease-out transform uppercase text-[12px] bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-8 py-3 relative overflow-hidden rounded-lg"
          >
            <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative flex items-center text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
              Contact Us
              <FaArrowRight className="ml-2 transition-colors duration-300 ease-in-out group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#DB0032] to-[#FA6602]" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailSection;
