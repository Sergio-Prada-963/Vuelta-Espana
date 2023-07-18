import express from "express";

const router = express.Router();

import { obtenerEtapas, obtenerEtapasID, agregarEtapas, borrarEtapas, actualizarEtapas } from "../controllers/etapas.controllers.js";

router.get('/', obtenerEtapas);
router.get('/:id', obtenerEtapasID);
router.post('/', agregarEtapas);
router.delete('/:id', borrarEtapas);
router.patch('/:id', actualizarEtapas);

export default router;