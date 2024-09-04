import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/ProductsPage/ProductsPage";
import Product from "../pages/Product/Product";
import Error404 from "../pages/Error404/Error404";
import AppLayout from "./layouts/AppLayout";
// import Error404 from "../pages/Error404/Error404";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
        </Route>

        <Route path="*" element={<Error404 />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
