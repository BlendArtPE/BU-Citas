import { useState } from "react";
import PropTypes from 'prop-types'

export const EditarHorario = ({horario, cerrarVentana }) => {
  // const fechaFormateada = new Date(horarioActualizar.fecha).toISOString().split('T')[0];
  const [horarioActualizar, setHorarioActualizar] = useState({
    dia: horario.dia,
    horaIngreso: horario.horaIngreso,
    horaSalida: horario.horaSalida,
    capacidad: horario.capacidad,
  });

  const manejadorDeCambios = (e) => {
    setHorarioActualizar({
      ...horario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-96"> {/* Ajusta el ancho aquí (por ejemplo, w-96) */}
        <h2 className="text-2xl font-semibold mb-4">Editar Horario</h2>

        <div className="mb-4">
          <label htmlFor="fecha" className="block text-gray-700 text-sm font-medium mb-2">
            Fecha
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={horarioActualizar.dia}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hora" className="block text-gray-700 text-sm font-medium mb-2">
            Hora de Ingreso
          </label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={horarioActualizar.horaIngreso}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hora" className="block text-gray-700 text-sm font-medium mb-2">
            Hora de Salida
          </label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={horarioActualizar.horaSalida}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="capacidad" className="block text-gray-700 text-sm font-medium mb-2">
            Capacidad
          </label>
          <input
            type="number"
            id="capacidad"
            name="capacidad"
            value={horarioActualizar.capacidad}
            onChange={manejadorDeCambios}
            min={0}
            max={30}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex">
  <button onClick={cerrarVentana} className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
    Guardar
  </button>
  <button onClick={cerrarVentana} className="flex-grow ml-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
    Volver
  </button>
</div>

      </div>
    </div>
  );
};

EditarHorario.propTypes = {
  horario: PropTypes.object.isRequired,
  cerrarVentana: PropTypes.bool.isRequired
}