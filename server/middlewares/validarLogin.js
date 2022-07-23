import { body } from "express-validator";
import { validarErroresExpVal } from './validarErroresExpVal.js'

export const validarLogin = [
    body("email", "Formato de correo no valido").trim().isEmail().normalizeEmail(),
    body('password', "Mínimo 6 caracteres").isLength({ min: 6 }),
    body('password', "Password debe ser tipo string").isString(),
    validarErroresExpVal
]