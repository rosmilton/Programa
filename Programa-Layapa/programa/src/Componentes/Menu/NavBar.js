import '../../Estilos/NavBar.css'
import OptionMenu from "./OptionMenu"

function NavBar(props) {
    return (
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{background: 'rgb(0,0,0)'}}>
        <div className="container-fluid d-flex flex-column p-0">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
            <div className="sidebar-brand-icon rotate-n-15" />
            <div className="sidebar-brand-text mx-3"><span>LA YAPA</span></div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="nav navbar-nav text-light" id="accordionSidebar">
            {props.data.map(opcion=><OptionMenu opcion={opcion}/>)}  
          </ul>
        </div>
      </nav>  
    );
}

export default NavBar;
