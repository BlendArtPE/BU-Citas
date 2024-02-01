import { Router } from "express";
import Historial from "../../models/schemas/historial.js";

const router = Router ()

router.get('/historial/medico/:id', async (req, res) => {
    try {
        const historialesRecuperadas = await Historial.find({idMedico: req.params.id})
        res.status(200).json(historialesRecuperadas)
    } catch (error) {
        console.error("Error al buscar Historiales: ",error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.get('/historial/universitario/:id', async (req, res) => {
    try {
        const historialesRecuperadas = await Historial.find({idUniversitario: req.params.id})
        res.status(200).json(historialesRecuperadas)
    } catch (error) {
        console.error("Error al buscar Historiales: ",error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.patch('/historial/:id', async (req, res) => {
    try {
        await Historial.findOneAndUpdate(
            {idCita: req.params.id},
            {$set: req.body},
            {new: true}
            )
            res.status(200).json({mensaje: "Estado actualizado en historial - " + req.params.id})
    } catch (error) {
        console.error("Error al actualizar estado: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.patch('/historiales/:id', async (req, res) => {
    try {
        await Historial.updateMany(
            {idHorario: req.params.id},
            {$set: req.body},
            {new: true}
            )
            res.status(200).json({mensaje: "Estado actualizado en historial - " + req.params.id})
    } catch (error) {
        console.error("Error al actualizar estado: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.post('/historial', async (req, res) => {
    try {
        const {idCita, idUniversitario, idMedico,idHorario , dia, estado, tipo, comentario} = req.body
        const historialNuevo = new Historial({idCita, idUniversitario, idMedico, idHorario, dia, estado, tipo, comentario})
        await historialNuevo.save()
        res.status(201).json(historialNuevo)
    } catch (error) {
        console.error('Error al crear historial: ', error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

export default router