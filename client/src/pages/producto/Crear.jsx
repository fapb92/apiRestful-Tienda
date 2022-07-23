import { Link } from "react-router-dom"

export const CrearProducto = () => {
    return (
        <form>
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" />
            </div>
            <div>
                <label for="cantidad">Cantidad</label>
                <input type="text" name="cantidad" />
            </div>
            <div>
                <label for="precio">Precio</label>
                <input type="text" name="precio" />
            </div>
            <div>
                <button>Crear</button>
                <Link to="/productos">Cancelar</Link>
            </div>
        </form>
    )
}
