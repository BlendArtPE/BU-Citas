export const FormularioHorario = () => {
  
  return (
    <div className="w-3/5 bg-gray-200 p-8">
      <h2 className="text-3xl font-semibold mb-6">Agenda</h2>

      {/* Aquí puedes agregar tus campos de formulario */}
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Día
          </label>
          <input
            type="date"
            id="dia"
            name="dia"
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
            min={0}
            max={30}
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
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};
