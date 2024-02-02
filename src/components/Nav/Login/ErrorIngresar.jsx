import PropTypes from 'prop-types';

export const ErrorIngresar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/images/noEncontrado.webp" // Reemplaza con la ruta de tu imagen
            alt="No encontrado"
            className="mx-auto mb-4 h-40"
          />
          <p className="text-center text-xl font-semibold mb-4">Lo sentimos, usuario no encontrado.</p>
          <button
            onClick={onClose}
            className="block mx-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

ErrorIngresar.propTypes = {
  onClose: PropTypes.func.isRequired,
}