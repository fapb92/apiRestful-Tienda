import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useProduct } from "../../../context/productContext"

export const EditarProducto = () => {
    const { prid } = useParams()
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [precio, setPrecio] = useState("")
    const { leerProductoPorId, guardarProductoEditado, borrarProducto } = useProduct()
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        guardarProductoEditado(nombre, cantidad, precio, prid)
        navigate(-1);
    }

    const consultarProducto = (prid) => {
        leerProductoPorId(prid, setNombre, setCantidad, setPrecio)
    }

    function handleClick(e) {
        e.preventDefault()
        borrarProducto(prid)
        navigate(-1);
    }

    useEffect(() => {
        consultarProducto(prid)

        // setNombre("")
        // setCantidad("")
        // setPrecio("")
    }, [prid])
    return (
        <div>
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
                    <button>Guardar</button>
                    <Link to="/productos">Cancelar</Link>
                </div>
            </form>
            <div>
                <button onClick={e => handleClick(e)}>
                    Eliminar
                </button>
            </div>

        </div>
    )
}
