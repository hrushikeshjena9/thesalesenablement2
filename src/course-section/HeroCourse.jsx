import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function HeroCourse() {
  return (
    <>
      <section>
        <div className="relative w-full h-full z-50 course-bg">
          <div className="relative   bg-layer">
            <Navbar />

            <div className="text-white flex items-center justify-center container mx-auto px-4 pt-16 pb-20">
              <h1 className="text-5xl uppercase font-bold ">Our Course</h1>
            </div>
            {/* <div className="text-white flex items-center justify-center gap-6  pb-20">
              <div className="uppercase">Home</div>
              <span className=" ">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>

              <div className="uppercase">Courses</div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroCourse;
