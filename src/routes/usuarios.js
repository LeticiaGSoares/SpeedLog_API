import { Router } from "express"

export const router = Router()

import { index as usuariosController } from "../controllers/usuarios/index.js"
import { index as usuariosHelpers } from "../helpers/usuarios/index.js"

router.post(
    "/create",
    usuariosHelpers.validate,
    usuariosController.create
)