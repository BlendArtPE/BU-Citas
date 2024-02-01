import mongoose from "mongoose"

const historialSchema = new mongoose.Schema({
    idCita: { type: String, required: true },
    idUniversitario: { type: String, required: true },
    idMedico: { type: String, required: true },
    idHorario: { type: String, required: true },
    dia: { type: String, required: true },
    estado: { type: String, required: true },
    tipo: { type: String, required: true },
    comentario: { type: String }
}, {
    timestamps: true
})

const Historial = mongoose.model('Historial', historialSchema)
export default Historial