import React from "react";

const Discounts = () => (
  <>
    <div className="flex h-[25vh] justify-center items-center relative bg-blackbg rounded-[15px] w-full md:w-1/3">
      <div className="absolute left-1 top-1">
        <img srcSet="bigpercentage.svg" className="scale-110" alt="" />
      </div>
      <div className="absolute left-[15%] bottom-1">
        <img srcSet="smallpercentage.svg" alt="" className="scale-110" />
      </div>
      <p className="text-white text-2xl md:text-4xl  font-medium">DISCOUNTS</p>
    </div>
  </>
);

export default Discounts;
