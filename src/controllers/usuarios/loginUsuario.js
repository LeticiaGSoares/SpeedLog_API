import returnRes from "../../helpers/usuarios/returnRes.js";
import loginUsuarioModule from "./modules/search.js";

const loginUsuario = async (req, res) => {
    const { nome, email, papel, senha } = req.body

    try {
        const usuario = {
            nome: nome,
            email: email,
            senha: senha,
            papel: papel,
        }

        loginUsuarioModule()
    } catch (error) {
        console.error("[CONTROLLER] [USUARIOS] [SEARCH] Error: " + error);
        return returnRes("Erro ao realizar o login do usuário", 500, res);
    }
};

export default loginUsuario;
