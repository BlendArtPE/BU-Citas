import axios from 'axios';
import PropTypes from 'prop-types'
import { useState } from 'react';

export const Registrar = ( {cambiarFormulario} ) => {

  const URL = 'http://127.0.0.1:5173'
  const [usuario, setUsuario] = useState({
    nombre: '', 
    apellido: '', 
    correo: '',
    edad: '', 
    dni: '', 
    carrera: '', 
    contrasena: ''
  })

  const manejadorDeCambios = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  const manejadorDeEnvio = async (e) => {
    e.preventDefault()

    try {
    
      const response = await axios.post(URL + '/universitarios', usuario)
      console.log('Registro exitoso: ', response.data)
    } catch (error) {
      console.log(usuario)
      console.log(URL)
      console.error('Error al registrar: ', error.response.data)
    }
  }


  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">Registrar cuenta</h2>

      {/* Aquí puedes agregar tus campos de formulario */}
      <form onSubmit={manejadorDeEnvio}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Nombres
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={usuario.nombre}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Apellidos
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={usuario.apellido}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Correo
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
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Edad
          </label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={usuario.edad}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            DNI
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={usuario.dni}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Carrera
          </label>
          <select
            id="carrera"
            name="carrera"
            value={usuario.carrera}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Seleccionar</option>
            <option value="Informática">Informática</option>
            <option value="Sistemas">Sistemas</option>
            <option value="Educación Inicial">Educación Inicial</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
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
          Enviar
        </button>

        {/* Línea divisora */}
        <div className="border-t border-gray-300 mb-4"></div>

        {/* Botón de registro */}
        <button
          type="button"
          onClick={cambiarFormulario}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Volver
        </button>
      </form>
    </>
  );
};

Registrar.propTypes = {
  cambiarFormulario: PropTypes.func.isRequired
}