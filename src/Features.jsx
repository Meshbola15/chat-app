import React from "react";
import mockup from "./mockup.jpg";

const Features = () => {
  return (
    <div className="w-full container p-6 py-12 min-h-screen flex flex-col justify-between items-center">
      <div className="text-center space-y-4 w-full md:w-[70%] ">
        <h2 className="font-[poppins] text-4xl md:text-6xl text-gray-700 capitalize">
          instance team chats
        </h2>
        <p className="text-gray-500 text-[1rem] md:text-[1.5rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          in laboriosam velit nesciunt, debitis beatae nulla voluptas amet
          ducimus quo sequi numquam non voluptatibus earum esse voluptate iusto
          nisi provident.
        </p>
      </div>
        <img src={mockup} className="w-full p-5 md:p-10 md:px-12" />
    </div>
  );
};

export default Features;
