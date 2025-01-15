import React from "react";
import {
  FiBook,
  FiUsers,
  FiTarget,
  FiMonitor,
  FiPhoneCall,
  FiClock,
} from "react-icons/fi";
import { motion } from "framer-motion";

const WhyChoseUs = () => {
  const features = [
    {
      icon: <FiBook className="text-current" size={32} />,
      title: "Seamless Learning Anywhere",
      description:
        "Access training, resources, and insights wherever you are, empowering your team to stay ahead in the competitive sales landscape.",
    },
    {
      icon: <FiUsers className="text-current" size={32} />,
      title: "Expert-Led Training",
      description:
        "Gain knowledge from seasoned sales professionals and industry leaders to sharpen your team's skills and strategies.",
    },
    {
      icon: <FiTarget className="text-current" size={32} />,
      title: "Effective Team Management",
      description:
        "Streamline team coordination and performance tracking with tools designed to foster collaboration and accountability.",
    },
    {
      icon: <FiMonitor className="text-current" size={32} />,
      title: "Strategic Sales Planning",
      description:
        "Leverage data-driven insights to craft winning sales strategies and align goals with business objectives.",
    },
    {
      icon: <FiClock className="text-current" size={32} />,
      title: "Real-Time Performance Monitoring",
      description:
        "Track progress and monitor sales activities with advanced analytics to ensure your team stays on target.",
    },
    {
      icon: <FiPhoneCall className="text-current" size={32} />,
      title: "24/7 Dedicated Support",
      description:
        "Count on round-the-clock support to resolve issues quickly and keep your sales enablement tools running smoothly.",
    },
  ];
  return (
    <>
      <motion.section
        className="py-12 bg-[linear-gradient(to_right,_#060b33_0%,_#383f71_100%)] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
          },
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg text-black shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#DB0032] hover:to-[#FA6602] group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="transition-colors duration-300 group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{feature.title}</h3>
                <p className="text-sm group-hover:text-white">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default WhyChoseUs;
