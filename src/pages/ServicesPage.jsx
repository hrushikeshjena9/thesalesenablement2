// src/App.js
import React, { useState } from "react";
import HeroServices from "../service-section/HeroServices";
import ServiceContent from "../service-section/ServicesContent";
import WhyChooseUs from "../service-section/WhyChooseUs";
import ScheduleConsultation from "../service-section/ScheduleConsultation";

function ServicesPage() {
  return (
    <div>
      <HeroServices />

      <div className="container mx-auto px-4 py-12  ">
        <h1 className="text-4xl font-bold uppercase leading-[48px] mb-5">
          All{" "}
          <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            the Services You
          </span>
          <br /> Need in One Place
        </h1>
        <hr className="py-5" />
        <p>
          From comprehensive sales strategies to tailored training programs, our
          services are designed to elevate your business at every level. Whether
          you're optimizing your sales force, streamlining your recruitment
          process, or enhancing your CRM system, we provide the solutions you
          need to succeed.
        </p>

        <div className="flex flex-col md:flex-row py-12 gap-10">
          <ServiceContent />
        </div>
      </div>

      <div className="py-12">
        <div className="consultation-bg ">
          <div className="bg-layer">
            <ScheduleConsultation />
          </div>
        </div>
      </div>

      <div>
        <WhyChooseUs className="mt-10" />
      </div>
    </div>
  );
}

export default ServicesPage;
