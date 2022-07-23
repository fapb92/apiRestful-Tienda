
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../Buttons/Button'
// import "./navbar.css"

export const NavBar = () => {
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
                        <Button>Iniciar sesión</Button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
