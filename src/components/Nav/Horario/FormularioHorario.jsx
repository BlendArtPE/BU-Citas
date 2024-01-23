import axios from 'axios';
import { useState } from "react";
import { useAuth } from "../../Autorizacion/autorizacion";

export const FormularioHorario = () => {

  const URL = 'http://127.0.0.1:5173'
  
  const autorizacion = useAuth()
  const idUsuario = autorizacion.usuario[0]?.informacion?._id
  const [horario, setHorario] = useState({
    idMedico: idUsuario, 
    dia: '', 
    horaIngreso: '', 
    horaSalida: '', 
    capacidad: ''
  })

  const manejadorDeCambios = (e) => {
    setHorario({
      ...horario,
      [e.target.name]: e.target.value,
    })
  }

  const manejadorDeEnvio = async (e) => {
    e.preventDefault()

    try {

      const response = await axios.post(URL + '/horarios', horario)
      console.log('Horario exitoso: ', response.data)
    } catch (error) {
      console.log(horario)
      console.log(URL)
      console.error('Error al enviar horario: ', error.response.data)
    }
  }

  return (
    <div className="w-3/5 bg-gray-200 p-8">
      <h2 className="text-3xl font-semibold mb-6">Agenda</h2>

      {/* Aquí puedes agregar tus campos de formulario */}
      <form onSubmit={manejadorDeEnvio}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Día
          </label>
          <input
            type="date"
            id="dia"
            name="dia"
            value={horario.dia}
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Hora de Ingreso
          </label>
          <input
            type="time"
            id="horaIngreso"
            name="horaIngreso"
            value={horario.horaIngreso}
            onChange={manejadorDeCambios}
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
            onChange={manejadorDeCambios}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Capacidad
          </label>
          <input
            type="number"
            id="capacidad"
            name="capacidad"
            value={horario.capacidad}
            onChange={manejadorDeCambios}
            min={0}
            max={30}
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
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Volver
        </button>
      </form>
    </div>
  );
};
