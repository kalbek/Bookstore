import PopularAuthorCards from "./PopularAuthorCards";
import SeeAllPopularAuthors from "./SeeAllPopularAuthors";

const PopularAuthors = () => (
  <>
    <div className="bg-blackbg w-full my-4 h-auto px-10 pb-10">
      <h1 className="text-3xl text-white my-6">POPULAR AUTHORS</h1>
      <div className="flex flex-col gap-2 flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(10)].map((_, index) => (index !== 9 ? (
          <PopularAuthorCards key={0} />
        ) : (
          <div key={0}>
            {" "}
            <SeeAllPopularAuthors />
          </div>
        )))}
      </div>
    </div>
  </>
);

export default PopularAuthors;
