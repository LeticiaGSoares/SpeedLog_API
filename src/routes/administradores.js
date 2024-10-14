import { Router } from "express"

export const router = Router()

import { index as administradoresController } from "../controllers/administradores/index.js"
import { index as administradoresHelpers } from "../helpers/administradores/index.js"

router.post(
    "/create",
    administradoresHelpers.validate,
    administradoresController.create
)