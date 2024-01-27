import PropTypes from "prop-types";
import { Iconos } from "../../Iconos/Iconos";
export const HistorialCarta = ({cita}) => {
  return (
    <div className="w-full max-h-64 max-w-xl p-4 mb-4 mr-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-300 dark:border-gray-400">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-dark">
          {cita.dia}
        </h5>
        {/* <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-dark">
          asd
        </h5> */}
      </div>

      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-500"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Iconos tipo="Doctor"/>
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-dark">
                  Doctor
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-dark">
                {cita.nombre}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Iconos tipo="Revisión"/>
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-dark pr-8">
                  Estado
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-dark">
                {cita.estado}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Iconos tipo="Comentario"/>
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-dark pr-8">
                  Comentario
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-dark">
                {cita.comentario}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

HistorialCarta.propTypes = {
    cita: PropTypes.object.isRequired
  };
  