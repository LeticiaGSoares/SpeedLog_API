import returnRes from "../../helpers/returnRes.js";
import createUsuarioModule from "./modules/create.js";

const createUsuario = async (req, res) => {
    const { nome, email, senha, data_nascimento, papel, telefone, cidade } = req.body;
    const foto = req.files?.foto ? req.files.foto[0].path : null;

    const avaliacao = 4

    const usuario = {
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

    try {
        return await createUsuarioModule(usuario, res);
    } catch (error) {
        console.error("[CONTROLLER] [USUARIOS] [CREATE] Error: " + error);
        return returnRes("Erro ao criar usuário", 500, res);
    }
};

export default createUsuario;
