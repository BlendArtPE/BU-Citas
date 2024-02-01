import axios from 'axios';
import PropTypes from 'prop-types'
import { useState } from 'react';
import { useAuth } from '../../Autorizacion/autorizacion';
import { useLocation, useNavigate } from 'react-router-dom';

export const Ingresar = ( {cambiarFormulario} ) => {

  const URL = 'http://127.0.0.1:5173'
  const autorizacion = useAuth()
  const navegacion = useNavigate()
  const localizacion = useLocation()
  const rutaRedirijida = localizacion.state?.path || '/'


  const [usuario, setUsuario] = useState({
    correo: '', 
    contrasena: ''
  })

  const manejadorDeCambios = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }
  
  const manejadorDeInicio = async (e) => {
    e.preventDefault()
    try {
      const respuestas = await Promise.all([
        axios.post(URL + '/universitarios/ingreso', usuario),
        axios.post(URL + '/medicos/ingreso', usuario),
        axios.post(URL + '/administradores/ingreso', usuario)
      ])

      if (respuestas.some(respuesta => respuesta.data)) {
        console.log('Ingreso exitoso')
        const usuarioFiltrado = respuestas.filter(respuesta => respuesta.data !== null)
        const usuarioFormateado = usuarioFiltrado.map(respuesta => respuesta.data)
        autorizacion.ingresar(usuarioFormateado)
        navegacion(rutaRedirijida, {replace: true})
      } else{
        console.log('Usuario no encontrado')
      }
    } catch (error) {
      console.error('Error al buscar: ', error.response.data)
    }
  }

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">Iniciar sesión</h2>

      {/* Aquí puedes agregar tus campos de formulario */}
      <form onSubmit={manejadorDeInicio}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={usuario.correo}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={usuario.contrasena}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Iniciar sesión
        </button>

        {/* Línea divisora */}
        <div className="border-t border-gray-300 mb-4"></div>

        {/* Botón de registro */}
        <button
          type="button"
          onClick={cambiarFormulario}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Registrarse
        </button>
      </form>
    </>
  );
};

Ingresar.propTypes = {
  cambiarFormulario: PropTypes.func.isRequired
}