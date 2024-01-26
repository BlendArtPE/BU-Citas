import { Router } from "express"
import Medico from "../models/schemas/medico.js"
const router = Router()

router.get('/medicos/:id', async (req,res) => {
    try {
        const obtenerMedico = await Medico.findById(req.params.id)
        res.status(200).json({nombreCompleto: obtenerMedico.nombre + " " + obtenerMedico.apellido})
    } catch (error) {
        console.error("Error al buscar id:", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.post('/medicos/ingreso', async (req, res) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const {correo, contrasena} = req.body
        const medicoEncontrado = await Medico.findOne({correo: correo, contrasena: contrasena})
        if(medicoEncontrado){
            res.json({categoria: "Médico", informacion: medicoEncontrado});
            console.log("Es médico")
            return
        }
        res.json(null);
    } catch (error) {
        console.error("Error al buscar el correo del médico: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.post('/medicos', async (req, res) => {
    try {
        const {nombre, apellido, correo, edad, dni, especialidad, contrasena} = req.body
        const nuevoMedico = new Medico({nombre, apellido, correo, edad, dni, especialidad, contrasena})
        await nuevoMedico.save()

        res.status(201).json({mensaje: "Medico creado"})
    } catch (error) {
        console.error("Error al crear el Medico: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

export default router