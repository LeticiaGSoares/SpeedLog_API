import { z } from "zod"

import formatZodError from "../formatZodError.js";
import returnRes from "../returnRes.js"

const validateBody = (req, res, next) => {
    try {
        const administradorSchema = z.object({
            nome: z.string({
                required_error: "O nome é obrigatório",
                invalid_type_error: "Nome inválido"
            }).min(3, "O nome é muito pequeno"),
            email: z.string({
                required_error: "O email é obrigatório"
            }).email(
                "Email inválido"
            ),
            foto: z.string({
                invalid_type_error: "Foto inválida"
            }).optional(),
            senha: z.string({
                required_error: "O senha é obrigatória",
                invalid_type_error: "Senha inválida"
            }).min(6, "O senha é muito pequena")
        })

        administradorSchema.parse(req.body);

        next()
    } catch (error) {
        console.error("[HELPER] [ADMINSTRADORES] [VALIDATE BODY] Error: " + error);
        return returnRes(formatZodError(error), 500, res);
    }
}

export default validateBody