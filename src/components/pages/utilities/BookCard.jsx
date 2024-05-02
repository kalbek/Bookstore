import React from "react";

export default function BookCard({ image, title, author }) {
  return (
    <>
      <div className="relative bg-white padding-4 flex flex-col items-start gap-2 p-6 rounded-2xl w-auto">
        <div className=" rounded-2xl w-full overflow-hidden">
          <img src={image} alt="book" className="w-[100%] " />
          <img src="favorite.svg" alt="" className="absolute right-8 top-8" />
        </div>
        <div className="text-philippinegray text-xl">
          <p>{author}</p>
        </div>
        <div className="text-xl text-verydarkgray">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
