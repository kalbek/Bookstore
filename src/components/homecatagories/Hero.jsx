export default function Hero() {
  return (
    <>
      <div className="md:px-8 px-2 mx-auto">
        <div className="text-[330%] md:text-[630%] leading-2 md:leading-[6rem] tracking-auto font-semibold col-span-2 text-black mt-2 h-fit md:mt-8">
          READING MAKES THE WORLD HUGE
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 h-auto mt-4 md:mt-12">
          <div className=" flex flex-col justify-between  rounded-3xl bg-blackbg  p-8 relative  md:overflow-hidden">
            <div className="flex flex-col gap-4 md:gap-12">
              <h1 className="md:text-5xl text-4xl text-white md:w-1/2">
                FIND SOMETHING TO READ
              </h1>
              <p className="text-2xl font-light lg:w-3/5 w-full text-white">
                Fancy something unusual and unpredictable? Funny or exciting? No
                problem. Check out the collections we have prepared for you.
              </p>
            </div>
            <button
              type="submit"
              className="py-4 md:py-6 rounded-3xl  outline outline-crayola text-center text-crayola lg:w-1/3 md:w-2/3 md:mt-4 mt-6 text-lg font-medium"
            >
              BROWSE&nbsp;NOW
            </button>
            <div className="absolute  right-0 bottom-0 md:right-[8.7%]  h-auto w-auto md:bottom-24 md:scale-[160%]">
              <img alt="" srcSet="icon-search.svg" className="" />
            </div>
          </div>
          <div className="flex flex-col md:overflow-hidden justify-between rounded-3xl bg-black relative ">
            <img
              alt="book of the day label"
              srcSet="bookofthedaylabel.svg"
              className="absolute left-2 top-4 w-20 h-20 md:w-24 md:h-24 lg:w-36 lg:h-36"
            />
            <img
              alt="Book of the day"
              srcSet="bookoftheday.png"
              className="object-cover  w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
