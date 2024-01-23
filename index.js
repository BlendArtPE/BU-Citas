import express from "express";
import morgan from "morgan";
import mongoose from "./db/db.js";
import cors from "cors"
import universitariosRoutes from "./routes/universitariosRoutes.js"
import medicosRoutes from "./routes/medicosRoutes.js"
import administradorRoutes from "./routes/administradorRoutes.js"
//import path from 'path'

const app = express();

const db = mongoose.connection;

//Settings
app.set("appName", "Express Backend");
app.set("port", 5173); //Cambiar luego


//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())
app.use(universitariosRoutes)
app.use(medicosRoutes)
app.use(administradorRoutes)

//Server and database
db.on("error", (e) => {
  console.error("Error en la conexión con la base de datos: ", e);
});

db.once("open", () => {
  console.log("Conexión con la base de datos exitosa");
  app.listen(app.get("port"));
  console.log(
    "Server on " + app.get("appName") + " in the port " + app.get("port")
  );
});
