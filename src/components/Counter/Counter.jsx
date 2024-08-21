/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomBtn from "../../shared/CustomButton/CustomBtn";
import TextComponent from "../../shared/TextComponent/TextComponent";
import "./styles.css";

const Counter = (props) => {
  const { stock, producto, disponible } = props;
  const [contador, setContador] = useState(0);

  const handleSumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const handleRestar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleAgregarCarrito = () => {
    const productoFinal = { ...producto, cantidad: contador };

    console.log(productoFinal);
  };

  return (
    <>
      <div className="counter_container">
        <CustomBtn clickFn={handleRestar} btnText={"Restar"} />
        <TextComponent text={contador.toString()} variant="h6" />
        <CustomBtn clickFn={handleSumar} btnText={"Sumar"} />
      </div>
      <div>
        <CustomBtn
          clickFn={handleAgregarCarrito}
          disabled={!disponible}
          btnText="Agregar al carrito"
        />
      </div>
    </>
  );
};

export default Counter;
