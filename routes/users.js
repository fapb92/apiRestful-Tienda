import { Router } from "express";
import { userController } from "../controllers/usersController.js";
import { connDB } from "../database/dbConfig.js";
import { validarLogin } from "../middlewares/validarLogin.js";
import { validarRegistro } from "../middlewares/validarRegistro.js";

const router = Router();

const usersCont = new userController(connDB)

router.post("/registrar", validarRegistro, usersCont.registrarUsuario)

router.post("/login", validarLogin, usersCont.loginUsuario)


export default router