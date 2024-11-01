import { Router } from "express"

export const router = Router()

import { indexControllersUsuarios } from "../controllers/usuarios/index.js"
import { indexHelpersClientes } from "../helpers/usuarios/clientes/index.js"
import { indexHelpersAdministradores } from "../helpers/usuarios/administradores/index.js"
import { indexHelpersMotoboys } from "../helpers/usuarios/motoboys/index.js"
import indexGeneralHelpers from "../helpers/usuarios/index.js"

router.post(
    "/registrar/cliente",
    indexGeneralHelpers.upload,
    indexHelpersClientes.validate,
    indexControllersUsuarios.create
)

router.post(
    "/registrar/motoboy",
    indexGeneralHelpers.upload,
    indexHelpersMotoboys.validate,
    indexControllersUsuarios.create
)

router.post(
    "/registrar/admin",
    indexGeneralHelpers.upload,
    indexHelpersAdministradores.auth,
    indexHelpersAdministradores.validate,
    indexControllersUsuarios.create
)

router.delete(
    "/deletar/:id",
    indexHelpersAdministradores.authWithoutBody,
    indexControllersUsuarios.delete
)

router.put(
    "/atualizar/:id",
    indexGeneralHelpers.upload,
    indexHelpersClientes.auth,
    indexGeneralHelpers.validateBodyUpdate,
    indexControllersUsuarios.update
)

router.get(
    "/",
    indexHelpersAdministradores.authWithoutBody,
    indexControllersUsuarios.search
)

router.post(
    "/login",
    indexGeneralHelpers.multerFormBody,
    indexGeneralHelpers.validateBodyLogin,
    indexControllersUsuarios.login
)