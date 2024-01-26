import axios from "axios";
import { useEffect, useState } from "react"
import { HorariosAgenda } from "./HorariosAgenda";

export const HorarioGenerales = () => {
  
  const URL = 'http://127.0.0.1:5173'
  const [horariosDisponibles, setHorariosDisponibles] = useState([])

  useEffect(() => {
    const obtenerHorarios = async () => {
      try {
        const response = await axios.get(URL + '/horarios');
        const horariosOrdenados = response.data.sort((horarioA, horarioB) => {
          const diaA = new Date(horarioA.dia);
          const diaB = new Date(horarioB.dia);
          return diaA - diaB;
        });
  
        const horariosYNombres = await Promise.all(
          horariosOrdenados.map(async (horario) => {
            try {
              const responseMedico = await axios.get(URL + '/medicos/' + horario.idMedico);
              return {
                ...horario,
                nombre: responseMedico.data.nombreCompleto,
              };
            } catch (error) {
              console.error('Error al obtener médico:', error.response.data);
              return {
                ...horario,
                nombre: 'No disponible', // Puedes manejar el caso de error como prefieras
              };
            }
          })
        );
  
        setHorariosDisponibles(horariosYNombres);
        console.log("con nombres: ", horariosYNombres);
      } catch (error) {
        console.error('Error al obtener horarios:', error.response.data);
      }
    };
  
    obtenerHorarios();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div className="flex flex-wrap justify-center m-4">
      {horariosDisponibles.length > 0 ? (
        horariosDisponibles.map((horario) => (
          <HorariosAgenda
            key={horario._id}
            horario={horario}
            
          />
        ))
      ) : (
        <p>Cargando horarios...</p>
      )}
    </div>
  )
}