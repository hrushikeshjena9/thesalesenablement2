import { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";


const FAQs = [
  {
    question: "Do I need to confirm my email address after signing up?",
    answer:
      "Yes, confirming your email address is essential for account verification and ensures uninterrupted communication with our support team.",
  },
  {
    question: "Do I need a purchase key to create a support ticket?",
    answer:
      "Yes, a purchase key is required to validate your purchase and help us provide precise and efficient assistance.",
  },
  {
    question:
      "How long does it take to receive a response from a support agent?",
    answer:
      "Our support team aims to respond within 24-48 business hours, depending on the complexity of your inquiry.",
  },
  {
    question: "How can I track my support ticket?",
    answer:
      "You can track your support ticket status by logging into your account and visiting the 'Support Tickets' section.",
  },
  {
    question: "What should I do if I have an urgent issue?",
    answer:
      "For urgent issues, please contact our support team directly via phone or chat for immediate assistance.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDisclosureClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl bg-white p-6">
      <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold uppercase mb-4">Our FAQs</h1>

      <div className="mb-12">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl uppercase font-bold">
          Sales Enablement Solutions for
        </h1>
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl uppercase font-bold mt-2 sm:mt-4 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
          Business Growth
        </h1>
        <p className="sm:text-left  sm:leading-6 leading-10 sm:font-normal text-justify text-sm md:text-base lg:text-lg">
          We empower sales teams to perform at their best. We provide innovative
          tools, training, and strategies to optimize your sales process,
          improve team performance, and boost revenue generation.
        </p>
      </div>
      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => handleDisclosureClick(index)}
              className="w-full p-4 text-left font-semibold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-white rounded-md hover:bg-gradient-to-l flex justify-between items-center transition-all duration-300 ease-in-out"
            >
              <span>{faq.question}</span>
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  openIndex === index ? "rotate-[-180]" : ""
                }`}
              >
                {openIndex === index ? (
                  <AiOutlineUp className="w-6 h-6" />
                ) : (
                  <AiOutlineDown className="w-6 h-6" />
                )}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="px-4 pt-4 pb-2 text-sm text-gray-500 shadow-lg rounded-lg"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
