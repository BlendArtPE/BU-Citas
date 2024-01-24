import { useState } from "react"
import { FormularioHorario } from "./FormularioHorario"
import { HorariosDisponibles } from "./HorariosDisponibles"

export const Horario = () => {
    const [actualizarHorarios, setActualizarHorarios] = useState(false)

    const manejadorActualizarHorarios = () => {
        setActualizarHorarios(prev => !prev)
    }

    return (
        <div className="flex h-screen">
            <FormularioHorario actualizarHorarios={manejadorActualizarHorarios} />
            <HorariosDisponibles actualizar={actualizarHorarios} />
        </div>
    )
}