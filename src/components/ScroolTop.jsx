import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position to show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-gradient-to-r from-[#DB0032] to-[#FA6602] p-4 rounded-full z-50 text-white shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:bg-gradient-to-r hover:from-[#FA6602] hover:to-[#DB0032] hover:shadow-2xl`}
      style={{ transition: "opacity 0.3s ease-in-out" }}
    >
      <FaArrowUp className="text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;
