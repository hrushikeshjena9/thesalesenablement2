import React from "react";
import { useLocation } from "react-router-dom";  // Import useLocation to access passed state

const ServiceDetails = () => {
  const location = useLocation();  // Use useLocation to get the location object
  const service = location.state;  // Access the service data passed via state

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {service.title}
        </h2>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ServiceDetails;

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const ServiceDetail = () => {
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);
//   const title = queryParams.get('title');
//   const description = queryParams.get('description');
//   const image = queryParams.get('image');
//   const icon = queryParams.get('icon');

//   useEffect(() => {
//     console.log(location.search); // Check if the query params are being passed correctly
//   }, [location]);

//   return (
//     <section className="service-detail py-10">
//       <div className="container">
//         <h1 className="text-3xl font-bold uppercase">{title}</h1>
//         <p className="text-lg mt-4">{description}</p>
//         <div className="image mt-6">
//           <img src={image} alt={title} className="w-full" />
//         </div>
//         <div className="icon mt-6">
//           <img src={icon} alt="Service Icon" className="w-20 h-20" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceDetail;
