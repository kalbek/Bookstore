import React from "react";
import Preview from "./Preview";
import PlotSummary from "./PlotSummary";
import AlsoLike from "./AlsoLike";
import ReadersReveiw from "./ReadersReview";

const Book = () => (
  <div className="flex flex-col items-center m-4 bg-lighterbg ">
    <div className="  m-4 rounded-3xl h-auto bg-blackbg p-4 p-8 text-white text-lg flex flex-col w-full">
      {/* Filter menu section */}
      <ul className="flex gap-2">
        <li className=" text-lotion text-xl">
          <a href="/">Home</a>
        </li>
        <li>|</li>
        <li className=" text-xl">
          <a href="/books"> Books</a>
        </li>
        <li>|</li>
        <li className=" text-xl">All&nbsp;books</li>
        <li>|</li>
        <br />
        <li className="text-philippinegray text-xl">Muscle, Alan Trotter</li>
      </ul>
      {/* book preview */}
      <div className="flex flex-col md:flex-row  justify-between w-[100%] gap-12 md:gap-2">
        <Preview />
        {/* <Preview /> */}
        <PlotSummary />
        {/* <PlotSummary /> */}
      </div>
    </div>
    <AlsoLike />
    <ReadersReveiw />
  </div>
);

export default Book;
