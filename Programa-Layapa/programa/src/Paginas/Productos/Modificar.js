import '../../Estilos/Productos.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn
} from "mdbreact";

function Modificar() {
    return (
        <MDBContainer>
            <MDBRow style={{margin:'5%'}}>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header amber darken-2 darken-3 rounded">
                                <h3 className="my-3" style={{color:'white'}}>Modificar Producto</h3>
                            </MDBCardHeader>

                            <label  style={{margin:'5% 0'}} htmlFor="defaultFormPasswordEx" className="grey-text font-weight-light"><strong>Código de Barra</strong></label>
                            <input type="text" id="codBarra" className="form-control" />

                            <label htmlFor="defaultFormPasswordEx" className="grey-text font-weight-light"><strong>Artículo</strong></label>
                            <input type="text" id="codBarra" className="form-control" />

                            <label className="grey-text font-weight-light"><strong>Descripción</strong></label>
                            <input type="text" id="nombre" className="form-control" />

                            <label htmlFor="defaultFormPasswordEx" className="grey-text font-weight-light"><strong>Marca</strong></label>
                            <input type="text" id="codBarra" className="form-control" />

                            <div className="text-center mt-4" >
                                <MDBBtn className="mb-3 amber darken-2 lighten-1" type="submit">Modificar</MDBBtn>
                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Modificar;
