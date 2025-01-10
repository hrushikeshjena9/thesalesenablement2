import RightArrow1 from "../assets/arrow-right1.png";
import RightArrow from "../assets/arrow-right.png";
import FilterImg from "../assets/filter.png";
import Communication from "../assets/4.png";
import Professional from "../assets/0.png";
import Front from "../assets/5.png";
import Sales from "../assets/3.png";
import Territory from "../assets/2.png";
import Retail from "../assets/1.png";
import { Link } from "react-router-dom";

function OurCourses() {
  return (
    <>
      <div className="courses">
        <section className=" container mx-auto p-4 z-10">
          <div className="mx-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl uppercase md:text-2xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                Our Courses
              </h2>
            </div>

            <div className="grid grid-cols-2  text-white gap-4 lg:gap-4 xl:gap-4 2xl:gap-12 md:grid-cols-3 lg:grid-cols-6 mb-6">
              <div className="card p-2  shadow-lg">
                <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                  <img src={Professional} />
                </div>
                <p className="text-center text-sm md:text-[12px] px-1 uppercase">
                  Professional Selling Skills
                </p>
              </div>

              <div className="card pt-2 shadow-lg">
                <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto  mb-4">
                  <img src={Communication} />
                </div>
                <p className="text-center px-3  text-sm md:text-[12px] uppercase ">
                  Communication Skills for Sales Staff
                </p>
              </div>

              <div className="card p-2 shadow-lg">
                <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                  <img src={Front} />
                </div>
                <p className="text-center text-sm md:text-[12px] px-1 uppercase">
                  Front Line Retail Selling Skills
                </p>
              </div>

              <div className="card p-2 shadow-lg">
                <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                  <img src={Sales} />
                </div>
                <p className="text-center text-sm md:text-[12px] px-3 uppercase">
                  Sales Management
                </p>
              </div>

              <div className="card p-2 shadow-lg">
                <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                  <img src={Territory} />
                </div>
                <p className="text-center text-sm md:text-[12px]  uppercase">
                  Sales Territory Planning & Routing
                </p>
              </div>

              <div className="card p-2 shadow-lg">
                <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                  <img src={Retail} />
                </div>
                <p className="text-center text-sm md:text-[12px] px-1 uppercase">
                  Retail Sales Planning and Forecasting
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-wrap lg:flex-wrap xl:flex-row lg:m xl:mx-7  justify-between items-center gap-4">
              <Link
                to="schedule-a-consultation"
                type="button"
                className="text-white group   transition-all duration-300 ease-out  transform   uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none sm:text-sm text-xs md:text-[14px] lg:text-[14px] xl:text-[16px] px-5 py-2.5 w-full md:py-4 sm:w-[378px] lg:px-3 lg:py-3  xl:px-6 xl:py-3 md:w-[380px] xl:w-auto lg:w-[380px] flex items-center justify-center"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white  group-hover:w-full group-hover:h-full opacity-10"></span>
                Schedule a Consultation
                <img src={RightArrow1} alt="Right Arrow1" className="w-6 h-6" />
              </Link>
              {/* <a
                href="#_"
                class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600  hover:text-white group hover:bg-gray-50"
              >
                <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative">Button Text</span>
              </a> */}

              <div className="flex justify-between items-center border-2 border-black">
                <img
                  src={FilterImg}
                  alt="Filter Icon"
                  className="w-6 h-6 ml-2"
                />
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="flex-1 w-full  px-6 py-0 sm:px-4 sm:py-1 md:px-4 md:py-1 lg:px-4 lg:py-1 xl:px-4 xl:py-1 2xl:px-4 2xl:py-1  font-bold placeholder:text-sm uppercase outline-none"
                />
                <Link
                  to="book-now"
                  type="button"
                  className="text-white group transition-transform duration-500 ease-out transform   w-auto  uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none text-[12px]  sm:text-sm md:text-[14px] px-5 py-2.5 sm:w-auto lg:w-auto xl:w-auto md:px-6 md:py-3 md:w-auto flex items-center justify-center"
                >
                  <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  Book Now
                </Link>
              </div>

              {/* <a
                href="#_"
                class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
              >
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span class="relative">Button Text</span>
              </a> */}
              <Link
                to="discover-our-courses"
                type="button"
                className="text-[#000] transition-transform duration-500 ease-out transform  flex md:px-6 md:py-2 lg:py-2.5 xl:py-2.5 2xl:py-2.5 sm:w-[378px] md:w-[385px] justify-center  w-full xl:w-auto lg:w-[385px]  uppercase gap-3 sm:justify-center md:justify-center xl:justify-between lg:justify-center  space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000]  border-[#000] border-btn2"
             >     
                Discover Our Courses
                <img src={RightArrow} alt="Right Arrow" className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurCourses;
