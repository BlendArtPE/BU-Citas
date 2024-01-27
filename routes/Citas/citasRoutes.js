import { Router } from "express";
import Cita from "../../models/schemas/cita.js";

const router = Router ()

router.post('/citas', async (req, res) => {
    try {
        const {idUniversitario, idMedico, dia, estado, tipo, comentario} = req.body
        const citaNueva = new Cita({idUniversitario, idMedico, dia, estado, tipo, comentario})
        await citaNueva.save()
        res.status(201).json(citaNueva)
    } catch (error) {
        console.error('Error al crear cita: ', error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

export default router