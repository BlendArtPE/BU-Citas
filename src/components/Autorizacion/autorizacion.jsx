import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)

    const ingresar = (usuario) => {
        setUsuario(usuario)
    }

    const salir = () => {
        setUsuario(null)
    }


    return (
        <AuthContext.Provider value={{usuario, ingresar, salir}}>
            { children }
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}