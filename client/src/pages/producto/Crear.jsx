import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useProduct } from "../../../context/productContext"

export const CrearProducto = () => {
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [precio, setPrecio] = useState("")
    const { crearProducto } = useProduct()
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        crearProducto(nombre, cantidad, precio)
        navigate(-1)
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label >Nombre</label>
                <input type="text" name="nombre" onChange={e => setNombre(e.target.value)} value={nombre} />
            </div>
            <div>
                <label >Cantidad</label>
                <input type="text" name="cantidad" onChange={e => setCantidad(e.target.value)} value={cantidad} />
            </div>
            <div>
                <label >Precio</label>
                <input type="text" name="precio" onChange={e => setPrecio(e.target.value)} value={precio} />
            </div>
            <div>
                <button>Crear</button>
                <Link to="/productos">Cancelar</Link>
            </div>
        </form>
    )
}
