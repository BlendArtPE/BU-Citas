import { FormularioHorario } from "./FormularioHorario"
import { HorariosDisponibles } from "./HorariosDisponibles"

export const Horario = () => {
    
    return (
        <div className="flex h-screen">
            <FormularioHorario />
            <HorariosDisponibles />
        </div>
    )
}