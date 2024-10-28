import returnRes from "../../helpers/returnRes.js";
import createAdministradorModule from "./modules/create.js";

const createAdministrador = async (req, res) => {
    const { nome, email, senha } = req.body;
    const foto = req.files?.foto ? req.files.foto[0].path : null;

    papel = "administrador"

    const administrador = {
        nome,
        email,
        senha,
        foto,
        papel
    };

    try {
        return await createAdministradorModule(administrador, res);
    } catch (error) {
        console.error("[CONTROLLER] [ADMINSTRADORES] [CREATE] Error: " + error);
        return returnRes("Erro ao criar administrador", 500, res);
    }
};

export default createAdministrador;
