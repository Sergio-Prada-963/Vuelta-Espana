import express from "express";

const router = express.Router();

import { obtenerPremios, obtenerPremiosID, agregarPremios, borrarPremios , actualizarPremios } from "../controllers/premios.controllers.js";

router.get('/', obtenerPremios);
router.get('/:id', obtenerPremiosID);
router.post('/', agregarPremios);
router.delete('/:id', borrarPremios);
router.patch('/:id', actualizarPremios);

export default router;