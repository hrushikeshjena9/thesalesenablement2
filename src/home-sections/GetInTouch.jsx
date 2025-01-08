import React, { useState } from "react";
import GetInTouchImg from "../assets/getintouch.png";
import RightArrow from "../assets/arrow-right.png";
import RightArrow1 from "../assets/arrow-right1.png";
import PhoneIncome from "../assets/phone-incoming.png";

function GetInTouch() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, phone, email, description });
  };

  return (
    <section className="banner">
      <div className="container py-12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              GET IN TOUCH!{" "}
              <img
                src={PhoneIncome}
                alt="Phone Icon"
                className="w-9 h-9 inline-block ml-2"
              />
            </h3>
            <p className="text-[12px] text-white sm:text-[14px] md:text-[16px] leading-[32px] text-justify  mt-6">
              We help optimize sales strategies, enhance team performance, and
              create tailored solutions to unlock your sales team's potential.
            </p>
            <h5 className="text-3xl md:text-3xl font-bold text-white mt-6">
              We Are Here To Help!
            </h5>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0 md:space-x-4">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none font-medium text-sm px-12 py-2.5 flex items-center justify-center w-full md:w-auto"
                >
                  CONNECT NOW
                  <img
                    src={RightArrow1}
                    alt="Right Arrow"
                    className="w-6 h-6 ml-2"
                  />
                </button>
                <button
                  type="button"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-medium text-sm px-12 py-2.5 flex items-center justify-center w-full md:w-auto"
                  style={{
                    border: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #DB0032 0%, #FA6602 100%) 1",
                  }}
                >
                  LEARN MORE
                  <img
                    src={RightArrow}
                    alt="Right Arrow"
                    className="w-6 h-6 ml-2"
                  />
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
              src={GetInTouchImg}
              alt="Get In Touch"
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
