import React from 'react'
import Navbar from "../../../components/Navbar";
const HeroCandidate = () => {
  return (
    <>
    <section>
      <div className="relative w-full h-full z-50 course-bg">
        <div className="relative   bg-layer">
          <Navbar />

          <div className="text-white flex items-center justify-center container mx-auto px-4 pt-16 pb-20">
            <h1 className="text-5xl uppercase font-bold ">Sales Candidate Assessments</h1> 
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default HeroCandidate
