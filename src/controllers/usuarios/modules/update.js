import returnRes from "../../../helpers/returnRes.js";
import Usuario from "../../../models/Usuario.js";

const updateUsuarioModule = async (id, usuarioInfo, res) => {
    try {
        
        await Usuario.update(usuarioInfo, {
            where: { usuario_id: id },
        });

        return returnRes("Usuario atualizado com sucesso", 200, res);
    } catch (error) {
        console.error("[MODULE] [USUARIOS] [UPDATE] Error: " + error);
        return returnRes("Erro ao atualizar usuário", 500, res);
    }
};

export default updateUsuarioModule;
