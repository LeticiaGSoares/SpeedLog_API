import { Router } from "express"

export const router = Router()

import { index as motoboysController } from "../controllers/motoboys/index.js"
import { index as motoboysHelpers } from "../helpers/motoboys/index.js"

router.post(
    "/create",
    motoboysHelpers.validate,
    motoboysController.create
)