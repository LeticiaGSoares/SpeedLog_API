import { z } from "zod"

import formatZodError from "../formatZodError.js";
import returnRes from "../returnRes.js"

const validateBody = (req, res, next) => {
    try {
        const motoboySchema = z.object({
            nome: z.string({
                required_error: "O nome é obrigatório",
                invalid_type_error: "Nome inválido"
            }).min(3, "O nome é muito pequeno"),
            email: z.string({
                required_error: "O email é obrigatório"
            }).email(
                "Email inválido"
            ),
            data_nascimento: z.string({
                required_error: "A data de nascimento é obrigatória"
            }).date(
                "Data de nascimento inválida"
            ),
            foto: z.string({
                invalid_type_error: "Foto inválida"
            }).optional(),
            papel: z.string({
                required_error: "O papel é obrigatório"
            }).refine((data) => data === "motoboy", {
                message: "Papel inválido"
            })
        })

        motoboySchema.parse(req.body);

        next()
    } catch (error) {
        console.error("[HELPER] [MOTOBOYS] [VALIDATE BODY] Error: " + error);
        return returnRes(formatZodError(error), 500, res);
    }
}

export default validateBody