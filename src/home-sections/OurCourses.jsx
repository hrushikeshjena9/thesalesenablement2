import RightArrow1 from "../assets/arrow-right1.png";
import RightArrow from "../assets/arrow-right.png";
import FilterImg from "../assets/filter.png";
import Communication from "../assets/4.png";
import Professional from "../assets/0.png";
import Front from "../assets/5.png";
import Sales from "../assets/3.png";
import Territory from "../assets/2.png";
import Retail from "../assets/1.png";

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

            <div className="grid grid-cols-2 text-white gap-4 lg:gap-4 xl:gap-4 2xl:gap-12 md:grid-cols-3 lg:grid-cols-6 mb-6">
              <div className="card p-2 shadow-lg">
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

            <div className="flex flex-col md:flex-wrap lg:flex-row xl:flex-row lg:m xl:mx-7  justify-between items-center gap-4">
              <button
                type="button"
                className="text-white  uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none  text-sm md:text-[14px] lg:text-[14px] xl:text-[16px] px-5 py-2.5 w-full md:py-4 sm:w-[378px] lg:px-3 lg:py-3  xl:px-6 xl:py-3 md:w-[380px] xl:w-auto lg:w-auto flex items-center justify-center"
              >
                Schedule a Consultation
                <img src={RightArrow1} alt="Right Arrow" className="w-6 h-6" />
              </button>

              <div className="flex justify-between items-center border-2 border-black">
                <img
                  src={FilterImg}
                  alt="Filter Icon"
                  className="w-6 h-6 ml-2"
                />
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="flex-1 px-4 py-1  placeholder-gray-700 font-bold placeholder:text-sm uppercase outline-none"
                />
                <button
                  type="button"
                  className="text-white   uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none  text-sm md:text-[14px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto flex items-center justify-center"
                >
                  Book Now
                </button>
              </div>

              <button
                type="button"
                className="text-[#000] flex md:px-6 md:py-2 lg:py-2.5 xl:py-2.5 2xl:py-2.5 sm:w-[378px] md:w-[385px]  xl:w-auto lg:w-auto  uppercase gap-3 sm:justify-center md:justify-between xl:justify-between lg:justify-between justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000]  border-[#000] border-btn2"
              >
                Discover Our Courses
                <img src={RightArrow} alt="Right Arrow" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurCourses;
