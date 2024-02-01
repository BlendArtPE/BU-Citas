import { useAuth } from "../../Autorizacion/autorizacion"
import { CitasUniversitario } from "../Citas/CitasUniversitario"
import { CitasMedico } from "../Citas/CitasMedico"

export const Citas = () => {
  const autorizacion = useAuth()
  const categoriaUsuario = autorizacion.usuario[0].categoria

    return (
    <div className="flex h-screen">
        {
            categoriaUsuario === 'Universitario' ? (
              <CitasUniversitario />
            )
            :
            categoriaUsuario === 'Médico' ? (
              <CitasMedico />
            )
            :
            (
                null
            )
        }
    </div>
  )
}