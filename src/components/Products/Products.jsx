import { products } from "../../constants/products";
import Product from "./Product/Product";

import "./styles.css";

const Products = () => {
  return (
    <div className="container">
      {products.map((producto) => (
        <Product 
        key={producto.id}
        {...producto}
        // name={producto.name}
        // marca={producto.marca}
        // img={producto.img}
        // precio={producto.precio}
        // disponible={producto.disponible}
        // descuento={producto.descuento}
        />
      ))}
    </div>
  );
};

export default Products;
