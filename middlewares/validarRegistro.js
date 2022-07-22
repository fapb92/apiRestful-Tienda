import { body } from "express-validator";
import { validarErroresExpVal } from './validarErroresExpVal.js'

export const validarRegistro = [
    body("nombres", "Formato nombre no valido").trim().isString(),
    body("nombres", "Nombre muy corto").isLength({ min: 1 }),
    body("email", "Formato de correo no valido").trim().isEmail().normalizeEmail(),
    body('password', "Mínimo 6 caracteres").isLength({ min: 6 }),
    body('password', "Password debe ser tipo string").isString(),
    validarErroresExpVal
]