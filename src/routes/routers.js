import { Router } from "express";

const routers = Router()

import { router as routerUsuarios } from "./usuarios.js"

routers.use("/usuario", routerUsuarios)

export default routers