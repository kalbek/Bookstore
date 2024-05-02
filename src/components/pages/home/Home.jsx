import React from "react";
import Hero from "../../homecatagories/Hero";
import Bestsellers from "../../homecatagories/Bestsellers";
import WhatToRead from "../../homecatagories/WhatToRead";
import PopularAuthors from "../../homecatagories/PopularAuthors";
import DiscountsAndGifts from "../../homecatagories/DiscountsAndGifts";
import Footer from "../../homecatagories/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Bestsellers />
      <WhatToRead />
      <PopularAuthors />
      <DiscountsAndGifts />
      {/* <Footer /> */}
    </div>
  );
}
