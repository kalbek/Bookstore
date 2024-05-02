import HPCards from "./HPCards";
import SeeAll from "./SeeAll";
import BookList from "../productcomponents/BookList";

export default function Bestsellers() {
  return (
    <div className="bg-blackbg w-full my-4 h-auto px-10 pb-20">
      <h1 className="text-white font-medium text-2xl py-10">BESTSELLERS</h1>
      <div className="flex flex-col gap-2 flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {BookList.map((books, index) => (index !== 4 ? (
          <HPCards
            key={0}
            image={books.image}
            imageAlt={books.imgalt}
            author={books.author}
            title={books.title}
            commentno={books.commentno}
            rating={books.rating}
            rateno={books.rateno}
            canceledPrice={books.canceledPrice}
            currentPrice={books.currentPrice}
          />
        ) : (
          <div key={0}>
            {" "}
            <SeeAll />
          </div>
        )))}
      </div>
    </div>
  );
}
