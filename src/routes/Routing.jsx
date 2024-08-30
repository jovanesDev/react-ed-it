import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/ProductsPage/ProductsPage";
import WithNavbarAndFooter from "../layout/WithNavbarAndFooter"
// import Error404 from "../pages/Error404/Error404";

const Routing = () => {
  return (
    <BrowserRouter>
      <WithNavbarAndFooter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="*" element={<Error404 />} /> */}
          {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
        </Routes>
      </WithNavbarAndFooter>
    </BrowserRouter>
  );
};

export default Routing;
