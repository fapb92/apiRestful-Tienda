import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { peticionesAuth } from "../utils/peticionesAuth";
import { useAuth } from "./authContext";

export const ProductContext = createContext();

export const useProduct = () => {
    return useContext(ProductContext)
}

axios.defaults.baseURL = "http://localhost:5000/"

export const ProductProvider = ({ children }) => {
    const { Auth } = useAuth()
    const [productos, setProductos] = useState([])

    function getProductos(token) {
        axios.get("/products/lista", {
            headers: {
                "authorization": `Bearer ${token}`
            }
        }).then((res) => {
            const productsRows = res.data;
            setProductos(productsRows)

        }).catch((err) => {
            console.log(err);
        });
    }

    function leerProductos() {
        peticionesAuth(getProductos)
    }

    function crearNuevoProducto(token, { nombre, cantidad, precio }) {
        axios(
            {
                method: "put",
                url: "/products/crear",
                data: {
                    nombre,
                    cantidad,
                    precio
                },
                headers: {
                    "authorization": `Bearer ${token}`
                }
            }).then((res) => {
                const productsRows = res.data;
                console.log(productsRows);
            }).catch((err) => {
                console.log(err);
            });
    }


    function crearProducto(nombre, cantidad, precio) {
        peticionesAuth(crearNuevoProducto, { nombre, cantidad, precio })
    }

    function getProductoPorId(token, { prid, setNombre, setCantidad, setPrecio }) {
        axios.get(`/products/lista/${prid}`, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        }).then((res) => {
            const pRows = res.data;
            setNombre(pRows[0].nombre)
            setCantidad(pRows[0].cantidad)
            setPrecio(pRows[0].precio)

        }).catch((err) => {
            console.log(err);
        });
    }

    function leerProductoPorId(prid, setNombre, setCantidad, setPrecio) {
        peticionesAuth(getProductoPorId, { prid, setNombre, setCantidad, setPrecio })
    }

    function EditarProducto(token, { nombre, cantidad, precio, prid }) {
        axios(
            {
                method: "put",
                url: "/products/actualizar",
                data: {
                    nombre,
                    cantidad,
                    precio,
                    prid
                },
                headers: {
                    "authorization": `Bearer ${token}`
                }
            }).then((res) => {
                const productsRows = res.data;
                console.log(productsRows);
            }).catch((err) => {
                console.log(err);
            });
    }


    function guardarProductoEditado(nombre, cantidad, precio, prid) {
        peticionesAuth(EditarProducto, { nombre, cantidad, precio, prid })
    }

    function EliminarProducto(token, { prid }) {
        axios(
            {
                method: "delete",
                url: `/products/borrar/${prid}`,
                headers: {
                    "authorization": `Bearer ${token}`
                }
            }).then((res) => {
                const productsRows = res.data;
                console.log(productsRows);
            }).catch((err) => {
                console.log(err);
            });
    }


    function borrarProducto(prid) {
        peticionesAuth(EliminarProducto, { prid })
    }


    useEffect(() => {

    }, [Auth])

    return (
        <ProductContext.Provider value={{ leerProductos, productos, crearProducto, leerProductoPorId, guardarProductoEditado, borrarProducto }}>
            {children}
        </ProductContext.Provider>

    )
}
