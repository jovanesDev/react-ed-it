/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import useCreateProduct from "../../hooks/useCreateProduct";
import "./style.css";

const CreateProduct = ({ handleSetOpen, handleAddProduct, id }) => {
  const { producto, inputs, error, handleChange } = useCreateProduct({ id });
  console.log(error)

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddProduct(producto);
        }}
        action=""
      >
        <h1> Crear Nuevo Producto</h1>
        {inputs.map((input, index) => (
          <input  key={index} onChange={handleChange} {...input} />
        ))}
        <button>Agregar Producto</button>
        <button onClick={handleSetOpen}>Cancelar</button>
      </form>
    </div>
  );
};

export default CreateProduct;
