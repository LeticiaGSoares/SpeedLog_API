import createUsuario from "./createUsuario.js"
import deleteUsuario from "./deleteUsuario.js"
import searchUsuario from "./searchUsuario.js"
import updateUsuario from "./updateUsuario.js"

export const indexControllersUsuarios = {
    create: createUsuario,
    delete: deleteUsuario,
    update: updateUsuario,
    search: searchUsuario
}