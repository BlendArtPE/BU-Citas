import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Autorizacion/autorizacion";
import { useEffect } from "react";
import navbardom from "./navbardom.js"; // Ajusta la ruta según la ubicación de tu archivo

export const Navbar = () => {
  const autorizacion = useAuth();
  const navegacion = useNavigate();

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      cursor: "pointer",
    };
  };

  const manejarSalida = () => {
    autorizacion.salir();
    navegacion("/");
  };

  useEffect(() => {
    // Llama a la función definida en miScript.js cuando el componente se monta
    navbardom.responsive();
  }, []);

  return (
    <nav>
      <h1 id="logo">UNT</h1>
      <div id="hamburguer">
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <ul id="nav-elements">
                <li><NavLink className="navLink" style={navLinkStyles} to='/'>Inicio</NavLink></li>
                <li><NavLink className="navLink" style={navLinkStyles} to='/horario'>Horario</NavLink></li>
                <li><NavLink className="navLink" style={navLinkStyles} to='/historial'>Historial</NavLink></li>            
        {!autorizacion.usuario ? (
                <li><NavLink className="navLink" style={navLinkStyles} to='/ingresar'>Iniciar sesión</NavLink></li>
            ) : (
                <li><NavLink className="navLink" style={navLinkStyles} onClick={manejarSalida}>Salir</NavLink></li>
            )
        }
      </ul>
      <script src="./navbardom"></script>
    </nav>
  );
};
