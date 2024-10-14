import returnRes from "../../../helpers/returnRes.js";
import Usuario from "../../../models/Usuario.js";

const createAdministradorModule = async (administrador, res) => {
    try {
        const verifyIfExist = await Usuario.findOne( { where: { email: administrador.email, papel: administrador.papel }})

        if (verifyIfExist) {
            return returnRes("Este email já está sendo utilizado", 500, res)
        }

        const administradorCreate = await Usuario.create(administrador);
        
        if (!administradorCreate) {
            return returnRes("Não foi possível criar o administrador", 500, res);
        }

        return returnRes("Administrador criado com sucesso", 201, res);
    } catch (error) {
        console.error("[MODULE] [ADMINSTRADORES] [CREATE] Error: " + error);
        return returnRes("Erro ao criar administrador", 500, res);
    }
};

export default createAdministradorModule;