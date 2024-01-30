import mongoose from 'mongoose'

const URI = "mongodb+srv://pauljls:1052700520@cluster0.0b4zruk.mongodb.net/citas"

mongoose.connect(URI )
.then(()=>{
    console.log("conexion exitosa")
})
.catch(()=>{
    console.log("No se pudo conectar")
})

export default mongoose