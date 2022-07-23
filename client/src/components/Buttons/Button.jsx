import { useNavigate } from "react-router-dom"


export const Button = ({ children }) => {
    let navigate = useNavigate()
    const navTo = { "Iniciar sesión": "/login", "Cerrar sesión": "/" }

    const handleClick = (e) => {
        e.preventDefault()
        navigate(navTo[children])
    }

    return (
        <button onClick={e => handleClick(e)}>
            {children}
        </button>
    )
}
