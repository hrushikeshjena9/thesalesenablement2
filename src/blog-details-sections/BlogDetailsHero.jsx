import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
function BlogDetailsHero() {
  return (
    <>
      <section>
        <div className="relative w-full h-full   course-bg">
          <div className="relative   bg-layer">
            <Navbar />
            <div className="text-white flex items-center justify-center container mx-auto px-4 pt-6 sm:px-4 sm:pt-16 ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase font-bold ">Blog Details</h1>
            </div>
            <div className="text-white flex items-center justify-center container mx-auto px-4 pt-4 pb-10 sm:px-4 sm:pt-10 sm:pb-20 ">
            <Breadcrumb breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetailsHero;
