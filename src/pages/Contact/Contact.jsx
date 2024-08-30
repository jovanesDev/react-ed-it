import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Contact = () => {
  return (
    <>
      <h1>Contacto</h1>
      <div style={{ margin: "20px 0" }}>
        <Link className="btn" to={"/"}>
          Volver al Home
        </Link>
      </div>
    </>
  );
};

export default Contact;
