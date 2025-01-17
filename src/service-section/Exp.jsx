import React from "react";
import Big from "../assets/new/big.png";
import Dot from "../assets/new/dotted.png";
import Iso from "../assets/new/Isolation_Mode.png";
import Three from "../assets/new/three.png";
import Fir from "../assets/new/fir.png";

function Exp() {
  return (
    <>
      <div className="px-4  sm:px-12">
        <div className="absolute left-28  top-[-10] sm:top-0  sm:left-44 z-[-10]">
          <img
            src={Iso}
            alt=""
            className="w-[200px] h-[200px] sm:w-[480px] sm:h-[480px]"
          />
        </div>

        <div className="flex flex-row sm:flex-row gap-4 sm:gap-8">
          <div className="flex flex-col gap-4 sm:gap-8">
            <div>
              <img
                src={Fir}
                alt=""
                className="w-[150px] h-[200px] sm:w-[237px] sm:h-[300px]"
              />
            </div>
            <div>
              <img
                src={Three}
                alt=""
                className="w-[170px] h-[175px] sm:w-[237px] sm:h-[218px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-lg rounded-tr-[52px] p-4 w-[100px] h-[80px] sm:w-[134px] sm:h-[105px] bg-white shadow-lg text-center">
              <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#DB0032] to-[#FA6602] text-transparent bg-clip-text">
                25 +
              </h1>
              <p className="uppercase text-xs sm:text-base font-bold">
                Years of
              </p>
              <p className="uppercase text-xs sm:text-base font-bold">
                Experience
              </p>
            </div>

            <div>
              <img
                src={Big}
                alt=""
                className="w-[180px] h-[280px] sm:w-[281px] sm:h-[415px]"
              />
            </div>
          </div>
        </div>

        <div className="relative bottom-8 sm:bottom-10 z-[-10] right-4 sm:right-8">
          <img
            src={Dot}
            alt=""
            className="w-[50px] h-[60px] sm:w-[75.71px] sm:h-[85.38px]"
          />
        </div>
      </div>
    </>
  );
}

export default Exp;
