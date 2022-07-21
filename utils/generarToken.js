import jwt from "jsonwebtoken";
import 'dotenv/config'

export const generarToken = (data) => {
    const expiresIn = 60 * 20
    const token = jwt.sign({ data }, process.env.JWT_SECRET_TOKEN, { expiresIn })
    return { token, expiresIn }
}