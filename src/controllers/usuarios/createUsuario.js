import returnRes from "../../helpers/returnRes.js";
import createUsuarioModule from "./modules/create.js";
import { typeOfUsers } from "../../models/Usuario.js";

const createUsuario = async (req, res) => {
    const { papel } = req.body

    try {
        if (papel == typeOfUsers.cliente) {
            const { nome, email, senha, data_nascimento, telefone, cidade } = req.body;
            const foto = req.files?.foto ? req.files.foto[0].path : null;

            const avaliacao = 4

            const cliente = {
                nome,
                email,
                senha,
                foto,
                data_nascimento,
                papel,
                telefone,
                cidade,
                avaliacao
            };
            

            return await createUsuarioModule(typeOfUsers.cliente, cliente, res);
        }

        if (papel == typeOfUsers.motoboy) {
            const { nome, email, senha, data_nascimento, papel, cnh, cpf, moto_placa, moto_modelo } = req.body;
            const foto = req.files?.foto ? req.files.foto[0].path : null;

            const disponivel = true

            const motoboy = {
                nome,
                email,
                senha,
                foto,
                data_nascimento,
                papel,
                cnh,
                cpf,
                moto_placa,
                moto_modelo,
                disponivel
            };

            return await createUsuarioModule(typeOfUsers.motoboy, motoboy, res);
        }

        if (papel == typeOfUsers.administrador) {
            const { nome, email, senha } = req.body;
            const foto = req.files?.foto ? req.files.foto[0].path : null;

            const administrador = {
                nome,
                email,
                senha,
                foto,
                papel
            };

            return await createUsuarioModule(typeOfUsers.administrador, administrador, res);
        }

    } catch (error) {
        console.error("[CONTROLLER] [USUARIOS] [CREATE] Error: " + error);
        return returnRes("Erro ao criar usuário", 500, res);
    }
};

export default createUsuario;
