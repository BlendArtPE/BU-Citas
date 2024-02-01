import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../Autorizacion/autorizacion";
import { CartaMedico } from "../Citas/CartaMedico";

export const CitasMedico = () => {
  const URL = "http://127.0.0.1:5173";
  const autorizacion = useAuth();
  const idUsuario = autorizacion.usuario[0]?.informacion?._id;
  const [citasMedico, setCitasMedico] = useState([]);
  const [actualizarCitas, setActualizarCitas] = useState(false)
  const manejadorActualizarCitas = () => {
    setActualizarCitas(!actualizarCitas);
    console.log("Actualizando");
  };

  useEffect(() => {
    const obtenerCitas = async () => {
      try {
        const responseCitas = await axios.get(
          URL + "/citas/medico/" + idUsuario
        );
        const citasYNombres = await Promise.all(
          responseCitas.data.map(async (cita) => {
            try {
              const responseUniversitario = await axios.get(
                URL + "/universitarios/" + cita.idUniversitario
              );
              return {
                ...cita,
                nombre: responseUniversitario.data.nombreCompleto,
              };
            } catch (error) {
              console.error(
                "Error al obtener médico: ",
                error.responseUniversitario.data
              );
              return {
                ...cita,
                nombre: "No disponible",
              };
            }
          })
        );
        setCitasMedico(citasYNombres);
      } catch (error) {
        console.error("Error al obtener citas:", error.responseCitas.data);
      }
    };
    obtenerCitas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualizarCitas]);
  return (
    <div className="flex flex-wrap justify-center m-4">
      {citasMedico.length > 0 ? (
        citasMedico.map((cita) => <CartaMedico key={cita._id} cita={cita} actualizar={manejadorActualizarCitas}/>)
      ) : (
        <p>Cargando citas...</p>
      )}
    </div>
  );
};
