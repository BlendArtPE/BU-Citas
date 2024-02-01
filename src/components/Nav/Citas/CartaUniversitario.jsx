import PropTypes from 'prop-types'
import { Iconos } from '../../Iconos/Iconos'
import axios from 'axios'
import { EstadoCita } from './EstadoCita';

export const CartaUniversitario = ({cita}) => {
  
  const URL = "http://127.0.0.1:5173";

  const eliminarCita = async (e) => {
    e.preventDefault()
    try {
      const responseHorario = await axios.get(URL + "/horarios/" + cita.idHorario)
      if (
        responseHorario.data.capacidadActual > 0
      ) {
        const capacidadHorario = await axios.patch(
          URL + "/horarios/" + cita.idHorario,
          { capacidadActual: responseHorario.data.capacidadActual - 1}
        )
        console.log(capacidadHorario)
      }
      const responseCita = await axios.delete(URL + "/citas/" + cita._id)
      console.log(responseCita)
    } catch (error) {
      console.error("Error al eliminar cita: ")
    }
  }

  return (
    <div className="w-full max-h-64 max-w-xl p-4 mb-4 mr-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-300 dark:border-gray-400">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-dark">
          {cita.dia}
        </h5>
        <button 
        onClick={eliminarCita}
        className="text-2xl font-bold leading-none p-1 rounded-3xl bg-red-600 hover:bg-red-700 text-white dark:text-dark"
        
        >
          <Iconos tipo="Borrar"/>
        </button>
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
                  Médico
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
              <EstadoCita cita={cita}/>
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

CartaUniversitario.propTypes = {
  cita : PropTypes.object.isRequired
}