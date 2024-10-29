import returnRes from "../../../helpers/returnRes.js";
import Usuario from "../../../models/Usuario.js";
import { typeOfUsers } from "../../../models/Usuario.js";
import deleteArchive from "../../../helpers/deleteArchive.js";

const createUsuarioModule = async (type, usuario, res) => {
    try {

        const verifyIfExist = await Usuario.findOne({ where: { email: usuario.email, papel: usuario.papel } })

        if (verifyIfExist) {
            await deleteArchive(usuario.foto)
            return returnRes("Este email já está sendo utilizado", 500, res)
        }

        if (type == typeOfUsers.motoboy) {
            const verifyIfExistCPF = await Usuario.findOne({ where: { cpf: usuario.email, papel: usuario.papel } })

            if (verifyIfExistCPF) {
                await deleteArchive(usuario.foto)
                return returnRes("Este CPF já está sendo utilizado", 500, res)
            }
        }

        const usuarioCreate = await Usuario.create(usuario);

        if (!usuarioCreate) {
            await deleteArchive(usuario.foto)
            return returnRes("Não foi possível criar o usuario", 500, res);
        }

        return returnRes(`Usuário criado do tipo ${type} com sucesso`, 201, res);
    } catch (error) {
        console.error("[MODULE] [USUARIOS] [CREATE] Error: " + error);
        return returnRes("Erro ao criar usuário", 500, res);
    }
};

export default createUsuarioModule;