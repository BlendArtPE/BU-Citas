import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Nav/Navbar";
import "./App.css";
import { Login } from "./components/Nav/Login/Login";
import { Horario } from "./components/Nav/Horario/Horario";
import { AuthProvider } from "./components/Autorizacion/autorizacion";
import { Inicio } from "./components/Nav/Inicio/Inicio";
import { AutorizacionRequerida } from "./components/Autorizacion/AutorizacionRequerida";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path="/horario" element={<AutorizacionRequerida><Horario /></AutorizacionRequerida>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
