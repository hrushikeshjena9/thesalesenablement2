import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ModuleContent = () => {
  const [openModuleIndex, setOpenModuleIndex] = useState(null);
  const modules = [
    {
      title: "Introduction to Professional Selling",
      content: [
        "Professional selling introduction",
        "Professional selling skill set and mind set",
        "The perfect sales person – Activity",
      ],
    },
    {
      title: "Module 1: The Professional Selling Skill Set",
      content: [
        "Controlling a conversation",
        "Using the power of questions",
        "The OPEN question selling technique (Operational, probing, effect and nail down questions)",
      ],
    },
    {
      title: "Module 2: Listen and Know Your FAB",
      content: [
        "The importance of listening",
        "Features, advantages and benefits",
        "Customer specific benefits",
        "Identifying customer’s decision criteria",
      ],
    },
    {
      title: "Module 3: Handle Objections and Close the Sale",
      content: [
        "Types of objections",
        "The APAC objections handling model",
        "Handling the most common objection 'price'",
        "Nine closing techniques",
      ],
    },
    {
      title: "Module 4: The Professional Selling Mind Set",
      content: [
        "The right state of mind to sell",
        "The more 'No’s' you get",
        "Visualize your sale",
        "Know what you’re selling inside out.",
      ],
    },
    {
      title: "Module 5: Understanding Buyer Types and Follow-up",
      content: [
        "Understanding the different behavioral styles and personality types",
        "Find out your major behavioral style and personality type",
        "Selling to different personality styles",
        "After sales and follow-up",
      ],
    },
  ];

  const handleDisclosureClick = (index) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  return (
 

    <div className="space-y-6 lg:space-y-8">
  <h1 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left">
    Outline of Topics
  </h1>

  {modules.map((module, index) => (
    <div key={index} className="w-full">
      <button
        onClick={() => handleDisclosureClick(index)}
        className="w-full p-4 text-left font-semibold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white rounded-md hover:bg-gradient-to-l flex justify-between items-center transition-all duration-300 ease-in-out"
      >
        <span className="text-xs sm:text-sm md:text-lg">{module.title}</span>
        <motion.span
          className="transition-transform duration-300 ease-in-out"
          animate={{ rotate: openModuleIndex === index ? "-180" : 0 }}
          transition={{ duration: 0.3 }}
        >
          {openModuleIndex === index ? (
            <AiOutlineUp className="w-6 h-6" />
          ) : (
            <AiOutlineDown className="w-6 h-6" />
          )}
        </motion.span>
      </button>

      <AnimatePresence>
        {openModuleIndex === index && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="p-4 bg-gray-100 rounded-md overflow-hidden">
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base md:text-lg">
                {module.content.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>

  );
};

export default ModuleContent;
