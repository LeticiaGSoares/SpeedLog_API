import returnRes from "../../../helpers/returnRes.js";
import Usuario from "../../../models/Usuario.js";
import deleteArchive from "../../../helpers/deleteArchive.js";

const deleteUsuarioModule = async (id, res) => {
    try {

    } catch (error) {
        console.error("[MODULE] [USUARIOS] [DELETE] Error: " + error);
        return returnRes("Erro ao deletar usuário", 500, res);
    }
};

export default deleteUsuarioModule;