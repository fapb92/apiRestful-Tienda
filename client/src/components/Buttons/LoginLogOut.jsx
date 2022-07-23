import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/authContext"


export const LoginLogOutBut = ({ children }) => {
    let navigate = useNavigate()
    const { logOut } = useAuth()

    const handleClick = {
        "Iniciar sesión": (e) => {
            e.preventDefault()
            navigate("/login")
        },
        "Cerrar sesión": (e) => {
            e.preventDefault()
            console.log("entre");
            navigate("/", { replace: true });
            logOut()
        }
    }
    return (
        <button onClick={e => handleClick[children](e)}>
            {children}
        </button>
    )
}
