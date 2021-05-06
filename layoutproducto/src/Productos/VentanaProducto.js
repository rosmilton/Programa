import React from "react";
import "./VentanaProducto.css";
import CajaInput from "./CajaInput";
import CajaBotones from "./CajaBotones";
import CajaLista from "./CajaLista";
import Buscardor from "./Buscador";

export default function VentanaProducto() {
  return (
    <>
      <section className="section">
        <div className="container cont1">
          <CajaInput />
          <CajaBotones />
        </div>
        <div className="container cont2">
          <CajaLista />
        </div>
        <div className="container cont2">
          <Buscardor />
        </div>
      </section>
    </>
  );
}
