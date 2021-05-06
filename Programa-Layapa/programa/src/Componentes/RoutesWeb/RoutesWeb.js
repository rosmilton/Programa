import {Route} from "react-router-dom"
import productos from "../../Paginas/Productos/Productos"
import stock from "../../Paginas/Stock"
import ventas from "../../Paginas/Ventas"
import ingreso from "../../Paginas/Ingreso";
import registro from "../../Paginas/Registro";
import Crear from "../../Paginas/Productos/Crear";
import Modificar from "../../Paginas/Productos/Modificar";

function RoutesWeb() {
  
  return (
      <>
          <Route path="/Productos" exact component={productos}/>
          <Route path="/Stock" exact component={stock}/>
          <Route path="/Ventas" exact component={ventas}/>
          <Route path="/Ingreso" exact component={ingreso}/>
          <Route path="/Registro" exact component={registro}/>
          <Route path="/Crear" exact component={Crear}/>
          <Route path="/Modificar" exact component={Modificar}/>
      </>
  );
}

export default RoutesWeb;
