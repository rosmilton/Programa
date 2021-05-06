import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { MDBRow, MDBCol } from "mdbreact";
import '../../Estilos/Productos.css'

function Productos() {
    return (        
            <MDBCol style={{ margin: '5%' }}>
                <Button as={Link} to='/Crear' variant="success" className="unacolumna" style={{ width: '100%', padding: '10%' }}>Crear</Button>{' '}
                <MDBRow>
                    <MDBCol md="6">
         
                        <Button as={Link} to='/Modificar' variant="warning" className="doscolumna" style={{ width: '100%', padding: '10%' }}>Modificar</Button>{' '}
                    </MDBCol>
                    <MDBCol md="6">
                        <Button as={Link} to='#' variant="danger" className="doscolumna" style={{ width: '100%', padding: '10%' }}>Eliminar</Button>{' '}
                    </MDBCol>
                </MDBRow>
            </MDBCol>
    );
}

export default Productos;
