import returnRes from "../../helpers/returnRes.js";
import { typeOfUsers } from "../../models/Usuario.js";
import deleteUsuarioModule from "./modules/delete.js";

const deleteUsuario = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        deleteUsuarioModule(id)    
    } catch (error) {
        console.error("[CONTROLLER] [USUARIOS] [DELETE] Error: " + error);
        return returnRes("Erro ao deletar usuário", 500, res);
    }
};

export default deleteUsuario;
