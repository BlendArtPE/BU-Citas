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


router.post('/horarios', async (req, res) => {
    try {
        const {idMedico, dia, horaIngreso, horaSalida, capacidad} = req.body
        const horarioNuevo = new Horario({idMedico, dia, horaIngreso, horaSalida, capacidad})
        await horarioNuevo.save()
        res.status(201).json({mensaje: "Horario creado"})
    } catch (error) {
        console.error("Error al crear horario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

export default router