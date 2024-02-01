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
      let ruta = categoriaUsuario === 'Médico' ? URL + "/historial/medico/" + idUsuario : URL + "/historial/universitario/" + idUsuario
      try {
        const responseHistoriales = await axios.get(ruta);
        console.log(responseHistoriales)
        const citasYNombres = await Promise.all(
          responseHistoriales.data.map(async (cita) => {
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
              console.error('Error al obtener médico o universitario: ', error.responseUsuario.data)
              return {
                ...cita,
                nombre: 'No disponible'
              }
            }
          })
        );
        setHistorialCarta(citasYNombres)
      } catch (error) {
        console.error("Error al obtener citas:", error.responseHistoriales.data);
      }
    };
    obtenerCitas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-wrap justify-center m-4">
      {historialCarta.length > 0 ? (
        historialCarta.map((historial) => (
          <HistorialCarta key={historial._id} historial={historial} />
        ))
      ) : (
        <p>Cargando historial...</p>
      )}
    </div>
  );
};
