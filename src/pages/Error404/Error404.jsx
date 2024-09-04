import img404 from "../../assets/404.jpg";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  
  const navigate = useNavigate();

  return (
    <div>
      <h1>El producto que buscas no existe</h1>
      <div>
        <img src={img404} style={{ width: "1000px" }} alt="img404" />
      </div>
      <button
        onClick={() => navigate("/")}
        style={{ padding: " 0 100px ", margin: "100px 0" }}
      >
        Ir a Inicio
      </button>
    </div>
  );
};

export default Error404;
