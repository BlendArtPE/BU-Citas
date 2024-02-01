import { useEffect, useState } from "react";
import { useAuth } from "../../Autorizacion/autorizacion";
import axios from "axios";
import { HistorialCarta } from "./HistorialCarta";

export const Historial = () => {
  const URL = "http://127.0.0.1:5173";
  const autorizacion = useAuth();
  const idUsuario = autorizacion.usuario[0]?.informacion?._id;
  const categoriaUsuario = autorizacion.usuario[0]?.categoria

  const [historialCarta, setHistorialCarta] = useState([]);

  useEffect(() => {
    const obtenerCitas = async () => {
      let ruta = categoriaUsuario === 'Médico' ? URL + "/citas/medico/" + idUsuario : URL + "/citas/universitario/" + idUsuario
      try {
        const responseCitas = await axios.get(ruta);
        console.log(responseCitas)
        const citasYNombres = await Promise.all(
          responseCitas.data.map(async (cita) => {
            try {
              let responseUsuario 
              if (categoriaUsuario === 'Médico' ) {
                responseUsuario = await axios.get(
                  URL + "/universitarios/" + cita.idUniversitario
                );
              } else {
                responseUsuario = await axios.get(
                  URL + "/medicos/" + cita.idMedico
                );
              }
              return {
                ...cita,
                nombre: responseUsuario.data.nombreCompleto,
              };
            } catch (error) {
              console.error('Error al obtener médico: ', error.responseUsuario.data)
              return {
                ...cita,
                nombre: 'No disponible'
              }
            }
          })
        );
        setHistorialCarta(citasYNombres)
      } catch (error) {
        console.error("Error al obtener citas:", error.responseCitas.data);
      }
    };
    obtenerCitas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap justify-center m-4">
      {historialCarta.length > 0 ? (
        historialCarta.map((cita) => (
          <HistorialCarta key={cita._id} cita={cita} />
        ))
      ) : (
        <p>Cargando citas...</p>
      )}
    </div>
  );
};
