export class ProductosModel {
    constructor(conexion) {
        this.conexion = conexion;
    }

    obtenerTodosLosProductos = async (from = 0, rows = 10) => {
        return await this.conexion.query('SELECT products.id, products.nombre, products.precio, users.nombres as usuario FROM products INNER JOIN users ON products.idUser=users.id LIMIT ?, ?', [from, rows]);
    };

    obtenerProductosPorUserId = async (userId) => {
        return await this.conexion.query('SELECT * FROM products WHERE idUser = ?', [userId]);
    };

    obtenerProductoPorId = async (productId, userId = 0) => {
        if (userId === 0) {
            return await this.conexion.query('SELECT * FROM products WHERE id = ?', [productId]);

        }
        return await this.conexion.query('SELECT * FROM products WHERE id = ?, idUser = ?', [productId, userId]);
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
