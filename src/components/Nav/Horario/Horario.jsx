import { useState } from "react"
import { FormularioHorario } from "./FormularioHorario"
import { HorariosDisponibles } from "./HorariosDisponibles"
import { useAuth } from "../../Autorizacion/autorizacion"
import { HorarioGenerales } from "./HorarioUniversitario/HorarioGenerales"

export const Horario = () => {
    const autorizacion = useAuth()
    const categoriaUsuario = autorizacion.usuario[0].categoria
    const [actualizarHorarios, setActualizarHorarios] = useState(false)

    const manejadorActualizarHorarios = () => {
        setActualizarHorarios(prev => !prev)
    }

    return (
        <div className="flex h-screen">
            {
                categoriaUsuario === 'Universitario' ? (
                    <HorarioGenerales />
                )
                :
                categoriaUsuario === 'Médico' ? (
                    <>
                    <FormularioHorario actualizarHorarios={manejadorActualizarHorarios} />
                    <HorariosDisponibles actualizarHorarios={manejadorActualizarHorarios} actualizar={actualizarHorarios} />
                    </>
                ) 
                :
                (
                    null
                )
            }
        </div>
    )
}