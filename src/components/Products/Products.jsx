import { useEffect, useState } from "react";
import { products } from "../../constants/products";
import Product from "./Product/Product";
// import bgStyleTypes from "../../config/bgStyleTypes.json"

import "./styles.css";

const Products = () => {

  //bgStyleTypes.neutro => bg-neutro
  //bgStyleTypes["neutro"] => bg-neutro
  // const {neutro} = bgStyleTypes

  // 1) player.name 
  // 2) player["name"] => Messi 
  // 3) const {name} = player




  // stado => loading , animales 
  // loading true 
  // animales []
  // peticion 
  // loading false 
  // animales ["leon","bufalo"]
  // boton refresh 
  // animales []
  // loading true 
  // lanzo la peticion 
  // animales ["leon","gato","caballo"]
  // loading false 




  // cargo => useEffect => change(bg-neutro => bg-light) => se muere (hay que mostrar con fondo blanco) => vuelve a cargar pero ya con fondo blanco (bg-light)



// appMode ? bg-neutro => 3s despues bg-light 
// appMode ? bg-light => 3s despues bg-light ? 

const [appMode,setAppMode] = useState("bg-neutro")
const [darkMode,setDarkMode] = useState(false)


useEffect(() => {
  // el componente se renderizo correctamente ⬇️
  // mount 
  if(darkMode){
    setAppMode('bg-dark')
  }else {
      setAppMode('bg-light')
    // setTimeOut = metodo de javascript que hace esperar  x cantidad de tiempo antes de ser ejecutado
  }
}, [ darkMode ]) // watch , changes, => estar atento a estos valores 

// appMode !== bg-light ? "sol" : "luna" 

//version antigua 
// const handleSetDarModeTrue = () => setDarkMode(true)
// const handleSetDarkModeFalse = () => setDarkMode(false)

// = asignacion (valor cualquiera )
// == ? comparacion => booleano
// === ? comparacion => booleano
// !== ? comparacion => booleano 

// version nueva 
const handleToggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`container ${appMode}`}>
      <div>
        <button style={{fontSize:"40px",padding:"10px 30px"}} onClick={handleToggleDarkMode}>{ darkMode ? "🌞" : "🌙" }</button>
      </div>
      {products.map((producto) => (
        <Product 
        key={producto.id}
        {...producto}
        />
      ))}
    </div>
  );
};

export default Products;
