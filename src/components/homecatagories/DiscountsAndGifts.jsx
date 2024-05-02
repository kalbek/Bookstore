import Discounts from "./Discounts";
import BestGiftBooks from "./BestGiftBooks";

const DiscountsAndGifts = () => (
  <>
    <div className="flex flex-col md:flex-row p-8 gap-4 w-full h-[50%]">
      <Discounts />
      <BestGiftBooks />
    </div>
  </>
);

export default DiscountsAndGifts;
