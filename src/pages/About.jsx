import React from "react";
import Navbar from "../components/Navbar";
import heroImage1 from "../assets/banner2.jpg";
const About = () => {
  return (
    <>
      <section>
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage1})`,
            filter: "blur(0px)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
        <div
          className="relative bg-gradient-to-b from-black to-transparent"
          style={{ backgroundColor: "#060b33bd" }}
        >
          <div>
            <Navbar />
          </div>
          <div className="container mx-auto text-center py-20">
            <h1 className="text-4xl text-white font-bold mb-4">ABOUT US</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
