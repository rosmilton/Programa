import React from "react";
import "./VentanaProducto.css";
import InputsProductos from "./InputsProductos";

export default function CajaInput() {
  return (
    <>
      <div className="hijo" style={{ flexGrow: 10 }}>
        <form>
          <div className="cuadro">
            <div>
              <InputsProductos
                placeholder="Codigo de Barra"
                className="input is-medium codbarra"
                name="codbarra"
                type="text"
                autoComplete="no"
                onChange=""
                value=""
              />
            </div>
            <div>
              <InputsProductos
                placeholder="Descripción"
                className="input is-medium descripcion"
                name="descripcion"
                type="text"
                autoComplete="no"
                onChange=""
                value=""
              />
            </div>
          </div>
          <div className="cuadro">
            <div>
              <InputsProductos
                placeholder="Articulo"
                className="input is-medium articulo"
                name="articulo"
                type="text"
                autoComplete="no"
                onChange=""
                value=""
              />
            </div>
            <div>
              <InputsProductos
                placeholder="Marca"
                className="input is-medium marca"
                name="marca"
                type="text"
                autoComplete="no"
                onChange=""
                value=""
                readonly="true"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
