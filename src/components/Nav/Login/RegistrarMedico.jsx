import PropTypes from 'prop-types'

export const RegistrarMedico = ({usuario, manejadorDeCambios}) => {
    return (
      <>
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
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Especialidad
            </label>
            <input
              type="text"
              id="especialidad"
              name="especialidad"
              value={usuario.especialidad}
              onChange={manejadorDeCambios}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
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
      </>
    )
  }
  
RegistrarMedico.propTypes = {
    usuario : PropTypes.object.isRequired,
    manejadorDeCambios : PropTypes.func.isRequired
}