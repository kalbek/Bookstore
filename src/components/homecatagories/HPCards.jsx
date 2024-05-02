import React from "react";
import PropTypes from "prop-types";

export default function HPCards({
  isFirstInRow,
  image,
  imageAlt,
  author,
  title,
  commentno,
  rating,
  rateno,
  canceledPrice,
  currentPrice,
}) {
  return (
    <div
      className={`rounded-[40px] p-4 mb-2 w-full bg-white w-fit flex h-fit object-contain gap-2 flex-col md:flex-row relative ${
        isFirstInRow ? "" : ""
      }`}
    >
      <img
        alt={imageAlt}
        srcSet={image}
        className="rounded-[40px] w-full md:w-2/5  "
      />
      <div className="flex justify-between">
        <div className="flex flex-col h-full gap-10 justify-between">
          <div className="flex flex-col items-start">
            <p className="text-gray-800 text-3xl md:text-lg font-medium">
              {author}
            </p>
            <p className="text-gray-600 text-3xl md:text-lg font-semibold">
              {title}
            </p>
          </div>
          <div className="flex flex-col w-fit gap-2 text-3xl md:text-lg">
            <span className="outline outline-1 w-fit outline-black rounded-3xl px-3 py-1 flex gap-2">
              <p>{commentno}</p>
              <img alt="comment ballon" srcSet="baloon.svg" />
            </span>
            <span className="outline outline-1 w-fit outline-black rounded-3xl px-3 py-2 flex gap-2">
              <p>{rating}</p>
              <img alt="" srcSet="star.svg" />
              <p>{`(${rateno})`}</p>
            </span>
          </div>
          <div className="flex gap-4 flex-wrap text-4xl md:text-2xl">
            <div className=" text-gray-400 line-through font-medium">
              {canceledPrice}
            </div>
            <div className="  text-black">
              <p className="tracking-tight">{currentPrice}</p>
            </div>
          </div>
        </div>
        <span>
          <img
            srcSet="favorite.svg"
            alt=""
            className="md:top-6  mt-2 md:mt-0 right-6 absolute scale-[120%] cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
}
HPCards.propTypes = {
  isFirstInRow: PropTypes.bool.isRequired,
};
