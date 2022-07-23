import { param } from "express-validator";
import { validarErroresExpVal } from '../validarErroresExpVal.js'

export const validarProductId = [
    param("prid", "Debe ser entero").isInt().toInt(),
    validarErroresExpVal
]