import { Router } from "express"

export const router = Router()

import { indexControllersUsuarios } from "../controllers/usuarios/index.js"
import { indexHelpersClientes } from "../helpers/usuarios/clientes/index.js"
import { indexHelpersAdministradores } from "../helpers/usuarios/administradores/index.js"
import { indexHelpersMotoboys } from "../helpers/usuarios/motoboys/index.js"
import indexUsuariosGlobalHelpers from "../helpers/usuarios/index.js"

router.post(
    "/registrar/cliente",
    indexUsuariosGlobalHelpers.upload,
    indexHelpersClientes.validate,
    indexControllersUsuarios.create
)

router.post(
    "/registrar/motoboy",
    indexUsuariosGlobalHelpers.upload,
    indexHelpersMotoboys.validate,
    indexControllersUsuarios.create
)

router.post(
    "/registrar/admin",
    indexUsuariosGlobalHelpers.upload,
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
    indexUsuariosGlobalHelpers.upload,
    indexUsuariosGlobalHelpers.auth,
    indexUsuariosGlobalHelpers.validateBodyUpdate,
    indexControllersUsuarios.update
)

router.get(
    "/logout",
    indexUsuariosGlobalHelpers.auth,
    indexControllersUsuarios.logout
)
   
router.get(
    "/",
    indexHelpersAdministradores.authWithoutBody,
    indexControllersUsuarios.search
)   

router.post(
    "/login",
    indexUsuariosGlobalHelpers.multerFormBody,
    indexUsuariosGlobalHelpers.validateBodyLogin,
    indexControllersUsuarios.login
)