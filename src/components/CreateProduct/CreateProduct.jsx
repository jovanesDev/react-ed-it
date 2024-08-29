/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./style.css";

const CreateProduct = ({ handleSetOpen,handleAddProduct, id }) => {
  const [producto, setProducto] = useState({
    id: "",
    name: "",
    marca: "",
    img: "",
    precio: "",
    disponible: false,
    descuento: null,
    stock: "",
  });

  useEffect(() => {
    setProducto({
      ...producto,
      id,
    });
  }, []);

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault()
        handleAddProduct(producto)
      } } action="">
        <h1> Crear Nuevo Producto</h1>
        <input
          onChange={({ target: { value } }) =>
            setProducto({ ...producto, name: value })
          }
          type="text"
          name=""
          id=""
          placeholder="Nombre"
        />
        <input
          onChange={({ target: { value } }) =>
            setProducto({ ...producto, marca: value })
          }
          type="text"
          name=""
          id=""
          placeholder="Marca"
        />
        <input
          onChange={({ target: { value } }) =>
            setProducto({ ...producto, img: value })
          }
          type="text"
          name=""
          id=""
          placeholder="url del imagen"
        />
        <input
          onChange={({ target: { value } }) =>
            setProducto({ ...producto, precio: Number(value)  })
          }
          type="number"
          name=""
          id=""
          placeholder="$"
        />
        <button>Marca como Disponible </button>
        <button>Agregar descuento </button>
        <input type="number" name="" id="" placeholder="%" />
        <input
          onChange={({ target: { value } }) =>
            setProducto({ ...producto, stock: Number(value) })
          }
          type="number"
          name=""
          id=""
          placeholder="stock "
        />
        <button>Agregar Producto</button>
        <button onClick={handleSetOpen}>Cancelar</button>
      </form>
    </div>
  );
};

export default CreateProduct;
