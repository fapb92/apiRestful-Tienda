
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'
import { LoginLogOutBut } from '../Buttons/LoginLogOut'
// import "./navbar.css"

export const NavBar = () => {
    const { Auth } = useAuth()

    return (
        <nav>
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to="/productos">
                        productos
                    </NavLink>
                </li>
                <li>
                    <div>
                        <LoginLogOutBut>{Auth.auth ? "Cerrar sesión" : "Iniciar sesión"}</LoginLogOutBut>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
