import express from "express";
import AutoresController from "../controller/AutoresController.js";

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autor/:id", AutoresController.listarAutorPorId)
    .post('/autor', AutoresController.cadastrarAutor)
    .put('/autor/:id', AutoresController.atualizarAutor)
    .delete('/autor/:id', AutoresController.deletarAutor)

export default router;