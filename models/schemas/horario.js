import mongoose from "mongoose"

const horarioSchema = new mongoose.Schema({
    idMedico: { type: String, required: true },
    dia: { type: String, required: true },
    horaIngreso: { type: String, required: true},
    horaSalida: { type: String, required: true},
    capacidad: { type: Number, required: true }
}, {
    timestamps: true
})

const Horario = mongoose.model('Horario', horarioSchema)
export default Horario