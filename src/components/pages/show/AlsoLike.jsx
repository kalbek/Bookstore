import BookList from "../../productcomponents/BookList";
import BookCard from "../utilities/BookCard";

export default function AlsoLike() {
  return (
    <>
      <div className="flex flex-col justify start">
        <p className="text-3xl font-semibold text-verydarkgray p-4 ml-4"> YOU MAY ALSO LIKE</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {BookList.slice(0, 5).map((book, index) => (
            <div key={0}>
              <BookCard
                image={book.image}
                title={book.title}
                author={book.author}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
