import mongoose from "mongoose"

const medicoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    DNI: { type: String, required: true },
    especialidad: { type: String, required: true },
    contrasena: { type: String, required: true }
})

export default medicoSchema