import React from "react";
import ctaImage from "./ctaImage.png";
import star from "./stars.svg";

const CTA = () => {
  return (
    <div className="bg-blue-300 ">
      <div className="h-auto container py-10 flex flex-col-reverse space-x-5 items-center justify-between md:flex-row">
        <div className="">
          <img src={ctaImage} className="" />
        </div>
        <div className="text-left space-y-5 text-gray-600 py-10 min-w-[50%] flex flex-col items-start">
          <h2 className="font-[poppins] text-4xl md:text-6xl text-gray-700 capitalize">
            perfect solution for small businesses
          </h2>
          <p className="text-gray-500 text-[1rem] md:text-[1.5rem]">
            Pricing plans that fit like a glove
          </p>
          <div className="flex flex-col w-full space-y-5 md:space-y-0 md:flex-row items-center">
            <button className=" p-3 px-6 w-full md:w-auto md:p-4 mr-0  md:px-10 border-2 border-blue-600 rounded-full hover:bg-transparent bg-blue-600 hover:text-blue-600 text-white text-sm md:text-xl md:mr-10 capitalize">
              try it free
            </button>
            <button className=" p-3 px-5 w-full md:w-auto md:p-4  md:px-10 rounded-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm md:text-xl capitalize">
              get a demo
            </button>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row items-center justify-between">
            <div className="flex flex-col items-center  md:items-start space-y-4">
              <div className="w-[10rem] h-[2px] bg-slate-400" />
              <img src={star} />
            </div>
            <h3 className="text-lg md:text-left text-slate-500 text-center max-w-[50%]">
              <span className="font-bold text-slate-700">5,200 businesses</span>{" "}
              use ChatApp and they rate it as{" "}
              <span className="font-bold text-slate-700">5-stars</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
