import { useNavigate } from "react-router-dom";

export const Inicio = () => {

  const navegacion = useNavigate()

  return (
    <div className="relative">
      <img
        src="/images/colaBY2.webp"
        alt="Descripción de la imagen"
        className="bg-image"
      />

      <div className="absolute inset-0 flex items-center justify-center mt-72">
        <button
          className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-full z-10"
          onClick={() => navegacion('/ingresar')}
        >
          <h1 className="text-4xl">Ingresar</h1>
        </button>
      </div>
    </div>
  );
};
