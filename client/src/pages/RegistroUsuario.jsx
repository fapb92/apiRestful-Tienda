import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext"

export const RegistroUsuario = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombres, setNombres] = useState("")
    const { registro, Auth } = useAuth()
    const navigate = useNavigate()

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await registro(nombres, email, password);
    }

    useEffect(() => {
        if (Auth.auth) {
            navigate("/", { replace: true });
        }
    }, [Auth])
    return (
        <div>
            <form onSubmit={async e => await handleOnSubmit(e)}>
                <div>
                    <label>Nombres</label>
                    <input type="text" name="nombres" onChange={e => setNombres(e.target.value)} value={nombres} />
                </div>
                <div>
                    <label>Correo</label>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                </div>

                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <button type="submit">Registrarse</button>
                    <Link to="/">Cancelar</Link>
                </div>
            </form>
        </div>
    )
}
