// import React from "react";
// import { useLocation } from "react-router-dom";  // Import useLocation to access passed state

// const ServiceDetails = () => {
//   const location = useLocation();  // Use useLocation to get the location object
//   const service = location.state;  // Access the service data passed via state

//   if (!service) {
//     return <div>Service not found</div>;
//   }

//   return (
//     <section className="bg-gray-100 py-10">
//       <div className="container mx-auto px-6 lg:px-20">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           {service.title}
//         </h2>
//         <p className="text-gray-600 mb-6">{service.description}</p>
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
//           Contact Us
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ServiceDetails;

import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroServices from "../service-section/HeroServices";
import { useLocation } from "react-router-dom";

const ServiceDetailSection = () => {
  const location = useLocation();  
  const service = location.state; 
  if (!service) return <div>Service Not found</div>;

  return (
    <> 
    <HeroServices/>
       <section className="w-3/4 mx-auto py-6 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          {service.title}
        </h1>
        <p className="text-gray-700 mt-4">{service.description}</p>
      
      </div>

 

      {/* Pricing Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
        <p className="text-gray-700 mt-2">{service.pricing}</p>
        <Link
          to="/pricing"
          className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white font-semibold rounded-lg shadow-lg"
        >
          View Packages
        </Link>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Testimonials
        </h2>
        {service.testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-sm mb-6"
          >
            <p className="italic text-gray-700">
              "{testimonial.feedback}"
            </p>
            <p className="mt-2 font-semibold">{testimonial.customer}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          FAQs
        </h2>
        {service.faq.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-12">
        <Link
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white font-semibold rounded-lg shadow-lg"
        >
          Contact Us <FaArrowRight className="ml-2 inline-block" />
        </Link>
      </div>
    </section>
    
    
    </>

  );
};

export default ServiceDetailSection;

