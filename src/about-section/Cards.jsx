import React from "react";
import { motion } from "framer-motion";
import image from "../assets/Frame.png";

const Cards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", bounce: 0.3 },
    },
    hover: {
      scale: 1.05,
      rotate: 3,
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#f8f9fa",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-6 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[{
          title: "Top Sales Training Company Award (2024)",
          description: "Recognized for delivering transformative sales training programs that empower businesses to achieve success."
        }, {
          title: "Certified Sales Performance Consultant",
          description: "Celebrated for excellence in enhancing sales performance and fostering growth across diverse industries."
        }, {
          title: "Best Sales Technology Integration (2023)",
          description: "Honored for implementing advanced sales tools and systems that streamline processes and drive productivity."
        }, {
          title: "Outstanding Customer Success Award (2024)",
          description: "Recognized for consistently exceeding client expectations and driving exceptional results through personalized sales enablement solutions."
        }].map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <img
              src={image}
              alt={`Logo ${index + 1}`}
              className="w-24 h-24 object-contain mb-4"
            />
            <h5 className="text-xl font-bold text-center">{card.title}</h5>
            <p className="mt-2 text-center">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
