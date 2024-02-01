import { Router } from "express"
import Universitario from "../models/schemas/universitario.js"
const router = Router()

router.get('/universitarios/:id', async (req,res) => {
    try {
        const obtenerUniversitario = await Universitario.findById(req.params.id)
        res.status(200).json({nombreCompleto: obtenerUniversitario.nombre + " " + obtenerUniversitario.apellido})
    } catch (error) {
        console.error("Error al buscar id:", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})

router.post('/universitarios/ingreso', async (req, res) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const {correo, contrasena} = req.body
        const universitarioEncontrado = await Universitario.findOne({correo: correo, contrasena: contrasena})
        if(universitarioEncontrado){
            res.json({categoria: "Universitario", informacion: universitarioEncontrado});
            console.log("Es universitario")
            return
        }
        res.json(null);
    } catch (error) {
        console.error("Error al buscar el correo del universitario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})


router.post('/universitarios', async (req, res) => {
    try {
        const {nombre, apellido, correo, edad, dni, carrera, contrasena} = req.body
        const nuevoUniversitario = new Universitario({nombre, apellido, correo, edad, dni, carrera, contrasena})
        await nuevoUniversitario.save()

        res.status(201).json({mensaje: "Universitario creado"})
    } catch (error) {
        console.error("Error al crear el universitario: ", error)
        res.status(500).json({error: "Error en el servidor"})
    }
})
export default router