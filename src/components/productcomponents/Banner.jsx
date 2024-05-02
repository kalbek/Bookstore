import React from "react";

const Banner = () => (
  <div className="w-full h-[10%] bg-yellow-300 py-4 px-8 flex justify-center items-center overflow-hidden gap-4 my-4">
    {[...Array(11)].map((_, index) => (
      <h1
        className={`text-3xl md:text-[320%] ${
          index === 5 ? "text-gray-900" : "text-red-400 opacity-40"
        } `}
        key={0}
      >
        ALL&nbsp;BOOKS
      </h1>
    ))}
  </div>
);

export default Banner;
