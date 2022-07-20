export class ProductosModel {
    constructor(conexion) {
        this.conexion = conexion;
    }

    obtenerTodosLosProductos = async () => {
        return await this.conexion.query('SELECT * FROM products');
    };

    obtenerProductosPorUserId = async (userId) => {
        return await this.conexion.query('SELECT * FROM products WHERE idUser = ?', [userId]);
    };

    obtenerProductoPorId = async (productId) => {
        return await this.conexion.query('SELECT * FROM products WHERE id = ?', [productId]);
    };

    nuevoProducto = async ({ nombre, cantidad, precio, idUser }) => {
        return await this.conexion.query('INSERT INTO products (nombre, cantidad, precio, idUser) values (?, ?, ?, ?);', [nombre, cantidad, precio, idUser]);
    };

    modificarProducto = async ({ nombre, cantidad, precio, prid }) => {
        return await this.conexion.query('UPDATE products SET nombre = ?, cantidad = ?, precio = ? WHERE products.id = ?;', [nombre, cantidad, precio, prid]);
    };

    borrarProducto = async (prid) => {
        return await this.conexion.query("DELETE FROM products WHERE products.id = ?;", [prid]);
    };
}
