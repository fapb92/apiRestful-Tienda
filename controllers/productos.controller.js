import { connDB } from "../database/dbConfig.js"
import { obtenerTodosLosProductos } from "../models/productos.model.js"

export const listaProductos = async (req, res) => {
    const [rows] = await obtenerTodosLosProductos(connDB);
    res.status(200).json(rows)
}