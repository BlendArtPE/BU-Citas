import mongoose from "mongoose"

const universitarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, required: true },
    carrera: { type: String, required: true },
    contrasena: { type: String, required: true }
}, {
    timestamps: true
})

const Universitario = mongoose.model('Universitario', universitarioSchema)

export default Universitario