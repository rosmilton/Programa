import React,{useState} from "react";
import './App.css';
import NavBar from './Componentes/Menu/NavBar'
import RoutesWeb from "./Componentes/RoutesWeb/RoutesWeb"
import {BrowserRouter} from "react-router-dom"

function App() {
  const [opciones, setOpciones] = useState([
        {
      path: "/Productos",
      label: "Productos",
      fa: "fa-briefcase"
    },
    {
      path: "/Stock",
      label: "Stock",
      fa: "fa-building"
    },
    {
      path: "/Ventas",
      label: "Ventas",
      fa: "fa-balance-scale"
    },
    {
      path: "/Ingresar",
      label: "Ingresar",
      fa: "fa-user"
    },
    {
      path: "/Registro",
      label: "Registro",
      fa: "fa-registered"
    }
  ])
  return (
    <body id="page-top">
      <div id="wrapper">
        <BrowserRouter>
          <NavBar data={opciones} />
          <RoutesWeb />
        </BrowserRouter>        
      </div>

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
      <script src="assets/js/theme.js"></script>
    </body>
  );
}

export default App;
