import { ProductosModel } from "../models/ProductosModel.js";


export class ProductosController extends ProductosModel {
    constructor(conexion) {
        super(conexion);
    }

    listaProductos = async (req, res) => {
        const { from, range } = req.params
        const [rows] = await this.obtenerTodosLosProductos(from, range);
        res.status(200).json(rows);
    };

    listaProductosPorUserId = async (req, res) => {
        const uid = req.params.uid || req.uid;
        const [rows] = await this.obtenerProductosPorUserId(uid);
        res.status(200).json(rows);
    };

    listaProductosPorUserIdAuth = async (req, res) => {
        const [rows] = await this.obtenerProductosPorUserId(req.params.uid);
        res.status(200).json(rows);
    };
    productoPorId = async (req, res) => {
        if (req.rol !== "admin") {
            const [rows] = await this.obtenerProductoPorId(req.params.prid, req.uid);
            return res.status(200).json(rows);
        }
        const [rows] = await this.obtenerProductoPorId(req.params.prid);
        return res.status(200).json(rows);
    };

    crearProducto = async (req, res) => {
        req.body.idUser = req.uid
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
