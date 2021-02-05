import React from "react";

// falta mostrar links no se hacerlo

export function Navbar(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        {props.logo.src}, {props.logo.alt}
      </div>
    </div>
  );
}
