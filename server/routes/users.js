import { Router } from "express";
import { userController } from "../controllers/usersController.js";
import { connDB } from "../database/dbConfig.js";
import { requiereRefreshToken } from "../middlewares/requiereRefreshToken.js";
import { requiereToken } from "../middlewares/requiereToken.js";
import { validarLogin } from "../middlewares/validarLogin.js";
import { validarRegistro } from "../middlewares/validarRegistro.js";

const router = Router();

const usersCont = new userController(connDB)

router.put("/registrar", validarRegistro, usersCont.registrarUsuario)

router.post("/login", validarLogin, usersCont.loginUsuario)

router.get("/user", requiereToken, usersCont.informacionUsuario)

router.post("/refresh", requiereRefreshToken, usersCont.nuevoToken)

router.post("/logout", usersCont.cerrarSesion)


export default router