/* eslint-disable react/prop-types */
import TextComponent from "../../../shared/TextComponent/TextComponent";
import Counter from "../../Counter/Counter";
import { colorDicider } from "../../../helpers/colorDicider";
import "./styles.css";

const Product = (props) => {
  const { name, marca, img, precio, disponible, descuento, stock } = props;
  const className = colorDicider(descuento);

  return (
    <div className="product_container">
      {descuento && (
        <div
          className={` ${className} barra_de_descuento`}
        >{`Tienes un ${descuento}% OFF en ese producto`}</div>
      )}
      <TextComponent text={`Producto : ${name}`} variant="h2" />
      <TextComponent text={` Marca : ${marca}`} variant="h3" />
      <img src={img} alt="zapatilla" />
      <TextComponent text={`Precio : ${precio}`} variant="h4" />
      <TextComponent
        text={disponible ? "Esta en stock" : "Sin Stock"}
        variant="h4"
      />
     { disponible && <TextComponent text={`Stock : ${stock}`} />}
    { disponible && <Counter stock={stock} disponible={disponible} producto={props}/>}
    </div>
  );
};

export default Product;
