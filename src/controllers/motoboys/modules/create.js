import returnRes from "../../../helpers/returnRes.js";
import Usuario from "../../../models/Usuario.js";

const createMotoboyModule = async (motoboy, res) => {
    try {
        const verifyIfExist = await Usuario.findOne( { where: { email: motoboy.email, papel: motoboy.papel }})

        if (verifyIfExist) {
            return returnRes("Este email já está sendo utilizado", 500, res)
        }

        const verifyIfExistCPF = await Usuario.findOne( { where: { cpf: motoboy.email, papel: motoboy.papel }})

        if (verifyIfExistCPF) {
            return returnRes("Este CPF já está sendo utilizado", 500, res)
        }

        const motoboyCreate = await Usuario.create(motoboy);
        
        if (!motoboyCreate) {
            return returnRes("Não foi possível criar o motoboy", 500, res);
        }

        return returnRes("Motoboy criado com sucesso", 201, res);
    } catch (error) {
        console.error("[MODULE] [MOTOBOYS] [CREATE] Error: " + error);
        return returnRes("Erro ao criar motoboy", 500, res);
    }
};

export default createMotoboyModule;