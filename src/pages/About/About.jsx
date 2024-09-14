/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const About = () => {
  const { user, handleChangeUser } = useContext(AuthContext);
  return (
    <div>
      <div>
        <h1>Bienvenido a nuestra tienda {user.nombre} </h1>
        {/* <button onClick={handleChangeUser}>Cambiar usuario</button> */}
      </div>
      <h1>About</h1>
    </div>
  );
};

export default About;
