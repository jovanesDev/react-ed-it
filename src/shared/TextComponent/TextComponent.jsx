/* eslint-disable react/prop-types */
// import React from "react";
import "./styles.css"

const TextComponent = (props) => {
  const { text,variant } = props;

  const textToRender = text || "No hay texto"


  if(variant === "h1") {
    return (
        <h1>{textToRender}</h1>
    )
  }

  if(variant === "h2") {
    return (
        <h2>{textToRender}</h2>
    )
  }


  if(variant === "h3") {
    return (
        <h3>{textToRender}</h3>
    )
  }

  if(variant === "h4") {
    return (
        <h4>{textToRender}</h4>
    )
  }

  if(variant === "h5") {
    return (
        <h5>{textToRender}</h5>
    )
  }

  if(variant === "h6") {
    return (
        <h6>{textToRender}</h6>
    )
  }

  return (
    <>
      <p>{textToRender}</p>
    </>
  );
};

export default TextComponent;
