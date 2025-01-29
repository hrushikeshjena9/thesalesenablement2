import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
function HeroCourseDetails() {
  return (
    <>
      <section>
        <div className="relative w-full h-full z-40 course-bg">
          <div className="relative   bg-layer">
            <Navbar />

            <div className="text-white flex items-center justify-center container mx-auto px-4 pt-16 ">
              <h1 className="text-5xl uppercase font-bold ">Course Details</h1>
            </div>
            <div className="text-white flex items-center justify-center container mx-auto px-4 pt-10 pb-20 ">
            <Breadcrumb breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Courses', to: '/courses' }, { label: 'Course-Details' }]} />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroCourseDetails;
