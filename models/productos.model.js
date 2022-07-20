
export const obtenerTodosLosProductos = async (conexion) => {
    return await conexion.query('SELECT * FROM products')
}

export const obtenerProductosPorUserId = async (conexion, userId) => {
    return await conexion.query('SELECT * FROM products WHERE idUser = ?', [userId])
}