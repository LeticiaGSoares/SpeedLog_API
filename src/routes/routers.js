import { Router } from "express";

const routers = Router()

import { router as routerUsuarios } from "./usuarios.js"

routers.use("/usuarios", routerUsuarios)

import { router as routerAdministrador } from "./administradores.js"

routers.use("/administradores", routerAdministrador)

import { router as routerMotoboy } from "./motoboys.js"

routers.use("/motoboys", routerMotoboy)

export default routers