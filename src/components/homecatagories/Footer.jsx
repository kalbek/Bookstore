export default function Footer() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* main footer */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-blackbg pl-8 pr-12 py-8">
          <div className="flex gap-4">
            <img alt="small logo" srcSet="smalllogo.svg" />
            <h1 className="text-3xl text-white mt-1 font-medium">
              BIG BOOKSHELF
            </h1>
          </div>
          {/* icons */}
          <ul className="flex gap-8 justify-center items-end md:scale-125">
            <li>
              <img srcSet="insta.svg" alt="instagram icon" />
            </li>
            <li>
              <img srcSet="facebook.svg" alt="facebook icon" />
            </li>
            <li>
              <img srcSet="twitter.svg" alt="twitter icon" />
            </li>
          </ul>
        </div>
        {/* down footer */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-black px-8 py-4 text-gray-400">
          <div className="flex gap-2  ">
            <p>Terms and conditions</p>
            <p>Privacy policy</p>
          </div>
          <div className="flex md:gap-2 flex-col md:flex-row justify-center items-center">
            <p>+44 1332 412251</p>
            <p>support@bbookshelf.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
