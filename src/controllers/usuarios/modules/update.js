import returnRes from "../../../helpers/returnRes.js";
import Usuario from "../../../models/Usuario.js";

const updateUsuarioModule = async (id, usuarioInfo, res) => {
    try {
        
        const [linhasUsuarios] = await Usuario.update(usuarioInfo, {
            where: { usuario_id: id },
        });

        if (linhasUsuarios <= 0) {
            return returnRes("Usuario não encontrada", 404, res);
        }

        return returnRes("Usuario atualizado com sucesso", 200, res);
    } catch (error) {
        console.error("[MODULE] [USUARIOS] [UPDATE] Error: " + error);
        return returnRes("Erro ao atualizar usuário", 500, res);
    }
};

export default updateUsuarioModule;
