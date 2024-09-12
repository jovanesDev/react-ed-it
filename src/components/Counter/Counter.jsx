/* eslint-disable react/prop-types */
import CustomBtn from "../../shared/CustomButton/CustomBtn";
import TextComponent from "../../shared/TextComponent/TextComponent";
import "./styles.css";
import useCounter from "../../hooks/useCounter";

const Counter = (props) => {
  const { stock, producto, disponible } = props;
  const {contador,handleSumar,handleRestar,handleAgregarCarrito}  = useCounter({stock,producto})

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
