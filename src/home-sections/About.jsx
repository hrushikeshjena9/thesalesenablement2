import RightArrow1 from "../assets/arrow-right1.png";
import RightArrow from "../assets/arrow-right.png";
import OurMission from "../assets/our-mission.png";
import OurValues from "../assets/our-value.png";
import OurVision from "../assets/our-vision.png";
import AboutImg from "../assets/about.png";
import Group from "../assets/grouppeople.png";
import Thumb from "../assets/thumbsup.png";

function About() {
  return (
    <section className="py-12 about-class container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <img src={AboutImg} alt="About" className="w-full" />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h5 className="text-[14px] sm:text-[24px] md:text-[22px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            Who We Are
          </h5>

          <h2 className="text-[16px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7">
            Empowering{" "}
            <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
              CEOs and Sales <br /> Leaders
            </span>{" "}
            to Achieve Excellence
          </h2>

          <p className="text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]  leading-[32px] text-justify mb-8">
            At The Enablement Company, we specialize in empowering sales teams
            to exceed their targets through tailored training, coaching, and
            enablement solutions. With a deep understanding of sales metrics,
            our mission is to help organizations scale and optimize their
            revenue growth. We believe that success is driven by well-equipped,
            motivated, and skilled sales teams.
          </p>

          <div className="space-y-6">
            {[
              {
                img: OurMission,
                title: "Our Mission",
                text: "Revolutionize the performance of sales teams worldwide",
              },
              {
                img: OurValues,
                title: "Our Values",
                text: "Leading partner in transforming sales teams",
              },
              {
                img: OurVision,
                title: "Our Vision",
                text: "Guiding principles that shape everything we do.",
              },
            ].map((item, index) => (
              <div
                className="flex  space-x-4"
                key={index}
              >
                <div className="w-[10%]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className=""
                  />
                </div>
                <div className="flex justify-between align-middle gap-6">
                  <div className="w-[35%]">
                    <h5 className="font-bold lg:text-[16px] xl:text-xl uppercase sm:mt-4 md:mt-5 lg:mt-1 xl:mt-3">
                      {item.title}
                    </h5>
                  </div>
                  <div className="w-[90%]">
                    <p className="text-[10px] sm:text-[14px] md:text-[18px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-wrap md:flex-wrap  lg:flex-wrap xl:flex-nowrap justify-between gap-6 mt-8">
            <button
              type="button"
              className="text-white text-nowrap  uppercase bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:outline-none  text-sm md:text-[13px] px-5 py-2.5 w-full md:px-6 md:py-3 md:w-auto flex items-center justify-center"
            >
              Take the Sales Force Evaluation
              <img
                src={RightArrow1}
                alt="Right Arrow"
                className="w-[24px] h-[24px]"
              />
            </button>

            <button
              type="button"
              className="text-[#000] flex md:px-10 lg:px-10 xl:px-6 text-nowrap md:py-3 md:w-auto  uppercase gap-3 sm:justify-center md:justify-between lg:justify-between xl:justify-between 2xl:justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000]  border-[#000] border-btn2"
            >
              View Upcoming Courses
              <img src={RightArrow} alt="Arrow" className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
