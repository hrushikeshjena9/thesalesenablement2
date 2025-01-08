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
      <section className="mt-4 container mx-auto p-4 z-10">
        <div className="mx-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl uppercase md:text-2xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
              Our Courses
            </h2>
          </div>

          <div className="grid grid-cols-2 text-white gap-4 md:grid-cols-3 lg:grid-cols-6 mb-6">
            <div className="card p-2 shadow-lg">
              <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                <img src={Professional} />
              </div>
              <p className="text-center">Professional Selling Skills</p>
            </div>

            <div className="card pt-2 shadow-lg">
              <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto  mb-4">
                <img src={Communication} />
              </div>
              <p className="text-center ">
                Communication Skills for Sales Staff
              </p>
            </div>

            <div className="card p-2 shadow-lg">
              <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                <img src={Front} />
              </div>
              <p className="text-center">Front Line Retail Selling Skills</p>
            </div>

            <div className="card p-2 shadow-lg">
              <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                <img src={Sales} />
              </div>
              <p className="text-center">Sales Management</p>
            </div>

            <div className="card p-2 shadow-lg">
              <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                <img src={Territory} />
              </div>
              <p className="text-center">Sales Territory Planning & Routing</p>
            </div>

            <div className="card p-2 shadow-lg">
              <div className="w-[112.19px] h-[112.19px] rounded-full bg-aliceblue mx-auto mb-4">
                <img src={Retail} />
              </div>
              <p className="text-center">
                Retail Sales Planning and Forecasting
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mx-7 justify-between items-center gap-4">
            <button
              type="button"
              className="text-white md:px-6 md:py-3 md:w-auto  uppercase flex items-center gap-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 font-bold text-sm px-5 py-2.5"
            >
              Schedule a Consultation
              <img src={RightArrow1} alt="Right Arrow" className="w-6 h-6" />
            </button>

            <div className="flex justify-between items-center border-2 border-black">
              <img src={FilterImg} alt="Filter Icon" className="w-6 h-6 ml-2" />
              <input
                type="text"
                placeholder="Search Courses"
                className="flex-1 px-2 py-1  md:py-3   outline-none"
              />
              <button
                type="button"
                className="text-white uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl font-bold text-sm px-4 py-3.5"
              >
                Book Now
              </button>
            </div>

            <button
              type="button"
              className="text-[#000] flex md:px-6 md:py-3 md:w-auto  uppercase gap-3 justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000]  border-[#000] border-btn2"
            >
              Discover Our Courses
              <img src={RightArrow} alt="Right Arrow" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCourses;
