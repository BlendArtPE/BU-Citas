import mongoose from "mongoose"

const universitarioSchema = new mongoose.Schema({
    idUniversitario: { type: String, required: true },
    idMedico: { type: String, required: true },
    fecha: { type: Date, required: true },
    estado: { type: String, required: true },
    tipo: { type: String, required: true },
    comentario: { type: String, required: true }
})

export default universitarioSchema