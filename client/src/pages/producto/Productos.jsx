import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../../context/productContext";
import { peticionesAuth } from "../../../utils/peticionesAuth";


export const Productos = () => {
    const { leerProductos, productos } = useProduct()

    useEffect(() => {
        leerProductos()
    }, [])
    return (
        <div>
            <div>
                <Link to={"crear"}>Nuevo</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, ind) => (

                            <tr key={producto.id}>
                                <td>{ind + 1}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.precio}</td>
                                <td><Link to={`/productos/${producto.id}`}>Ver</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
