import React, { useState } from "react";
import ResetAll from "./ViewResetAction";

const PriceRangeSetter = () => {
  // Initialize state for minimum and maximum prices
  const [minPrice, setMinPrice] = useState(9);
  const [maxPrice, setMaxPrice] = useState(60);

  // Event handler to update minimum price
  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value, 10);
    setMinPrice(newMinPrice);
  };

  // Event handler to update maximum price
  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value, 10);
    setMaxPrice(newMaxPrice);
  };

  // Event handler for Enter key press on input boxes
  const handleInputKeyPress = (event, isMin) => {
    if (event.key === "Enter") {
      if (isMin) {
        setMinPrice(parseInt(event.target.value, 10));
      } else {
        setMaxPrice(parseInt(event.target.value, 10));
      }
    }
  };
  return (
    <>
      <div className="flex flex-col items-start w-fit gap-6">
        {/* range displayer */}
        <div className="flex gap-4 items-center text-zinc-900 font-normal text-2xl">
          {/* min range */}
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            onKeyDown={(e) => handleInputKeyPress(e, true)}
            className="rounded-lg bg-zinc-200 p-4 w-1/5"
          />
          <p> to </p>
          {/* max range */}
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            onKeyDown={(e) => handleInputKeyPress(e, false)}
            className="rounded-lg bg-zinc-200 p-4 w-1/5"
          />
        </div>
        {/* Slider for minimum price */}
        <div className="flex text-black">
          <input
            type="range"
            name="minPrice"
            value={minPrice}
            min="0"
            max="9"
            onChange={handleMinPriceChange}
            className="w-1/3"
          />
          {/* Slider for maximum price */}
          <input
            type="range"
            name="maxPrice"
            value={maxPrice}
            min="10"
            max="100"
            onChange={handleMaxPriceChange}
            className="w-full -ml-1"
          />
        </div>
        <ResetAll actionName="RESET" />
        {/* <div className="w-1/3">
          <Slider range step={25} min={3} max={60}
           value={maxPrice} onChange={handleMaxPriceChange}/>
        </div> */}
      </div>
    </>
  );
};

export default PriceRangeSetter;
