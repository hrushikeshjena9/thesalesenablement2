import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Breadcrumb from "../components/Breadcrumb";
function HeroSRP() {
  return (
    <>
      <section>
        <div className="relative w-full h-full  course-bg">
          <div className="relative   bg-layer">
            <Navbar />

            <div className="text-white flex items-center justify-center container mx-auto px-4 pt-16 ">
              <h1 className="text-5xl uppercase font-bold ">Sample Sales Candidate Assessments</h1>
            </div>
            <div className="text-white flex items-center justify-center container mx-auto px-4 pt-10 pb-20 ">
              <Breadcrumb
                breadcrumbs={[{ label: "Home", to: "/" }, { label: "Sample Sales Candidate Assessments" }]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSRP;
