import React, { useState } from "react";
import HeroServiceDetails from "../service-details-section/HeroServiceDetails";
import ServiceDetailSection from "../service-details-section/ServiceDetailSection";
import ServiceDetailSideBar from "../service-details-section/ServiceDetailSideBar";

function ServiceDetails() {
  const [filters, setFilters] = useState({
    location: "both",
    audience: "both",
    topics: {
      sellingSkills: false,
      frontlineRetail: false,
      salesManagement: false,
      territoryPlanning: false,
      retailPlanning: false,
      communicationSkills: false,
    },
    searchTerm: "",
  });

  return (
    <div>
      <HeroServiceDetails />

      <div className="container mx-auto px-4 py-12 ">
        <div className="flex flex-col md:flex-row py-12 gap-10">
          <ServiceDetailSection filters={filters} />
          <ServiceDetailSideBar setFilters={setFilters} filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
