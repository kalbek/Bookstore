import Banner from "../../productcomponents/Banner";
import Top from "../../productcomponents/Top";
import ProductCards from "../../productcomponents/ProductCards";
import Pagination from "../../productcomponents/Pagination";

const Products = () => (
  <>
    <div className="pb-4">
      <Banner />
      <Top />
      <ProductCards />
      <Pagination />
    </div>
  </>
);

export default Products;
