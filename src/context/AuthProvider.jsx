/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext("");

// function prueba () {

//     setTimeout(() => {
//         console.log('Tarea 1')
//     },0)

//     console.log('Tarea 2')
// }

// prueba()
//     //1 Tarea 2 
//     //2 Tarea 1
// //

//! 1) generar un context con el metodo createContext y exportar para hacer referencia mas adelante
//! 2) con el nombre del context "AuthContext" , retornar en el JSX como AuthContext.Provider y envolver el children

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    nombre: "Fulano Fulnandez",
    email: "fulano@fulnandez.com.ar",
  });

  const handleChangeUser = () =>
    setUser({
      nombre: "Emilio Mendez",
      email: "EmilioJSX@gmail.com",
    });
  return (
    <AuthContext.Provider value={{ user, handleChangeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
