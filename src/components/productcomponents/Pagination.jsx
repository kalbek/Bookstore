import React from "react";

const Pagination = () => (
  <>
    <div className="w-full  flex justify-center items-center gap-2 bg-blackbg pb-24 flex-wrap ">
      <div className="cursor-pointer bg-black py-2 flex justify-center items-center gap-4 px-4 rounded-[20px] bg-zinc-900">
        <img srcSet="lt.svg" alt="left arrow" />
        <p className="text-white text-lg">PREV</p>
      </div>
      <div className="cursor-pointer bg-black px-4 py-2   flex justify-center items-center rounded-[50%] bg-[#222325]">
        <p className="text-white">1</p>
      </div>
      <div className="cursor-pointer bg-black px-4 py-2   flex justify-center items-center rounded-[50%] bg-black">
        <p className="text-white">2</p>
      </div>
      <div className="cursor-pointer bg-black px-4 py-2   flex justify-center items-center rounded-[50%] bg-[#222325]">
        <p className="text-white">3</p>
      </div>
      <div className="cursor-pointer bg-black px-4 py-2   flex justify-center items-center rounded-[50%] bg-[#222325]">
        <p className="text-white">4</p>
      </div>
      <div className="cursor-pointer bg-black py-2 flex justify-center items-center gap-4 px-4 rounded-[20px] bg-zinc-900">
        <p className="text-white text-lg">NEXT</p>
        <img srcSet="gt.svg" alt="right arrow" />
      </div>
    </div>
  </>
);

export default Pagination;
