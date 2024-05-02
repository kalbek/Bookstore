import React from "react";

const WhatToRead = () => (
  <>
    <div className="w-[97%] rounded-[15px] bg-blackbg h-auto p-8 flex flex-col md:flex-row items-end  flex-spaced mb-4">
      <div className="flex flex-col content-between gap-4 ">
        <h1 className="text-white text-3xl">DECIDING WHAT TO READ NEXT?</h1>
        <p className="text-white md:w-[45%]">
          You&apos;re in the right place. Tell us what titles or genres
          you&apos;ve enjoyed in the past, and we&apos;ll give you surprisingly
          insightful recommendations.
        </p>
        &nbsp;
      </div>
      <div className="h-full w-2/3 md:w-auto bg-yellow-400 p-10 rounded-[15px] -ml-28 md:ml-0">
        <img srcSet="down-right-arrow.svg" alt="" />
      </div>
    </div>
  </>
);

export default WhatToRead;
