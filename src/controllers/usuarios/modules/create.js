import returnRes from "../../../helpers/returnRes.js";
import Usuario from "../../../models/Usuario.js";

const createUsuarioModule = async (usuario, res) => {
    try {
        const verifyIfExist = await Usuario.findOne( { where: { email: usuario.email, papel: usuario.papel }})

        if (verifyIfExist) {
            return returnRes("Este email já está sendo utilizado", 500, res)
        }

        const usuarioCreate = await Usuario.create(usuario);
        
        if (!usuarioCreate) {
            return returnRes("Não foi possível criar o usuário", 500, res);
        }

        return returnRes("Usuário criado com sucesso", 201, res);
    } catch (error) {
        console.error("[MODULE] [USUARIOS] [CREATE] Error: " + error);
        return returnRes("Erro ao criar usuário", 500, res);
    }
};

export default createUsuarioModule;