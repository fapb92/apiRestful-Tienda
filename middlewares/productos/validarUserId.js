import { param } from "express-validator";
import { validarErroresExpVal } from '../validarErroresExpVal.js'

export const validarUserId = [
    param("uid", "Debe ser entero").isInt().toInt(),
    validarErroresExpVal
]