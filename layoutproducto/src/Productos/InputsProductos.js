import React from "react";
import "./InputsProductos.css";

export default function InputsProductos(props) {
  return (
    <>
      <div className="field">
        <div className="control">
          <input
            className={props.className}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            value={props.value}   
            readonly={props.readonly}
            required
             />
        </div>
      </div>
    </>
  );
}
