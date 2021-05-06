import React from "react";
import "./CajaLista.css";

export default function CajaLista() {
  return (
    <>
      <div className="CuadroLista">
        <table>
          <thead>
            <tr>
              <th className="colcodbarra">Cod. Barra</th>
              <th className="coldescripcion">Descripcion</th>
              <th className="colarticulo">Articulo</th>
              <th className="colmarca">Marca</th>
            </tr>
          </thead>
         
        </table>
      </div>
    </>
  );
}
