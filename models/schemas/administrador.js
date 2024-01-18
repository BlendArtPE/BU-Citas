import mongoose from "mongoose"

const administradorSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    contrasena: { type: String, required: true }
}, {
    timestamps: true
})

const Administrador = mongoose.model('Administrador', administradorSchema)

export default Administrador