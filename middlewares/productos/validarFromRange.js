import { param } from "express-validator";
import { validarErroresExpVal } from '../validarErroresExpVal.js'

export const validarFromRange = [
    param("from", "Debe ser entero").isInt().toInt(),
    param("range", "Debe ser entero").isInt().toInt(),
    validarErroresExpVal
]