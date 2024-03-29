import { Router } from "express"
import Horario from "../../models/schemas/horario.js"

const router = Router()

router.get('/horarios', async (req, res) => {
    try {
        const horariosRecuperados = await Horario.find()
        res.status(201).json(horariosRecuperados)
    } catch (error) {
        console.error("Error al obtener horario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.get('/horarios/medico/:id', async (req, res) => {
    try {
        const citasRecuperadas = await Horario.find({idMedico: req.params.id})
        res.status(200).json(citasRecuperadas)
    } catch (error) {
        console.error("Error al buscar citas: ",error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.get('/horarios/:id', async (req, res) => {
    try {
        const horarioRecuperado = await Horario.findById(req.params.id)
        res.status(200).json(horarioRecuperado)
    } catch (error) {
        console.error("Error al buscar horario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})


router.post('/horarios', async (req, res) => {
    try {
        const {idMedico, dia, horaIngreso, horaSalida, capacidad, capacidadActual} = req.body
        const horarioNuevo = new Horario({idMedico, dia, horaIngreso, horaSalida, capacidad, capacidadActual})
        await horarioNuevo.save()
        res.status(201).json({mensaje: "Horario creado"})
    } catch (error) {
        console.error("Error al crear horario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.put('/horarios/:id', async (req, res) => {
    try {
        const horarioActualizado = await Horario.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json(horarioActualizado)
    } catch (error) {
        console.error("Error al actualizar horario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.patch('/horarios/:id', async (req, res) => {
    try {
        const capacidadHorarioActualizada = await Horario.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        )
        res.status(200).json({mensaje: "Capacidad actualizada", horarioCapacidad: capacidadHorarioActualizada})
    } catch (error) {
        console.error("Error al actualizar capacidad: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.delete('/horarios/:id', async (req, res) => {
    try {
        const horariosEliminado = await Horario.deleteOne({_id: req.params.id})
        res.status(201).json(horariosEliminado)
    } catch (error) {
        console.error("Error al eliminar horario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

export default router