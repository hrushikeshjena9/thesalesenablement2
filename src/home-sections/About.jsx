import RightArrow1 from "../assets/arrow-right1.png";
import RightArrow from "../assets/arrow-right.png";
import OurMission from "../assets/our-mission.png";
import OurValues from "../assets/our-values.png";
import OurVision from "../assets/our-vision.png";
import AboutImg from "../assets/about.png";
import Group from "../assets/grouppeople.png";
import Thumb from "../assets/thumbsup.png";

function About() {
  return (
    <section className="py-12 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <img src={AboutImg} alt="About" className="w-full" />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h5 className="text-[14px] sm:text-[16px] md:text-[24px] uppercase font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
            Who We Are
          </h5>

          <h2 className="text-[16px] sm:text-[24px] md:text-[28px] font-bold uppercase mt-7 mb-7">
            Empowering{" "}
            <span className="ml-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
              CEOs and Sales <br /> Leaders
            </span>{" "}
            to Achieve Excellence
          </h2>

          <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[32px] text-justify mb-8">
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
              <div className="flex items-center space-x-4" key={index}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px]"
                />
                <div className="flex justify-between gap-6">
                  <h5 className="font-bold uppercase">{item.title}</h5>
                  <p className="text-[10px] sm:text-[14px] md:text-[14px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-6 mt-8">
            <button
              type="button"
              className="text-white md:px-6 md:py-3 md:w-auto  uppercase flex items-center gap-2 bg-gradient-to-r from-[#DB0032] to-[#FA6602] hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 font-bold text-sm px-5 py-2.5"
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
              className="text-[#000] flex md:px-6 md:py-3 md:w-auto  uppercase gap-3 justify-between space-x-2 items-center font-bold text-sm px-4 py-2 hover:text-[#000]  border-[#000] border-btn2"
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
