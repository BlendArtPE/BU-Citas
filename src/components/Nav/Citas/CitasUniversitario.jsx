import { useEffect, useState } from "react";
import { useAuth } from "../../Autorizacion/autorizacion";
import { CartaUniversitario } from "../Citas/CartaUniversitario"
import axios from "axios";

export const CitasUniversitario = () => {
  
  const URL = "http://127.0.0.1:5173";
  const autorizacion = useAuth();
  const idUsuario = autorizacion.usuario[0]?.informacion?._id;

  const [citasUniversitario, setCitasUniversitario] = useState([]);

  useEffect(() => {
    const obtenerCitas = async () => {
      try {
        const responseCitas = await axios.get(URL + "/citas/universitario/" + idUsuario);
        const citasYNombres = await Promise.all(
          responseCitas.data.map(async (cita) => {
            try {
              const responseMedico = await axios.get(
                URL + "/medicos/" + cita.idMedico
              );
              return {
                ...cita,
                nombre: responseMedico.data.nombreCompleto,
              };
            } catch (error) {
              console.error('Error al obtener médico: ', error.responseUniversitario.data)
              return {
                ...cita,
                nombre: 'No disponible'
              }
            }
          })
        );
        setCitasUniversitario(citasYNombres)
      } catch (error) {
        console.error("Error al obtener citas:", error.responseCitas.data);
      }
    };
    obtenerCitas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap justify-center m-4">
      {citasUniversitario.length > 0 ? (
        citasUniversitario.map((cita) => (
          <CartaUniversitario key={cita._id} cita={cita} />
        ))
      ) : (
        <p>Cargando citas...</p>
      )}
    </div>
  )
}