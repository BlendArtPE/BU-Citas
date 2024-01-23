import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./autorizacion"

// eslint-disable-next-line react/prop-types
export const AutorizacionRequerida = ({children}) => {
    const location = useLocation()
    const autorizacion = useAuth()

    if(!autorizacion.usuario) {
        return <Navigate to='/ingresar' state={{path: location.pathname}} />
    }

    return (
        children
    )
}