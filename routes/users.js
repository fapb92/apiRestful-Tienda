import { Router } from "express";
import { userController } from "../controllers/usersController.js";
import { connDB } from "../database/dbConfig.js";

const router = Router();

const usersCont = new userController(connDB)

router.post("/registrar", usersCont.registrarUsuario)

router.post("/login", usersCont.loginUsuario)


export default router