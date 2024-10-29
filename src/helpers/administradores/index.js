import authToken from "./auth-token.js"
import validateBody from "./validate-body.js"

export const indexHelpersAdministradores = {
    validate: validateBody,
    auth: authToken
}