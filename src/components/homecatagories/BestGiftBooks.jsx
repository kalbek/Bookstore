import React from "react";

const BestGiftBooks = () => (
  <>
    <div className="flex h-[25vh] justify-center items-center relative bg-blackbg rounded-[15px] w-full md:w-2/3">
      <div className="absolute left-[17%] scale-110 top-10">
        <img srcSet="bigstar.svg" alt="" />
      </div>
      <div className="absolute left-[17%] scale-110 bottom-10">
        <img srcSet="smallstar.svg" alt="" />
      </div>
      <p className="text-white text-2xl md:text-4xl font-medium text-center">THE BEST BOOKS FOR A GIFT</p>
    </div>
  </>
);

export default BestGiftBooks;
