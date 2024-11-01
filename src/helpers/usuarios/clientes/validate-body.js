import { z } from "zod"
import deleteArchive from "../deleteArchive.js";

import formatZodError from "../formatZodError.js";
import returnRes from "../returnRes.js"

const validateBody = (req, res, next) => {
    try {
        const clienteSchema = z.object({
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
            }).refine((data) => data === "cliente", {
                message: "Papel inválido"
            }),
            senha: z.string({
                required_error: "O senha é obrigatória",
                invalid_type_error: "Senha inválida"
            }).min(6, "O senha é muito pequena"),
            telefone: z.string({
                required_error: "O telefone é obrigatório",
                invalid_type_error: "Telefone inválido"
            }).min(14, "O telefone é muito pequeno")
                .max(15, "O telefone é muito grande"),
            cidade: z.string({
                required_error: "O cidade é obrigatória",
                invalid_type_error: "Cidade inválida"
            }).min(3, "O cidade é muito pequeno").optional(),
        })

        clienteSchema.parse(req.body);

        next()
    } catch (error) {
        deleteArchive(req.files.foto[0].path)
        console.error("[HELPER] [CLIENTES] [VALIDATE BODY] Error: " + error);
        return returnRes(formatZodError(error), 500, res);
    }
}

export default validateBody