import { Router } from "express";
import { listaProductos } from "../controllers/productos.controller.js";
const router = Router();


router.get("/", listaProductos)

// router.get("/:rol/:id", listaProductos)


export default router