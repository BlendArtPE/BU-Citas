import { useState } from "react";
import { Ingresar } from "./Ingresar";
import { Registrar } from "./Registrar";

export const Login = () => {
    const [mostrarIniciarSesion, setMostrarIniciarSesion] = useState(true)

    const cambiarFormulario = () => {
        setMostrarIniciarSesion(!mostrarIniciarSesion)
    }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sección de la imagen a la izquierda */}
      <div
        className="w-1/2 h-screen bg-cover"
        style={{ backgroundImage: 'url("../../../../images/bienestar.webp")' }}
      ></div>

      {/* Sección del formulario de login a la derecha */}
      <div className="w-1/2 p-10">
        <div className="max-w-md mx-auto">
          <div
            className="bg-cover"
            style={{
              backgroundImage: 'url("../../../../images/logoUNT.webp")',
            }}
          ></div>
          {/* Agregar imagen arriba del título */}
          <img
            src="/images/logoUNT.webp"
            alt="Imagen Adicional"
            className="mb-6 rounded-md mx-auto"
            style={{ maxWidth: "40%", height: "auto" }}
          />

            {mostrarIniciarSesion ? (
                <Ingresar cambiarFormulario={cambiarFormulario} />
            ) : (
                <Registrar cambiarFormulario={cambiarFormulario} />
            )}
        </div>
      </div>
    </div>
  );
};
