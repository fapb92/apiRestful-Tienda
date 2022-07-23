import { usersModel } from "../models/usersModel.js";
import { generateRefreshToken } from "../utils/generarRefreshToken.js";
import { generarToken } from '../utils/generarToken.js'

export class userController extends usersModel {
    constructor(conexion) {
        super(conexion)
    }

    registrarUsuario = async (req, res) => {
        try {
            const [user] = await this.obtenerUsuarioPorEmail(req.body.email)
            if (!!user.length) throw { codeEr: 403, message: "Usuario ya existe" }

            const [result] = await this.nuevoUsuario(req.body)

            const { token, expiresIn } = generarToken({ id: result.insertId, rol: "vendedor" })
            const refreshToken = generateRefreshToken({ id: result.insertId, rol: "vendedor" })

            return res.status(201).json({ message: "Usuario creado", token, expiresIn, refreshToken })

        } catch (error) {
            if (error?.codeEr) {
                return res.status(error.codeEr).json({ message: error.message })
            }
            return res.status(400).json({ message: error.message })
        }
    }

    loginUsuario = async (req, res) => {
        const { email, password } = req.body
        try {
            const [user] = await this.obtenerUsuarioPorEmail(email)

            if (!user.length) throw { codeEr: 403, message: "Usuario no encontrado" }

            this.password = user[0].password
            const comparedPassword = await this.compararPassword(password)
            if (!comparedPassword) throw { codeEr: 403, message: "Contraseña incorrecta" }
            this.password = ''

            const { token, expiresIn } = generarToken({ id: user[0].id, rol: user[0].rol })
            const refreshToken = generateRefreshToken({ id: user[0].id, rol: user[0].rol })

            return res.status(200).json({ message: "login ok", token, expiresIn, refreshToken })

        } catch (error) {
            if (error?.codeEr) {
                return res.status(error.codeEr).json({ message: error.message })
            }
            return res.status(400).json({ message: error.message })
        }
    }

    informacionUsuario = async (req, res) => {
        const [rows] = await this.obtenerUsuarioPorId(req.uid)
        return res.status(200).json(rows[0])
    }

    nuevoToken = (req, res) => {
        const { token, expiresIn } = generarToken({ id: req.uid, rol: req.rol })
        return res.status(200).json({ token, expiresIn })
    }

    cerrarSesion = (_, res) => {
        res.json({ message: "ok" })
    }
}
