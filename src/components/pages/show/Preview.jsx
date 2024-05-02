import React from "react";
import BuyButton from "../utilities/BuyButton";

const Preview = () => (
  <div>
    <div className="flex">
      <div className="flex flex-col md:flex-row gap-4 mt-8  relative">
        <img srcSet="muscle.png" alt="" className="rounded-2xl object-cover" />
        <div className="flex flex-col items-start justify-between gap-4">
          <div className="flex flex-col items-start justify-between gap-2">
            <h3 className="text-2xl">Alan Trotter</h3>
            <h1 className="text-4xl">MUSCLE</h1>
          </div>
          <div className="  flex justify-between gap-8 font-light">
            <span className="flex gap-1">
              <img alt="" srcSet="whitestar.svg" />
              <p className="text-xl float-right">4.5&nbsp;(100)</p>
            </span>
            <span>
              <p className="text-xl">
                <u>4&nbsp;reviews</u>
              </p>
            </span>
          </div>
          <div className="group-2 flex gap-6 font-semibold">
            <ul>
              <li>
                <p>Category</p>
              </li>
              <li>
                <p>Publish Date</p>
              </li>
              <li>
                <p>Language</p>
              </li>
              <li>
                <p>Pages</p>
              </li>
              <li>
                <p>Read Times</p>
              </li>
              <li>
                <p>Type</p>
              </li>
              <li>
                <p>Publisher</p>
              </li>
            </ul>
            <ul>
              <li>
                <p className="font-light">Novel</p>
              </li>
              <li>
                <p className="font-light">May 2007</p>
              </li>
              <li>
                <p className="font-light">English</p>
              </li>
              <li>
                <p className="font-light">208</p>
              </li>
              <li>
                <p className="font-light">4-6 hours</p>
              </li>
              <li>
                <p className="font-light">Hardcover</p>
              </li>
              <li>
                <p className="font-light">Hervik Secker</p>
              </li>
            </ul>
          </div>
          <div className="flex gap-6">
            <h1 className="text-philippinegray text-4xl">$12.50</h1>
            <h1 className="text-white text-4xl">$10.50</h1>
          </div>
          <div className="flex gap-4">
            <BuyButton textName="buynow" />
            <BuyButton />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Preview;
