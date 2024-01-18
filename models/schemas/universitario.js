import mongoose from "mongoose"

const universitarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    DNI: { type: String, required: true },
    carrera: { type: String, required: true },
    ciclo: { type: String, required: true },
    contrasena: { type: String, required: true }
})

export default universitarioSchema