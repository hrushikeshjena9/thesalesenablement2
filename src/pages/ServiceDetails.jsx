import React, { useEffect, useState } from "react";
import HeroServiceDetails from "../service-details-section/HeroServiceDetails";
import ServiceDetailSection from "../service-details-section/ServiceDetailSection";
import ServiceDetailSideBar from "../service-details-section/ServiceDetailSideBar";
import axios from "../api/axios"
import { useParams } from "react-router-dom";
function ServiceDetails() {

  const { slug } = useParams();
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/services-details/${slug}`);
        console.log("API Response:", res.data);
        if (res.data && res.data.data) {
          setData(res.data.data);
        } else {
          setError("Service not found");
        }
      } catch (error) {
        setError("Failed to fetch data");
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [slug]);
  
  return (
    <div>
      <HeroServiceDetails serviceDetails={data} />

      <div className="container mx-auto px-4 py-12 ">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10">
          <ServiceDetailSection serviceDetails={data} />
          <ServiceDetailSideBar />
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
