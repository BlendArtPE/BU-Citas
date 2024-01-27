import PropTypes from "prop-types";
import { useState } from "react";
import { Iconos } from "../../../Iconos/Iconos";
import { Agendar } from "../../../Botones/Agendar";

export const HorariosAgenda = ({ horario }) => {

  const [abrirVentanaAgendar, setAbrirVentanaAgendar] = useState(false);

  const manejadorAbrirVentanaAgendar = () => {
    setAbrirVentanaAgendar(true);
  };

  const manejadorCerrarVentanaAgendar = () => {
    setAbrirVentanaAgendar(false);
  };

  return (
    <div className="w-full max-h-64 max-w-96 p-4 mb-4 mr-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-300 dark:border-gray-400">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-dark">
          {horario.dia}
        </h5>
        <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-dark">
          {horario.capacidadActual}/{horario.capacidad}
        </h5>
      </div>

      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-500"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Iconos tipo={"Doctor"} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-dark">
                  Doctor
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-dark">
                {horario.nombre}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Iconos tipo={"Reloj"} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-dark pr-8">
                  Hora disponible
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-dark">
                {horario.horaIngreso} - {horario.horaSalida}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <button 
        onClick={manejadorAbrirVentanaAgendar}
        className="w-full mx-auto bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Agendar
        </button>
        {abrirVentanaAgendar && (
        <Agendar horario={horario} cerrarVentana={manejadorCerrarVentanaAgendar} />
      )}
      </div>
    </div>
  );
};

HorariosAgenda.propTypes = {
  horario: PropTypes.object.isRequired,
};
