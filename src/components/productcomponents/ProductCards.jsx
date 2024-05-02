import Cards from "./Cards";
import BookList from "./BookList";
import Filter from "./Filter";

const ProductCards = () => (
  <div className="bg-blackbg w-full  h-auto px-10 pb-20">
    <div className="flex flex-col md:flex-row gap-2">
      <Filter />
      <div className="flex flex-col gap-2 flex-wrap md:grid md:grid-cols-3">
        {BookList.map((card, index) => (
          <Cards
            image={card.image}
            imageAlt={card.imgalt}
            author={card.author}
            title={card.title}
            commentno={card.commentno}
            rating={card.rating}
            rateno={card.rateno}
            canceledPrice={card.canceledPrice}
            currentPrice={card.currentPrice}
            key={0}
          />
        ))}
      </div>
    </div>
  </div>
);

export default ProductCards;
