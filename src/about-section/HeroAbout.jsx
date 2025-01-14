import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function HeroAbout() {
  return (
    <>
      <section>
        <div className="relative w-full h-full overflow-hidden course-bg">
          <div className="relative   bg-layer">
            <Navbar />

            <div className="text-white flex items-center justify-center container mx-auto px-4 pt-16 pb-20">
              <h1 className="text-5xl uppercase font-bold">About Us</h1>
            </div>
            {/* <div className="text-white flex items-center justify-center gap-6 py-12">
              <div className="uppercase">Home</div>
              <span className=" bg-gradient-to-r from-[#DB0032] to-[#FA6602]">
                <MdOutlineKeyboardArrowRight size={30} />
              </span>

              <div className="uppercase">About</div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroAbout;
