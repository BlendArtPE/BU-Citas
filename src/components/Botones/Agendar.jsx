import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useAuth } from "../Autorizacion/autorizacion";

export const Agendar = ({ horario, cerrarVentana, actualizar }) => {
  const URL = "http://127.0.0.1:5173";
  const autorizacion = useAuth();
  const idUsuario = autorizacion.usuario[0]?.informacion?._id;

  const [cita, setCita] = useState({
    idUniversitario: idUsuario,
    idMedico: horario.idMedico,
    idHorario: horario._id,
    dia: horario.dia,
    estado: "Revisión",
    tipo: "Consulta",
    comentario: "",
  });

  const manejadorDeCambios = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const manejadorDeEnvioCita = async (e) => {
    e.preventDefault();
    
    try {
      const responseHorario = await axios.get(URL + "/horarios/" + horario._id);
      if (
        responseHorario.data.capacidadActual < responseHorario.data.capacidad
      ) {
        const capacidadHorario = await axios.patch(
          URL + "/horarios/" + horario._id,
          { capacidadActual: responseHorario.data.capacidadActual + 1 }
        );
        console.log(capacidadHorario);
        const responseCita = await axios.post(URL + "/citas", cita);
        const historial = {
          ...cita,
          idCita: responseCita.data._id
        }
        const responseHistorial = await axios.post(URL + "/historial", historial);
        console.log(responseHistorial)
        console.log("Cita exitosa: ", responseCita.data)
        actualizar()
        cerrarVentana()
      }
      console.log("Horarios obtenidos: ", responseHorario.data);
    } catch (error) {
      console.error("Error al enviar cita: ", error.responseHorario.data);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Agendar {horario.dia}</h2>
        <form onSubmit={manejadorDeEnvioCita}>
          <div className="mb-4 flex space-x-4 ">
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Hora de Ingreso
              </label>
              <input
                type="time"
                id="horaIngreso"
                name="horaIngreso"
                value={horario.horaIngreso}
                readOnly
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="w-full">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Hora de Salida
              </label>
              <input
                type="time"
                id="horaSalida"
                name="horaSalida"
                value={horario.horaSalida}
                readOnly
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Tipo
            </label>
            <select
              id="tipo"
              name="tipo"
              value={cita.tipo}
              onChange={manejadorDeCambios}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="Consulta">Consulta</option>
              <option value="Examen de Sangre">Examen de Sangre</option>
              <option value="Examen de Orina">Examen de Orina</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Comentario
            </label>
            <textarea
              id="comentario"
              name="comentario"
              value={cita.comentario}
              onChange={manejadorDeCambios}
              rows="4" // Puedes ajustar el número de filas según tus necesidades
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Ingresa tu comentario"
              style={{ width: "100%", height: "80px", resize:"none"}}
            ></textarea>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Agendar
            </button>
            <button
              onClick={cerrarVentana}
              className="flex-grow ml-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Agendar.propTypes = {
  horario: PropTypes.object.isRequired,
  cerrarVentana: PropTypes.func.isRequired,
  actualizar: PropTypes.func.isRequired
};
