import mongoose from "mongoose"

const horarioDisponibleSchema = new mongoose.Schema({
    idMedico: { type: String, required: true },
    dias: { type: Object, required: true },
    capacidad: { type: Number, required: true }
})

export default horarioDisponibleSchema