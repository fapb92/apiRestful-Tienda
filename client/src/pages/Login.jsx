import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, Auth } = useAuth()
    const navigate = useNavigate()

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await login(email, password);
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
                    <label>Correo</label>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                </div>

                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <button type="submit">Ingresar</button>
                    <Link to="/">Cancelar</Link>
                </div>
            </form>
            <div>
                <Link to="/registrar">Registrase</Link>
            </div>
        </div>
    )
}
