import PropTypes from "prop-types";
import { useState } from "react";

export const Agendar = ({ horario, cerrarVentana }) => {
  const URL = "http://127.0.0.1:5173";

  const [cita, setCita] = useState({
    idUniversitario: "",
    idMedico: "",
    dia: "",
    estado: "Revisión",
    tipo: "",
    comentario: "",
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Agendar {horario.dia}</h2>
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Tipo
          </label>
          <select
            id="tipo"
            name="tipo"
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
            rows="4" // Puedes ajustar el número de filas según tus necesidades
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Ingresa tu comentario"
          ></textarea>
        </div>
        <div className="flex">
          <button className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Agendar
          </button>
          <button
            onClick={cerrarVentana}
            className="flex-grow ml-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

Agendar.propTypes = {
  horario: PropTypes.object.isRequired,
  cerrarVentana: PropTypes.func.isRequired,
};
