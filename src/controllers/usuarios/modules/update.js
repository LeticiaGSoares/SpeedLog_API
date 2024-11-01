import deleteArchive from "../../../helpers/usuarios/deleteArchive.js";
import returnRes from "../../../helpers/usuarios/returnRes.js";
import Usuario from "../../../models/Usuario.js";

const updateUsuarioModule = async (id, usuarioInfo, res) => {
    try {

        const oldUsuario = await Usuario.findOne({ where: { usuario_id: id } })

        if (!oldUsuario) {
            return returnRes("Usuario não encontrada", 404, res);
        }

        await deleteArchive(oldUsuario.foto)

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
