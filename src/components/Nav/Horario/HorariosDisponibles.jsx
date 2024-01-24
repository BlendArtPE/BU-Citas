import axios from "axios";
import { useState, useEffect } from "react";
import { CartaHorario } from "./CartaHorario"

export const HorariosDisponibles = () => {

    const URL = 'http://127.0.0.1:5173'
    const [horariosDisponibles, setHorariosDisponibles] = useState([])

    useEffect(() => {
        const obtenerHorarios = async () => {
            try {
                const response = await axios.get(URL + '/horarios')
                setHorariosDisponibles(response.data)
                console.log('Horarios obtenidos: ', response.data)
            } catch (error) {
                console.error('Error al obtener horarios:', error.response.data)
            }
        }
        obtenerHorarios()
    }, []);

    return (
        <div className="w-2/5 bg-white overflow-y-auto p-8">
            {
            horariosDisponibles.length > 0 ? (
                horariosDisponibles.map((horario) => (
                    <CartaHorario key={horario._id} horario={horario} />
                ))
            ) : (
                <p>Cargando horarios...</p>
            )
        }
        </div>
    )
}