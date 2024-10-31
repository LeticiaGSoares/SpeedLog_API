import { Router } from "express"

export const router = Router()

import { indexControllersUsuarios } from "../controllers/usuarios/index.js"
import { indexHelpersClientes } from "../helpers/clientes/index.js"
import { indexHelpersAdministradores } from "../helpers/administradores/index.js"
import { indexHelpersMotoboys } from "../helpers/motoboys/index.js"
import upload from "../helpers/upload-public.js"

router.post(
    "/registrar/cliente",
    upload,
    indexHelpersClientes.validate,
    indexControllersUsuarios.create
)

router.post(
    "/registrar/motoboy",
    upload,
    indexHelpersMotoboys.validate,
    indexControllersUsuarios.create
)

router.post(
    "/registrar/admin",
    upload,
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
    upload,
    indexHelpersClientes.auth,
    indexControllersUsuarios.update
)