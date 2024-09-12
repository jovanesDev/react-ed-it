import {useState,useEffect} from "react";
import useValidation from "./useValidation";

const useCreateProduct = ({id}) => {

    const inputs = [
        {
            name:"name",
            type:"text",
            placeholder:"Nombre"
        },
        {
            name:"marca",
            type:"text",
            placeholder:"Marca"
        },
        {
            name:"img",
            type:"text",
            placeholder:"url del imagen"
        },
        {
            name:"precio",
            type:"number",
            placeholder:"$"
        },
        {
            name:"stock",
            type:"number",
            placeholder:"stock"
        },

    ]

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

  const validationData = {
    id: producto.id,
    name: producto.name,
    marca: producto.marca,
    img: producto.img,
    precio: producto.precio,
    stock:producto.stock
  }
  const { error } =  useValidation({data:validationData})

  const handleChange = (e) => {
    const {name,value} = e.target
    setProducto({
        ...producto,
        [name]:value
    })
  }

  useEffect(() => {
    setProducto({
      ...producto,
      id,
    });
  }, []);
  
  return {
    producto,
    inputs,
    error,
    handleChange,
    setProducto
  };
};

export default useCreateProduct;
