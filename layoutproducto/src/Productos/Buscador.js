import React from "react";
import "./VentanaProducto.css";
import InputsProductos from "./InputsProductos";

export default function Buscador() {
  return (
    <>
     <div className="Buscador">
     <InputsProductos
                placeholder="Buscar"
                className="input is-medium buscar"
                name="buscar"
                type="text"
                autoComplete="no"
                onChange=""
                value=""
                readonly="false"
              />
      </div>
     </>
  );
}