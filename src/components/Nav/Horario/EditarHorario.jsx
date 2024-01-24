export const EditarHorario = ({ cerrarVentana }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md">
          {/* Contenido del formulario */}
          <h2 className="text-2xl font-semibold mb-4">Editar Elemento</h2>
          {/* Agrega aquí tus campos de edición */}
          <button onClick={cerrarVentana} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Guardar
          </button>
        </div>
      </div>
    );
  };