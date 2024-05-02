const PopularAuthorCards = () => (
  <div className="rounded-[20px] bg-white w-fit md:w-full flex h-fit object-contain gap-2 relative ">
    <img
      alt="dostoyevskiy."
      srcSet="dostoyevskiy.png"
      className="rounded-s-[20px]  h-full w "
    />
    <div className="flex items-start space-between gap-5 pr-2 pt-2">
      <div className="flex items-start flex-col justify-between  ">
        <p className="font-lighter text-lg text-base text-gray-500">20 books</p>
        <h1 className="text-xl text-gray-900 mt-6">
          Fyodor
          <br />
          Dostoyevskiy
        </h1>
        &nbsp;
      </div>
      <span>
        <img srcSet="favorite.svg" alt="" className="cursor-pointer scale-[120%]" />
      </span>
    </div>
  </div>
);

export default PopularAuthorCards;
