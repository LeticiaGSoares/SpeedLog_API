import { Router } from "express"

export const router = Router()

import { index as motoboysController } from "../controllers/motoboys/index.js"
import { index as motoboysHelpers } from "../helpers/motoboys/index.js"
import upload from "../helpers/upload-public.js"

router.post(
    "/create",
    upload,
    motoboysHelpers.validate,
    motoboysController.create
)