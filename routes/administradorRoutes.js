import { Router } from "express"
import Administrador from "../models/schemas/administrador.js"
const router = Router()

router.get('/admin', async (req,res) => {
    try {
        const administradores = await Administrador.find()
        console.log("Administradores: ", administradores)
        res.status(201).send(administradores)
    } catch (error) {
        console.error("Error al obtener administradores: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.post('/admin', async (req, res) => {
    try {
        const {usuario, contrasena} = req.body
        const nuevoAdministrador = new Administrador({usuario, contrasena})
        await nuevoAdministrador.save()

        res.status(201).json({mensaje: "Usuario creado"})
    } catch (error) {
        console.error("Error al crear usuario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})
export default router