import axios from 'axios';
import PropTypes from 'prop-types'
import { useState } from 'react';
import { RegistrarUniversitario } from './RegistrarUniversitario';
import { RegistrarMedico } from './RegistrarMedico';
import { RegistrarAdministrador } from './RegistrarAdministrador';

export const Registrar = ( {cambiarFormulario} ) => {

  const URL = 'http://127.0.0.1:5173'
  const [tipo, setTipo] = useState('')
  const [usuario, setUsuario] = useState({
    nombre: '', 
    apellido: '', 
    correo: '',
    edad: '', 
    dni: '', 
    carrera: '', 
    especialidad: '', 
    contrasena: '',
    userAdm: ''
  })

  const manejadorDeCambios = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  const manejadordeTipo = (e) => {
    setTipo(e.target.value)
  }

  const manejadorDeEnvio = async (e) => {
    e.preventDefault()
    try {
      let response
      switch(tipo) {
        case 'uni':
          var datosUniversitario = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.correo,
            edad: usuario.edad,
            dni: usuario.dni,
            carrera: usuario.carrera,
            contrasena: usuario.contrasena
          };
          response = await axios.post(URL + '/universitarios', datosUniversitario)
          break
        case 'med':
          var datosMedico = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.correo,
            edad: usuario.edad,
            dni: usuario.dni,
            especialidad: usuario.especialidad,
            contrasena: usuario.contrasena
          };
          response = await axios.post(URL + '/medicos', datosMedico )
          break
        case 'adm':
          var datosAdministrador = {
            usuario: usuario.userAdm,
            correo: usuario.correo,
            contrasena: usuario.contrasena
          };
          response = await axios.post(URL + '/administradores', datosAdministrador)
          break

        default:
          console.log('Tipo no encontrado')
          break
      }
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

      <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Tipo
          </label>
          <select
            id="tipo"
            name="tipo"
            value={tipo}
            onChange={manejadordeTipo}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Seleccionar</option>
            <option value="uni">Universitario</option>
            <option value="med">Médico</option>
            <option value="adm">Administrador</option>
          </select>
        </div>

      
      <form onSubmit={manejadorDeEnvio}>
        
        {
          tipo === 'uni' ? 
            (
              <RegistrarUniversitario usuario={usuario} manejadorDeCambios={manejadorDeCambios}/>
            ) 
          :
          tipo === 'med' ?
            ( 
              <RegistrarMedico usuario={usuario} manejadorDeCambios={manejadorDeCambios}/>
            )
          :
          tipo === 'adm' ?
            ( 
              <RegistrarAdministrador usuario={usuario} manejadorDeCambios={manejadorDeCambios}/>
            )
          :
              (
                null
              )

        }

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Enviar
        </button>

        <div className="border-t border-gray-300 mb-4"></div>

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