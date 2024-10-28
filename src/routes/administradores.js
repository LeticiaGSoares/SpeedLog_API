import { Router } from "express"

export const router = Router()

import { index as administradoresController } from "../controllers/administradores/index.js"
import { index as administradoresHelpers } from "../helpers/administradores/index.js"
import upload from "../helpers/upload-public.js"

router.post(
    "/create",
    upload,
    administradoresHelpers.validate,
    administradoresController.create
)