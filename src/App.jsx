import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Nav/Navbar";
import "./App.css";
import { Login } from "./components/Nav/Login/Login";
import { Horario } from "./components/Nav/Horario/Horario";
import { AuthProvider } from "./components/Autorizacion/autorizacion";
import { Inicio } from "./components/Nav/Inicio/Inicio";
import { AutorizacionRequerida } from "./components/Autorizacion/AutorizacionRequerida";
import { Historial } from "./components/Nav/Historial/Historial";
import { Citas } from "./components/Nav/Citas/Citas";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path="/horario" element={<AutorizacionRequerida><Horario /></AutorizacionRequerida>} />
          <Route path="/historial" element={<AutorizacionRequerida><Historial /></AutorizacionRequerida>} />
          <Route path="/citas" element={<AutorizacionRequerida><Citas /></AutorizacionRequerida>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
