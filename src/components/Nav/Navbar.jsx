import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../Autorizacion/autorizacion"

export const Navbar = () => {
    
    const autorizacion = useAuth()
    const navegacion = useNavigate()

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'none'
        }
    }

    const manejarSalida = () => {
        autorizacion.salir()
        navegacion('/')
    }

    return (
        <nav className="navbar">
            <NavLink style={navLinkStyles} to='/'>Inicio</NavLink>
            {
                !autorizacion.usuario ? (
                    <NavLink style={navLinkStyles} to='/ingresar'>Iniciar sesión</NavLink>
                    ) : (
                        <>
                        <NavLink style={navLinkStyles} to='/horario'>Horario</NavLink>
                        <NavLink style={navLinkStyles} to='/citas'>Citas</NavLink>
                        <NavLink style={navLinkStyles} to='/historial'>Historial</NavLink>
                        <NavLink style={navLinkStyles} onClick={manejarSalida}>Salir</NavLink>
                    </>
                )
            }
        </nav>
    )
}