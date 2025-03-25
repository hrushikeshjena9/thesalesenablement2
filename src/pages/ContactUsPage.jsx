import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa"; // Import the chat icon
import HeroContact from "../contactus-sections/HeroContact";
import ContactContent from "../contactus-sections/ContactContent";
import Faq from "../contactus-sections/Faq";
import MapEmbed from "../contactus-sections/MapEmbed";
import axios from "../api/axios";
import { Helmet } from "react-helmet-async";
import { useApi3 } from "../context/WebsiteDataContext";
function ContactUsPage() {

      const { websiteData,  } = useApi3();
        if (!websiteData) return <p></p>
  const [data, setData] = useState({});
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/contact-us")
        setData(res.data.data);
      } catch (error) {
        setError("Failed to fetch data")
        console.log("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])
  const { contact_data, faq_data, location_data } = data || {}

  if (!contact_data) return <p></p>;

  return (
    <div>

            <Helmet>
            <title>{contact_data?.meta_title || " "} | {websiteData?.title || " "}</title>
              <meta name="description" content={contact_data.meta_description} />
              <meta name="keywords" content={contact_data.meta_keywords} />
            </Helmet>
      <HeroContact />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 items-center">
          <div>
            <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold uppercase sm:leading-[33px]  mb-3 lg:mb-5">
              Consulting support
              <br />
              <span className="bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                is just a call, email, or live chat away.
              </span>
            </h1>
          </div>

          <div className="flex justify-start sm:justify-end py-2 sm:py-0">
            <Link
              to="https://calendly.com/theenablement/30min?back=1"
              className="relative uppercase font-medium text-white transition-all duration-300 ease-in-out overflow-hidden group 
                bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none shadow-lg 
                flex items-center justify-center text-xs sm:text-[14px] xl:text-[16px] px-5 py-2.5"
            >
              <span
                className="absolute inset-0 w-0 h-full bg-[#060b33] transition-all duration-300 ease-in-out 
                  group-hover:w-full group-hover:bg-gradient-to-tr group-hover:from-[#060b33] group-hover:to-[#383f71]"
              ></span>

              <span className="relative flex items-center">
                <FaComments className="mr-2" />
                Let's Chat
              </span>
            </Link>
          </div>
        </div>

        <hr className="border-t-2 py-4 sm:py-3 lg:py-5" />
        <p className=" sm:text-left  sm:leading-6 leading-5 sm:font-normal text-justify text-sm md:text-base lg:text-lg ">
          Whether you prefer to speak directly with us, send an email, or engage
          in a real-time live chat, our team is always ready to assist. We're
          here to answer your questions and provide support through the
          communication channel that suits you best.
        </p>
      </div>

      <div className="py-2">
        <ContactContent contactData={data.contact_data} />
      </div>

      <div className="container mx-auto py-12">
        <Faq faqData={data.faq_data} />
      </div>
      <MapEmbed mapData={data.location_data}/>
    </div>
  );
}

export default ContactUsPage;



