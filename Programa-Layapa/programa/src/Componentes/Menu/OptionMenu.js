import React from "react";
import { Link } from 'react-router-dom'

function OptionMenu(props) {
    const { opcion } = props;

    return (
        <li className="nav-item">
            <Link className="nav-link active" as={Link} to={opcion.path}>
                <i className={`fas ${ opcion.fa }`}  />
                <span>  {opcion.label}</span>
            </Link>
        </li>
    )

}

export default OptionMenu;