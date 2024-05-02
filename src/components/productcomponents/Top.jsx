const Top = () => (
  <div className="w-full flex flex-col md:flex-row justify-between px-4 md:px-8 py-10 bg-blackbg items-start">
    {/* top filter results and tags */}
    <div className="flex justify-between  w-full px-4">
      <div className="flex gap-10 justify-center items-center">
        <div className="flex flex-col md:flex-row gap-2">
          <p className="text-white text-xl md:text-3xl">FILTER</p>
          <p className="text-gray-600 text-lg md:text-3xl">120 results</p>
        </div>
        {/* tags container */}
        <div className="grid grid-cols-2 md:flex gap-2 justify-start flex-wrap">
          {/* the tags */}
          <div className="rounded-[25px] bg-black p-4 text-start">
            <p className="text-gray-300 text-sm md:text-lg">Reset&nbsp;all</p>
          </div>
          <div className="rounded-[25px] bg-zinc-700 px-3 md:px-5 py-2 md:py-4 flex justify-between items-center gap-2 w-fit">
            <p className="text-gray-200 text-sm md:text-lg">English</p>
            <img srcSet="clearbtn.svg" alt="clear button" />
          </div>
          <div className="rounded-[25px] bg-zinc-700 px-3 md:px-5 py-2 md:py-4 flex justify-between items-center  gap-2 w-fit">
            <p className="text-gray-200 text-sm md:text-lg">
              Hardcove fasdfasdr
            </p>
            <img srcSet="clearbtn.svg" alt="clear button" />
          </div>
          <div className="rounded-[25px] bg-zinc-700 px-3 md:px-5 py-2 md:py-4 flex justify-between items-center gap-2">
            <p className="text-gray-200 text-sm md:text-lg">Rib&nbsp;Knits</p>
            <img srcSet="clearbtn.svg" alt="clear button" />
          </div>
        </div>
      </div>
    </div>
    {/* featured filters */}
    <select
      name=""
      id=""
      className="bg-inherit text-white flex p-2 md:mr-20 mt-4 md:mt-0 w-full justify-between outline outline-white outline-2 rounded-[15px] md:w-[30%] md:h-[70px] cursor-pointer text-lg  "
    >
      <option
        className="bg-zinc-700 text-gray-200 font-semibold py-4 text-lg"
        value="featured"
      >
        FEATURED
      </option>
      <option
        className="bg-zinc-700 text-gray-200 font-semibold py-4 text-lg"
        value="new"
      >
        NEW
      </option>
      <option
        className="bg-zinc-700 text-gray-200 font-semibold py-4 text-lg"
        value="popular"
      >
        POPULAR
      </option>
    </select>
  </div>
);

export default Top;
