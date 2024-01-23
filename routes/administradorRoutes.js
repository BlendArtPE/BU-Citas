import { Router } from "express"
import Administrador from "../models/schemas/administrador.js"
const router = Router()

router.get('/administradores', async (req,res) => {
    try {
        const administradores = await Administrador.find()
        console.log("Administradores: ", administradores)
        res.status(201).send(administradores)
    } catch (error) {
        console.error("Error al obtener administradores: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.post('/administradores/ingreso', async (req, res) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const {correo, contrasena} = req.body
        const administradorEncontrado = await Administrador.findOne({correo: correo, contrasena: contrasena})
        if(administradorEncontrado){
            res.json({ categoria: "Administrador", medico: administradorEncontrado });
            console.log("Es administrador")
            return
        }
        res.json(null);
    } catch (error) {
        console.error("Error al buscar el correo del administrador: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.post('/administradores', async (req, res) => {
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