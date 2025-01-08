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

function Services() {
  const [clickedCard, setClickedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const cards = [
    {
      id: 1,
      title: "Sales Training",
      image: SalesTrainingImg,
      description:
        "Learn advanced sales techniques and methodologies tailored to your business needs.",
    },
    {
      id: 2,
      title: "Sales Playbook Blueprint",
      image: SalesPlaybookImg,
      description:
        "Get a custom playbook to align your team and strategies effectively.",
    },
    {
      id: 3,
      title: "Sales Candidate Assessments",
      image: CandidateAssessmentImg,
      description:
        "Assess sales candidates with psychometric tests and interviews to evaluate key skills.",
    },
    {
      id: 4,
      title: "Startups Support",
      image: StartupSupportImg,
      description:
        "Empower startups with strategic sales guidance and resources.",
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
  // const handleCardClick = (id) => {
  //   setClickedCard(id === clickedCard ? null : id);
  //   setTimeout(() => {
  //     setShowDescription(true); 
  //   }, 500);
  // };

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

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
        <div className="w-full  text-center md:text-left">
          <h5 className="text-[24px] md:text-[24px] sm:text-[28px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            Consultation & Services
          </h5>
          <h2 className="text-[28px] sm:text-[34px] font-bold uppercase mt-12 mb-12">
            Explore Our Tailored Services for
            <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
              Sales Leaders & CEOs
            </span>
          </h2>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[32px] text-justify mb-8">
            We provide comprehensive sales enablement services designed to
            empower your   <span className="font-bold">Sales Leaders And CEOs</span> to optimize their performance.
            We work closely with businesses of all sizes to tailor our
            solutions, ensuring that your team is equipped with the right tools,
            training, and strategies to achieve exceptional results. Here's how
            we make an impact:
          </p>
          <button
            type="button"
            className="text-[#000] h-12   flex space-x-5 gap-6 uppercase items-center font-bold text-sm px-12 py-2 hover:text-[#000] border border-[#000] justify-between border-btn2"
          >
            Learn More
            <img src={RightArrow} alt="Right Arrow" className="w-5 h-5" />
          </button>
        </div>

        <div className="relative flex justify-center text-white w-full">
          <div className="relative flex justify-center items-center text-white w-full h-[500px] mb-6">
            <div className="w-full p-8 flex justify-center items-center">
              <div className="relative w-full sm:w-3/4 md:w-1/2">
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
                      className={`transition-all duration-500 transform ${positionClass} ${margin} ${
                        clickedCard === card.id ? "scale-110 z-10" : ""
                      }`}
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: clickedCard === card.id ? "230px" : "180px",
                        height: clickedCard === card.id ? "230px" : "180px",
                        transition: "all 0.3s ease",
                        transformOrigin: transformOrigin,
                        transform: clickedCard === card.id ? "scale(1)" : "",
                      }}
                    >
                      <div className="h-full flex flex-col justify-between bg-layer p-5 transition-all duration-300">
                        <h3 className="text-[16px] font-bold">{card.title}</h3>

                        <div className="flex justify-start items-center">
                          {clickedCard === card.id && showDescription && (
                            <p className="absolute text-[14px] font-normal top-20 w-3/4">
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
            </div>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-[92%] flex justify-between gap-4 z-10">
            <button
              onClick={handlePrev}
              className="w-[45px] h-[45px] cursor-pointer hover:scale-110 transition-transform"
            >
              <img src={SliderBtnLeft} alt="Slider Left" />
            </button>
            <button
              onClick={handleNext}
              className="w-[45px] h-[45px] cursor-pointer hover:scale-110 transition-transform"
            >
              <img src={SliderBtnRight} alt="Slider Right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

{
  /* <div className="relative w-full h-full p-8">
            {currentCards.map((card, index) => {
              let positionClass = "";
              let transformOrigin = "";
              let marginStyle = {}; 
              if (index === 0) {
                positionClass = "absolute bottom-0 right-0";
                transformOrigin = "bottom right";
                marginStyle = { marginBottom: "30px", marginRight: "30px" }; 
              } else if (index === 1) {
                positionClass = "absolute bottom-0 left-0";
                transformOrigin = "bottom left";
                marginStyle = { marginBottom: "30px", marginLeft: "30px" }; 
              } else if (index === 2) {
                positionClass = "absolute top-0 right-0";
                transformOrigin = "top right";
                marginStyle = { marginTop: "30px", marginRight: "30px" }; 
              } else if (index === 3) {
                positionClass = "absolute top-0 left-0";
                transformOrigin = "top left"; 
                marginStyle = { marginTop: "30px", marginLeft: "30px" };
              }

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`transition-all duration-500 transform ${positionClass} ${
                    clickedCard === card.id ? "scale-110 z-10" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: clickedCard === card.id ? "300px" : "150px",
                    height: clickedCard === card.id ? "300px" : "150px",
                    transition: "all 0.3s ease",
                    transformOrigin: transformOrigin,
                    transform: clickedCard === card.id ? "scale(1.1)" : "",
                    ...marginStyle, // Apply margin styles for spacing
                  }}
                >
                  <div className="h-full flex flex-col justify-between bg-layer p-4 transition-all duration-300">
                  
                    <h3 className="text-lg font-bold">{card.title}</h3>
                
                    <div className="flex justify-start items-center">
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
                    
                    {clickedCard === card.id && (
                      <p className="absolute bottom-4 text-sm text-center px-7 rounded">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="relative w-full h-full p-8">
            {currentCards.map((card, index) => {
              let positionClass = "";
              let transformOrigin = "";
              let marginStyle = {}; 

              if (index === 0) {
                positionClass = "absolute bottom-0 right-0"; 
                transformOrigin = "top left";
                marginStyle = { marginBottom: "30px", marginRight: "30px" }; 
              } else if (index === 1) {
                positionClass = "absolute bottom-0 left-0";
                transformOrigin = "top right"; 
                marginStyle = { marginBottom: "30px", marginLeft: "30px" }; 
              } else if (index === 2) {
                positionClass = "absolute top-0 right-0";
                transformOrigin = "bottom left";
                marginStyle = { marginTop: "30px", marginRight: "30px" }; 
              } else if (index === 3) {
                positionClass = "absolute top-0 left-0"; 
                transformOrigin = "bottom right"; 
                marginStyle = { marginTop: "30px", marginLeft: "30px" }; 
              }

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`transition-all duration-500 transform ${positionClass} ${
                    clickedCard === card.id ? "scale-110 z-10" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: clickedCard === card.id ? "300px" : "150px",
                    height: clickedCard === card.id ? "300px" : "150px",
                    transition: "all 0.3s ease",
                    transformOrigin: transformOrigin,
                    transform: clickedCard === card.id ? "scale(1.1)" : "",
                    ...marginStyle, // Apply margin styles for spacing
                  }}
                >
                  <div className="h-full flex flex-col justify-between bg-layer p-4 transition-all duration-300">
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <div className="flex justify-start items-center">
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
                    {clickedCard === card.id && (
                      <p className="absolute bottom-4 text-sm text-center px-7 rounded">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div> */
}
