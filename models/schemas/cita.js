import mongoose from "mongoose"

const citaSchema = new mongoose.Schema({
    idUniversitario: { type: String, required: true },
    idMedico: { type: String, required: true },
    dia: { type: String, required: true },
    estado: { type: String, required: true },
    tipo: { type: String, required: true },
    comentario: { type: String }
}, {
    timestamps: true
})

const Cita = mongoose.model('Cita', citaSchema)
export default Cita