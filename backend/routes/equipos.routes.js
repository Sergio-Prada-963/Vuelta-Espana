import express from "express";

const router = express.Router();

import {obtenerEquipos, agregarEquipos, obtenerEquiposID, borrarEquipos, actualizarEquipos} from "../controllers/equipos.controllers.js"


router.get("/", obtenerEquipos);
router.get("/:id", obtenerEquiposID);
router.post("/", agregarEquipos); 
router.delete("/:id", borrarEquipos); 
router.patch("/:id", actualizarEquipos)

export default router;