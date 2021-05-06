
import React from "react";

function MDBListGroupItems(props) {
    return (
        <>
            <td>
                {props.parametro.nombre}{console.log("Aca esta 12 " + props.parametro.nombre)}
            </td>
        </>
    );
}

export default MDBListGroupItems;