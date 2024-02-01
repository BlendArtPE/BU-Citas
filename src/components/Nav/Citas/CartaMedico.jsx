import PropTypes from 'prop-types'
import { Iconos } from '../../Iconos/Iconos'
import axios from 'axios';
import { EstadoCita } from './EstadoCita';

export const CartaMedico = ({cita, actualizar}) => {

  const URL = "http://127.0.0.1:5173";

  const manejadorAceptarCita = async (e, nuevoEstado) => {
    e.preventDefault()
    try {
      const estadoAceptado = await axios.patch(URL + '/citas/'+cita._id, {estado: nuevoEstado})
      const estadoAceptadoHistorial = await axios.patch(URL + '/historial/'+cita._id, {estado: nuevoEstado})
      actualizar()
      console.log(estadoAceptado)
      console.log(estadoAceptadoHistorial)
    } catch (error) {
      console.error("No se ha podido aceptar: ", error)
    }
  }

  return (
    <div className="w-full max-h-64 max-w-xl p-4 mb-4 mr-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-300 dark:border-gray-400">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-dark">
          {cita.dia}
        </h5>
        <div className="flex items-center">
  <h5 className="text-2xl font-bold leading-none flex items-center">
    <button 
    onClick={(e) => manejadorAceptarCita(e,"Aceptado")}
    className="mr-4 bg-green-600 hover:bg-green-700 text-white p-1 rounded-3xl dark:text-dark"
    title='Aceptar'
    >
    <Iconos tipo="Aceptar"  />
    </button>

    <button 
    onClick={(e) => manejadorAceptarCita(e,"Cancelado")}
    className="bg-red-600 hover:bg-red-700 text-white p-1 rounded-3xl dark:text-dark"
    title='Cancelar'
    >
    <Iconos tipo="Cancelar" />
    </button>
  </h5>
</div>


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
                  Universitario
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

CartaMedico.propTypes = {
  cita : PropTypes.object.isRequired,
  actualizar: PropTypes.func.isRequired
}