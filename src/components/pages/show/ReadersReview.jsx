import BookList from "../../productcomponents/BookList";
import ReviewsCard from "../utilities/ReveiwsCard";
import Reviews from "./Reviews";

export default function ReadersReveiw() {
  return (
    <>
      <div className="flex flex-col justify start">
        <p className="text-3xl font-semibold text-verydarkgray p-4 ml-4">
          {" "}
          READERS REVIEW
        </p>
        <div className="pb-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Reviews.map((review, index) => (
            <div key={0}>
              <ReviewsCard
                reviewerName={review.name}
                blob={review.img}
                date={review.date}
                reveiwRating={review.starCount}
                review={review.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
