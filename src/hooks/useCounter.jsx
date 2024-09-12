import { useState } from "react";

const useCounter = ({stock,producto}) => {
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

  return {
    contador,
    handleRestar,
    handleSumar,
    handleAgregarCarrito
  };
};

export default useCounter;
