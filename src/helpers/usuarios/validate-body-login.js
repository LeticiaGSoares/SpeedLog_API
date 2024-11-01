import { z } from "zod"

import returnRes from "./returnRes.js"
import formatZodError from "./formatZodError.js";
import { typeOfUsers } from "../../models/Usuario.js";

const validateBodyLogin = (req, res, next) => {
    try {
        const loginSchema = z.object({
            email: z.string({
                required_error: "O email é obrigatório"
            }).email(
                "Email inválido"
            ),
            papel: z.string({
                required_error: "O papel é obrigatório"
            }).refine((data) => data === typeOfUsers.administrador || data === typeOfUsers.motoboy || data === typeOfUsers.cliente, {
                message: "Papel inválido"
            }),
            senha: z.string({
                required_error: "O senha é obrigatória",
                invalid_type_error: "Senha inválida"
            }).min(6, "O senha é muito pequena"),
            confirmarSenha: z.string({
                required_error: "O senha é obrigatória",
                invalid_type_error: "Senha inválida"
            }).min(6, "O senha é muito pequena").superRefine((data, ctx) => {
                if (data.senha !== data.confirmarSenha) {
                    ctx.addIssue({
                        path: ["confirmarSenha"],
                        message: "As senhas não coincidem",
                    });
                }
            }), 
        })

        loginSchema.parse(req.body);
        next()
    } catch (error) {
        console.error("[HELPER] [USUARIOS] [VALIDATE BODY LOGIN] Error: " + error);
        return returnRes(formatZodError(error), 500, res);
    }
}

export default validateBodyLogin