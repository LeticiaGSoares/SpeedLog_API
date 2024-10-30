import returnRes from "../../../helpers/returnRes.js";
import Usuario from "../../../models/Usuario.js";
import deleteArchive from "../../../helpers/deleteArchive.js";

const deleteUsuarioModule = async (id, res) => {
    try {
        const deleteUsuario = await Usuario.destroy({ where: { usuario_id: id } })

        if (!deleteUsuario) {
            return returnRes("Não foi possivel deletar o usuário", 500, res)
        }

        return returnRes("Usuário deletado com sucesso", 200, res)
    } catch (error) {
        console.error("[MODULE] [USUARIOS] [DELETE] Error: " + error);
        return returnRes("Erro ao deletar usuário", 500, res);
    }
};

export default deleteUsuarioModule;