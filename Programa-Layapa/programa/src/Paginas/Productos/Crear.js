import '../../Estilos/Productos.css'
import React, { useState, useEffect } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardHeader
} from "mdbreact";
import FormGroup from "../../Componentes/Forms/FormGroup"
import AlertCustom from "../../Componentes/AlertCustom"
import { Form, Button, Spinner } from 'react-bootstrap';
import firebase from "../../Config/firebase"
import MDBListGroupItems from "../../Componentes/Forms/MDBListGroupItems"
import Table from 'react-bootstrap/Table'

function Crear() {

    const marcas = [];
    const [lmarcas, setLmarcas] = useState(marcas);
    const [form, setForm] = useState({ codBarra: "", articulo: "", marca: "", descripcion: "" });
    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState({ variant: "", text: "" });

    useEffect(
        () => {
            // ------------------

            firebase.db.collection("marcas")
                .get()
                .then(function (querySnapshot) {
                    let marcasAux=[];
                    querySnapshot.forEach(function (doc) {
                        
                        marcasAux=[...marcasAux,doc.data()]
                    });
                    console.log("mArcas",marcasAux)
                    setLmarcas(marcasAux);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });

        }, []
    )



    const handleSubmit = (e) => {
        e.preventDefault();
        Spinner = true;
        firebase.db.collection("productos").add({
            codBarra: form.codBarra,
            articulo: form.articulo,
            marca: form.marca,
            descripcion: form.descripcion
        })
            .then((data) => {
                setSpinner(false);
                console.log(data)
                setAlert({ variant: "success", text: "Se creo correctamente el producto" });
            })
            .catch((err) => {
                console.log(err)
                setSpinner(false);
                setAlert({ variant: "danger", text: "No se creo el producto" });
            })

    }

    const handleChange = (e) => {

        const target = e.target;
        const value = target.value
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });

    }

    return (
        <MDBContainer>
            <MDBRow style={{ margin: '5%' }}>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header success-color rounded">
                                <h3 className="my-3" style={{ color: 'white' }}>Crear Producto</h3>
                            </MDBCardHeader>
                            <form onSubmit={handleSubmit}>
                                <FormGroup label="Código de Barra" type="text" placeholder="Ingrese su Código de Barra" name="codBarra" value={form.codBarra} change={handleChange} />
                                <FormGroup label="Articulo" type="text" placeholder="Ingrese su articulo" name="articulo" value={form.articulo} change={handleChange} />
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control as="textarea" rows={7} name="descripcion" value={form.descripcion} change={handleChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    {
                                        spinner &&
                                        <Spinner animation="border" variant="light" size="sm" />
                                    }
                                Crear
                                </Button>
                            </form>
                            <AlertCustom variant={alert.variant} text={alert.text} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header success-color rounded">
                                <h3 className="my-3" style={{ color: 'white' }}>Crear Marca</h3>
                            </MDBCardHeader>
                            <form onSubmit={handleSubmit}>
                                <FormGroup label="Marca" type="text" placeholder="Ingrese su marca" name="marca" value={form.marca} change={handleChange} />

                                <Button variant="primary" type="submit">
                                    {
                                        spinner &&
                                        <Spinner animation="border" variant="light" size="sm" />
                                    }
                                Crear Marca
                                </Button>
                            </form>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                    {lmarcas.map((e) => <MDBListGroupItems parametro={e} />)}
                                    </tr>
                                </tbody>
                            </Table>
                            <AlertCustom variant={alert.variant} text={alert.text} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer >
    );
}

export default Crear;
