import React from "react";

const Navbar = () => {
  return (
    <div className="container py-6 flex flex-row items-center justify-between">
      <div>
        <h2 className="text-2xl md:text-5xl font-semibold text-white">
          chat<span className="font-[400] text-blue-400">app</span>
        </h2>
      </div>
      <div className="space-x-12 md:space-x-6 hidden items-center md:flex md:flex-row ">
        <a
          href="#"
          className="text-white text-2xl md:text-base capitalize hover:text-blue-500"
        >
          Products
        </a>
        <a
          href="#"
          className="text-white text-2xl md:text-base capitalize hover:text-blue-500"
        >
          services
        </a>
        <a
          href="#"
          className="text-white text-2xl md:text-base capitalize hover:text-blue-500"
        >
          contact
        </a>
        <a
          href="#"
          className="text-white text-2xl md:text-base capitalize hover:text-blue-500"
        >
          login
        </a>
        <button className="p-4 px-8 md:px-8 rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 text-2xl md:text-base capitalize">
          try it free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
