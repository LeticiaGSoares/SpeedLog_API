import { Router } from "express"

export const router = Router()

import { index as usuariosController } from "../controllers/usuarios/index.js"
import { index as helpersUsuarios } from "../helpers/usuarios/index.js"

router.post(
    "/usuarios/create",
    helpersUsuarios.validate,
    usuariosController.create
)