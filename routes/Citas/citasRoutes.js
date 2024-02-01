import { Router } from "express";
import Cita from "../../models/schemas/cita.js";

const router = Router ()

router.get('/citas/:id', async (req, res) => {
    try {
        const citasRecuperadas = await Cita.find({idUniversitario: req.params.id})
        res.status(200).json(citasRecuperadas)
    } catch (error) {
        console.error("Error al buscar citas: ",error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.get('/citas/medico/:id', async (req, res) => {
    try {
        const citasRecuperadas = await Cita.find({idMedico: req.params.id})
        res.status(200).json(citasRecuperadas)
    } catch (error) {
        console.error("Error al buscar citas: ",error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.get('/citas/universitario/:id', async (req, res) => {
    try {
        const citasRecuperadas = await Cita.find({idUniversitario: req.params.id})
        res.status(200).json(citasRecuperadas)
    } catch (error) {
        console.error("Error al buscar citas: ",error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.delete('/citas/:id', async (req, res) => {
    try {
        const citaEliminada = await Cita.deleteOne({_id: req.params.id})
        res.status(201).json(citaEliminada)
    } catch (error) {
        console.error('Error al eliminar cita: ', error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.delete('/citas/horario/:id', async (req, res) => {
    try {
        const citasEliminadasPorHorario = await Cita.deleteMany({idHorario: req.params.id})
        res.status(201).json(citasEliminadasPorHorario)
    } catch (error) {
        console.error('Error al eliminar citas: ', error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.patch('/citas/:id', async (req, res) => {
    try {
        await Cita.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
            )
            res.status(200).json({mensaje: "Estado actualizado - " + req.params.id})
    } catch (error) {
        console.error("Error al actualizar estado: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.post('/citas', async (req, res) => {
    try {
        const {idUniversitario, idMedico,idHorario , dia, estado, tipo, comentario} = req.body
        const citaNueva = new Cita({idUniversitario, idMedico, idHorario, dia, estado, tipo, comentario})
        await citaNueva.save()
        res.status(201).json(citaNueva)
    } catch (error) {
        console.error('Error al crear cita: ', error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

export default router