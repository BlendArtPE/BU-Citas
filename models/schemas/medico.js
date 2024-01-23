import mongoose from "mongoose"

const medicoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, required: true },
    especialidad: { type: String, required: true },
    contrasena: { type: String, required: true }
})

const Medico = mongoose.model('Medico', medicoSchema)

export default Medico