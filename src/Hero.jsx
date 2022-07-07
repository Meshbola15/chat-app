import React from "react";
import heroImg from "./image.png";

const Hero = () => {
  return (
    <div className="w-full container flex flex-col lg:flex-row items-center justify-between">
      <div className=" text-left text-white flex flex-col md:space-y-10 space-y-5 lg:max-w-[50%]">
        <h1 className="font-[600] md:text-8xl text-6xl capitalize ">
          Have your best chat
        </h1>
        <p className="md:2xl text-3xl">Fast, easy {"&"} unlimited team chat</p>
        <div className="flex space-y-5 md:space-y-0 flex-col md:flex-row items-center">
          <button className=" p-3 px-6 md:p-4 mr-0 w-full md:w-auto md:px-10 border-2 border-white rounded-full hover:bg-transparent bg-white hover:text-white text-blue-500 text-sm md:text-2xl md:mr-10 capitalize">
            try it free
          </button>
          <button className=" p-3 md:my-0 px-5 md:p-4 w-full md:w-auto  md:px-10 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-500 text-sm md:text-2xl capitalize">
            get a demo
          </button>
        </div>
      </div>
      <img
        src={heroImg}
        alt="Hero-img"
        className=" w-full md:max-w-[45%] p-6 pb-8"
      />
    </div>
  );
};

export default Hero;
