import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import ciclistasRouter from "./routes/ciclistas.routes.js"
import equiposRouter from "./routes/equipos.routes.js";
import etapasRouter from "./routes/etapas.routes.js";
import premiosRouter from "./routes/premios.routes.js";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/ciclistas",ciclistasRouter)
app.use("/api/equipos",equiposRouter)
app.use("/api/etapas",etapasRouter)
app.use("/api/premios",premiosRouter)
const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);   
})