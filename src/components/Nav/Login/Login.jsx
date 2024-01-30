import { useState,useEffect } from "react";
import { Ingresar } from "./Ingresar";
import { Registrar } from "./Registrar";
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

export const Login = () => {
    const [mostrarIniciarSesion, setMostrarIniciarSesion] = useState(true)

    const cambiarFormulario = () => {
        setMostrarIniciarSesion(!mostrarIniciarSesion)
    }
    const clientID = "292060742455-vr86dsqntspb8derafn4kkujsptmmeb1.apps.googleusercontent.com";
    const [user,setUser] = useState({});
    useEffect(() => {
      const start = () => {
        gapi.load('auth2', () => {
          gapi.auth2.init({
            clientId: clientID
          });
        });
      };
  
      gapi.load('client:auth2', start);
    }, []); // Con esto habilitamos los servicios de Google
  
    const onSuccess = (response) => {
      setUser(response.profileObj)
      console.log(response)
    };
  
    const onFailure = () => {
      console.log("Algo salió mal");
    };

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
       <div className='btn'>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Google"
          cookiePolicy={"single_host_policy"}
        />
      </div>
      <div className={user? "profile":"hidden"}>
        <img src={user.imageUrl} alt ="" />
        <h3>{user.name}</h3>
      </div>           
        </div>
      </div>
    </div>
  );
};
