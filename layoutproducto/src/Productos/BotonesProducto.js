import React from "react";
import "./BotonesProducto.css";

export default function BotonesProducto(props) {
  return (
    <>
      <div className="field">
        <div className="control">
          <div class="buttons">
            <button className={props.classname} onClick={props.onClick}>{props.texto}</button>
          </div>
        </div>
      </div>
    </>
  );
}
