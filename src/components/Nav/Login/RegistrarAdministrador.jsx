import PropTypes from 'prop-types'

export const RegistrarAdministrador = ({usuario, manejadorDeCambios}) => {
    return (
      <>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Usuario
            </label>
            <input
              type="text"
              id="userAdm"
              name="userAdm"
              value={usuario.userAdm}
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
  
RegistrarAdministrador.propTypes = {
    usuario : PropTypes.object.isRequired,
    manejadorDeCambios : PropTypes.func.isRequired
}