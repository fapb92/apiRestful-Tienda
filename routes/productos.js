import { Router } from "express";
import { ProductosController } from "../controllers/ProductosController.js";
import { connDB } from "../database/dbConfig.js"

//Se crea el controllador de productos
const prodCont = new ProductosController(connDB);

const router = Router();


router.get("/", prodCont.listaProductos)

router.get("/:prid", prodCont.productoPorId)

router.post("/:rol/:uid", prodCont.listaProductosPorUserId)

router.put("/crear", prodCont.crearProducto)

router.put("/actualizar", prodCont.actualizarProducto)

router.delete("/borrar/:prid", prodCont.eliminarProducto)




export default router