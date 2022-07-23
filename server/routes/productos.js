import { Router } from "express";
import { ProductosController } from "../controllers/ProductosController.js";
import { validarFromRange } from "../middlewares/productos/validarFromRange.js";
import { connDB } from "../database/dbConfig.js"
import { validarProductId } from "../middlewares/productos/validarProductId.js";
import { validarUserId } from "../middlewares/productos/validarUserId.js";
import { requiereToken } from "../middlewares/requiereToken.js";
import { requiereRol } from "../middlewares/requiereRol.js";

//Se crea el controllador de productos
const prodCont = new ProductosController(connDB);

const router = Router();

//acceso administrador
router.get("/:from-:range", validarFromRange, requiereToken, requiereRol, prodCont.listaProductos)
router.post("/lista&:uid", validarUserId, requiereToken, requiereRol, prodCont.listaProductosPorUserId)

//acceso por usuario
router.get("/lista", requiereToken, prodCont.listaProductosPorUserId)
router.get("/lista/:prid", validarProductId, requiereToken, prodCont.productoPorId)
router.put("/crear", requiereToken, prodCont.crearProducto)


router.put("/actualizar", requiereToken, prodCont.actualizarProducto)

router.delete("/borrar/:prid", requiereToken, prodCont.eliminarProducto)




export default router