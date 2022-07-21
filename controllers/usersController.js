import { usersModel } from "../models/usersModel.js";
import { generarToken } from '../utils/generarToken.js'

export class userController extends usersModel {
    constructor(conexion) {
        super(conexion)
    }

    registrarUsuario = async (req, res) => {
        try {
            const [user] = await this.obtenerUsuarioPorEmail(req.body.email)
            if (!!user.length) throw { code: 403, message: "Usuario ya existe" }

            const [result] = await this.nuevoUsuario(req.body)

            console.log(result.insertId);

            const { token, expiresIn } = generarToken({ id: result.insertId })

            return res.status(201).json({ message: "Usuario creado", token, expiresIn })

        } catch (error) {
            return res.status(error.code).json({ message: error.message })
        }
    }

    loginUsuario = async (req, res) => {
        const { email, password } = req.body
        try {
            const [user] = await this.obtenerUsuarioPorEmail(email)

            if (!user.length) throw { code: 403, message: "Usuario no encontrado" }

            this.password = user[0].password
            const comparedPassword = await this.compararPassword(password)
            if (!comparedPassword) throw { code: 403, message: "Contraseña incorrecta" }

            const { token, expiresIn } = generarToken({ id: user[0].id })

            return res.status(200).json({ message: "login ok", token, expiresIn })

        } catch (error) {
            return res.status(error.code).json({ message: error.message })
        }
    }

    informacionUsuario = async (req, res) => {
        const [rows] = await this.obtenerUsuarioPorId(req.body.id)
    }
}
