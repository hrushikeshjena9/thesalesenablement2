import React, { useState } from "react";
import RightArrow from "../assets/arrow-right.png";
import ServiceArrow from "../assets/service-arrow.png";
import PlusImg from "../assets/plus.png";
import SliderBtnLeft from "../assets/slider-btn-left.png";
import SliderBtnRight from "../assets/slider-btn-right.png";
import SalesTrainingImg from "../assets/sales-traning.png";
import SalesPlaybookImg from "../assets/sales-playbook.png";
import CandidateAssessmentImg from "../assets/candidate-assesment.png";
import StartupSupportImg from "../assets/startup-support.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Services() {
  const [clickedCard, setClickedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDescription, setShowDescription] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Sales Training",
      image: SalesTrainingImg,
      description: "Results-focused training programs.",
    },
    {
      id: 2,
      title: "Trade Show Selling",
      image: SalesPlaybookImg,
      description:
        "Turning event participation into measurable sales opportunities.",
    },
    {
      id: 3,
      title: "Sales Candidate Assessments",
      image: CandidateAssessmentImg,
      description:
        "Assess sales candidates with psychometric tests and interviews to evaluate key skills like negotiation, resilience, and relationship-building, ensuring alignment with your strategy.",
    },
    {
      id: 4,
      title: "Coaching",
      image: StartupSupportImg,
      description: "Executive and sales coaching to improve outcomes.",
    },
    {
      id: 5,
      title: "Sales Force Evaluation",
      image: SalesTrainingImg,
      description:
        "Get a custom playbook to align your team and strategies effectively.",
    },
    {
      id: 6,
      title: "Sales Candidate Assessments",
      image: SalesPlaybookImg,
      description:
        "Assess sales candidates with psychometric tests and interviews to evaluate key skills.",
    },
    {
      id: 7,
      title: "Startups Support",
      image: CandidateAssessmentImg,
      description:
        "Empower startups with strategic sales guidance and resources.",
    },
    {
      id: 8,
      title: "Consulting & Strategy",
      image: StartupSupportImg,
      description: "Offering market, account, and business strategy support.",
    },
    {
      id: 9,
      title: "Recruiting Process Optimization",
      image: StartupSupportImg,
      description:
        "Streamlining recruitment to attract and retain top-tier sales talent.",
    },
    {
      id: 10,
      title: "CRM Selection, Installation, and Integration",
      image: StartupSupportImg,
      description:
        "Helping businesses choose and implement the right CRM system.",
    },
    {
      id: 11,
      title: "Metrics Development",
      image: StartupSupportImg,
      description:
        "Identifying KPIs and predictive indicators to drive revnue.",
    },
    {
      id: 12,
      title: "Pipeline Management",
      image: StartupSupportImg,
      description:
        " Building formal, staged, and criteria-based pipeline systems",
    },
  ];

  const cardsPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const currentCards = cards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleCardClick = (id) => {
    if (id === clickedCard) {
      setClickedCard(null);
      setShowDescription(false);
    } else {
      setClickedCard(id);
      setShowDescription(false);
      setTimeout(() => {
        setShowDescription(true);
      }, 500);
    }
  };

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const navigate = useNavigate();
  const handleServices = () => {
    navigate("/services");
  };

  return (
    <section className="py-12 services-top-margin container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        <motion.div
          className="w-full  text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={leftVariants}
        >
          <h5 className="text-[16px] md:text-[24px] sm:text-[24px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            Consultation & Services
          </h5>
          <h2 className="text-[18px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7">
            Explore Our Tailored Services for
            <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
              Sales Leaders & CEOs
            </span>
          </h2>
          <p className="text-sm sm:text-[14px] md:text-[16px] leading-[32px] text-justify mb-8">
            We provide comprehensive sales enablement services designed to
            empower your{" "}
            <span className="font-bold">Sales Leaders And CEOs</span> to
            optimize their performance. We work closely with businesses of all
            sizes to tailor our solutions, ensuring that your team is equipped
            with the right tools, training, and strategies to achieve
            exceptional results. Here's how we make an impact:
          </p>
          <button
            onClick={handleServices}
            type="button"
            className="text-[#000] transition-transform duration-500 ease-out transform  h-12 w-full justify-center  flex space-x-5 gap-6 uppercase items-center font-bold text-sm md:px-20 lg:px-20 sm:w-full xl:w-auto 2xl:w-auto  md:w-auto xl:px-20   md:py-6 sm:px-16 py-4 hover:text-[#000] border border-[#000] sm:justify-center md:justify-between border-btn2"
          >
            Learn More
            <img src={RightArrow} alt="Right Arrow" className="w-6 h-6" />
          </button>
        </motion.div>

        <div className="relative flex justify-center service-margin text-white w-full">
          <div className="relative flex  justify-center items-center text-white w-full  mb-6">
            <motion.div
              className="w-full p-8 flex justify-center items-center"
              ref={ref2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: inView2 ? 1 : 0,
                opacity: inView2 ? 1 : 0,
              }}

              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative hidden sm:block w-full sm:w-3/4 md:w-1/2">
                {currentCards.map((card, index) => {
                  let positionClass = "";
                  let transformOrigin = "";
                  let margin = "m-4";

                  if (index === 0) {
                    positionClass = "absolute bottom-0 right-1/2";
                    transformOrigin = "bottom right";
                  } else if (index === 1) {
                    positionClass = "absolute top-1/2 left-1/2 ";
                    transformOrigin = "left center";
                  } else if (index === 2) {
                    positionClass = "absolute top-1/2 right-1/2 ";
                    transformOrigin = "right center";
                  } else if (index === 3) {
                    positionClass = "absolute bottom-0 left-1/2 ";
                    transformOrigin = "bottom center";
                  }

                  return (
                    <div
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      className={`transition-all cursor-pointer duration-500 transform  ${positionClass} ${margin} ${(clickedCard === card.id ? "scale-110 z-10" : "",
                          clickedCard === card.id ? "card-services" : "")
                        }`}
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: clickedCard === card.id ? "290px" : "180px",
                        height: clickedCard === card.id ? "290px" : "180px",
                        transition: "all 0.3s ease",
                        transformOrigin: transformOrigin,
                        transform: clickedCard === card.id ? "scale(1)" : "",
                      }}
                    >
                      <div className="h-full flex flex-col justify-between bg-layer p-5 transition-all duration-300">
                        <h3 className="text-[14px] uppercase font-bold">
                          {card.title}
                        </h3>

                        <div className="flex justify-start items-center">
                          {clickedCard === card.id && showDescription && (
                            <p className="absolute text-sm leading-6 lg:leading-4 lg:text-[13px] xl:leading-6 xl:text-[16px] 2xl:leading-6 2xl:text-[16px] bold-text1 top-16 w-[90%]">
                              {card.description}
                            </p>
                          )}
                          {clickedCard === card.id ? (
                            <img
                              src={ServiceArrow}
                              alt="Service Arrow"
                              className="w-7 h-7"
                            />
                          ) : (
                            <img
                              src={PlusImg}
                              alt="Plus Icon"
                              className="w-7 h-7"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="sm:hidden">
                <div className="w-full flex flex-wrap align-middle justify-center">
                  {currentCards.map((card) => (
                    <div
                      key={card.id}
                      className="transition-all duration-500 transform m-4"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "290px",
                        height: "290px",
                      }}
                    >
                      <div className="h-full flex flex-col justify-between bg-layer p-5">
                        <h3 className="text-[14px] uppercase font-bold">
                          {card.title}
                        </h3>
                        <p className="absolute text-sm leading-6 lg:leading-4 lg:text-[13px] xl:leading-6 xl:text-[16px] 2xl:leading-6 2xl:text-[16px] bold-text1 top-16 w-[90%]">
                          {card.description}
                        </p>
                        <img
                          src={ServiceArrow}
                          alt="Service Arrow"
                          className="w-7 h-7"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="xl:mt-24 lg:mt-5 md:mt-[110px] 2xl:mt-28 sm:mt-[110px]  flex justify-end ">
        <div className="flex  gap-4 z-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 cursor-pointer hover:scale-110  transition-transform"
          >
            <img src={SliderBtnLeft} alt="Slider Left" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 cursor-pointer hover:scale-110   transition-transform"
          >
            <img src={SliderBtnRight} alt="Slider Right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
