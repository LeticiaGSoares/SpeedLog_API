import { Router } from "express"

export const router = Router()

import { index as usuariosController } from "../controllers/usuarios/index.js"
import { index as usuariosHelpers } from "../helpers/usuarios/index.js"
import upload from "../helpers/upload-public.js"

router.post(
    "/create",
    upload,
    usuariosHelpers.validate,
    usuariosController.create
)