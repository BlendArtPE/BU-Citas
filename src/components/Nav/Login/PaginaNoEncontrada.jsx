import { useNavigate } from "react-router-dom"

export const PaginaNoEncontrada = () => {
    const navegacion = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Imagen */}
      <img
        src="/images/paginaPerdida.webp"
        alt="Imagen No Encontrada"
        className="mb-4 mx-auto h-80"
      />

      {/* Texto */}
      <p className="text-lg font-semibold mb-4">¡Ups! Página no encontrada.</p>

      {/* Botón */}
      <button 
        onClick={() => {navegacion('/')}}
      className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
        Volver a Inicio
      </button>
    </div>
  )
}