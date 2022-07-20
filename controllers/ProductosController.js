import { ProductosModel } from "../models/ProductosModel.js";


export class ProductosController extends ProductosModel {
    constructor(conexion) {
        super(conexion);
    }

    listaProductos = async (_, res) => {
        const [rows] = await this.obtenerTodosLosProductos();
        res.status(200).json(rows);
    };

    listaProductosPorUserId = async (req, res) => {
        const [rows] = await this.obtenerProductosPorUserId(req.params.uid);
        res.status(200).json(rows);
    };

    productoPorId = async (req, res) => {
        const [rows] = await this.obtenerProductoPorId(req.params.prid);
        res.status(200).json(rows);
    };

    crearProducto = async (req, res) => {
        const [rows] = await this.nuevoProducto(req.body);
        res.status(200).json(rows);
    };

    actualizarProducto = async (req, res) => {
        const [rows] = await this.modificarProducto(req.body);
        res.status(200).json(rows);
    };

    eliminarProducto = async (req, res) => {
        const [rows] = await this.borrarProducto(req.params.prid);
        res.status(200).json(rows);
    };
}
