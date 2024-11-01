import createToken from "../../../helpers/usuarios/create-token.js";
import returnRes from "../../../helpers/usuarios/returnRes.js";
import Usuario from "../../../models/Usuario.js";

const loginUsuarioModule = async (usuario, res) => {
    try {

        const usuarioInfo = await Usuario.findOne({ where: { email: usuario.email, papel: usuario.papel } })

        if (!usuarioInfo) {
            return returnRes("Usuario não encontrada", 404, res);
        }

        if (usuario.senha !== usuarioInfo.senha) {
            return returnRes("Senhas não coincidem", 500, res);
        }

        const createdToken = await createToken(usuario, res)

        if (!createToken) {
            return returnRes("Error na criação do token", 500, res);
        }

        return returnRes("Usuario logado com sucesso: " + createdToken, 200, res);
    } catch (error) {
        console.error("[MODULE] [USUARIOS] [LOGIN] Error: " + error);
        return returnRes("Erro ao realizar login do usuário", 500, res);
    }
};

export default loginUsuarioModule;
