// import { useEffect } from "react"
import { useAuth } from "../../context/authContext"

export const Home = () => {
    const { Auth } = useAuth()

    if (Auth.auth) {
        return (
            <div>
                <h1>Hola {Auth.info.nombres}</h1>
                <h3>¿Que tarea vas a realizar?</h3>
            </div>
        )
    }

    return (
        <div>
            <h1>Bienvenido</h1>
            <h3>Inicia sesión para continuar</h3>
        </div>
    )
}
