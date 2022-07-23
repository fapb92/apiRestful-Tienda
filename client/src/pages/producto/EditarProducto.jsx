import { Link } from "react-router-dom"

export const EditarProducto = () => {
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
                <button>Guardar</button>
                <Link to="/productos">Cancelar</Link>
            </div>
        </form>
    )
}
