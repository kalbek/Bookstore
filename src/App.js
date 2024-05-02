import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/homecatagories/Layout";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import Book from "./components/pages/show/Book";
import Books from "./components/pages/Books";
import Categories from "./components/pages/Categories";
import Header from "./components/homecatagories/Header";
import "./App.css";

const App = () => (
  <>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Products />} />
            <Route path="/book_details" element={<Book />} />
            {/* <Route index element={<Books />} />
            <Route element={<Header />} />
            <Route path="/categories" element={<Categories />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>
);

export default App;
