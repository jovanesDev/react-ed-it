import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const {user,handleChangeUser} = useContext(AuthContext)
  return (
    <>
      <div>
        <h1>Bienvenido a nuestra tienda {user.nombre} </h1>
        <button onClick={handleChangeUser}>Cambiar usuario</button>
      </div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        explicabo natus quod, est cupiditate incidunt quia obcaecati, veniam
        maxime vitae quaerat. A veritatis quisquam sapiente? A iste laudantium
        repudiandae voluptatibus?
      </p>
    </>
  );
};

export default Home;
