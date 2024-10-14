import { z } from "zod"

import formatZodError from "../formatZodError.js";
import returnRes from "../returnRes.js"

const validateBody = (req, res, next) => {
    try {
        const usuarioSchema = z.object({
            nome: z.string({
                required_error: "O nome é obrigatório"
            }).min(3, "O nome é muito pequeno"),
            email: z.string({
                required_error: "O email é obrigatório"
            }),
            data_nascimento: z.string({
                required_error: "A data de nascimento é obrigatória"
            }).datetime(),
            foto: z.string({
                required_error: "A foto é obrigatória"
            }),
            papel: z.string ({
                required_error: "O papel é obrigatório"
            })
        })

        usuarioSchema.parse(req.body);

        next()
    } catch (error) {
        console.error("[HELPER] [POSTAGENS] [VALIDATE BODY CREATE] Error: " + error)
        return returnRes(formatZodError(error), 500, res);
    }
}

export default validateBody