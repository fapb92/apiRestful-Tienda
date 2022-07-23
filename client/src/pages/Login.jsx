import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/authContext"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await login(email, password);
    }
    return (
        <div>
            <form onSubmit={async e => await handleOnSubmit(e)}>
                <div>
                    <label for="email">Correo</label>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                </div>

                <div>
                    <label for="password">Contraseña</label>
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
