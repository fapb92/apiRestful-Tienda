import { Link } from "react-router-dom"

export const RegistroUsuario = () => {
    return (
        <div>
            <form>
                <div>
                    <label for="nombres">Nombres</label>
                    <input type="text" name="nombres" />
                </div>
                <div>
                    <label for="email">Correo</label>
                    <input type="email" name="email" />
                </div>

                <div>
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="submit">Ingresar</button>
                    <Link to="/">Cancelar</Link>
                </div>
            </form>
        </div>
    )
}
