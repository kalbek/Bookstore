import React from "react";

export default function BuyButton({ textName }) {
  return (
    <>
      <div className="w-full  p-4 rounded-xl bg-crayola cursor-pointer">
        <p
          className={`${
            textName === "buynow" ? "text-black" : "text-philippinegray"
          }`}
        >
          {textName === "buynow" ? (
            <p className="text-right whitespace-nowrap font-bolder"> BUY NOW</p>
          ) : (
            <p className="text-right whitespace-nowrap font-bolder">
              ADD TO BAG
            </p>
          )}
        </p>
      </div>
    </>
  );
}
