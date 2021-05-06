import React from "react";
import "./VentanaProducto.css";
import BotonesProducto from "./BotonesProducto";

export default function CajaBotones() {
  return (
    <>
      <div className="hijo" style={{ flexGrow: 0 }}>
          <h1 style={{
            fontSize: "24px",
            fontWeight: 'bold',
            textAlign: "center"
          }}>Marca</h1>
        <div className="btones">
          <div>
            <BotonesProducto
              classname="button is-large"
              texto="Crear"
              onClick=""
            />
          </div>
          <div>
            <BotonesProducto
              classname="button is-large"
              texto="Elegir"
              onClick=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
