import returnRes from "../../helpers/usuarios/returnRes.js";
import loginUsuarioModule from "./modules/login.js";

const loginUsuario = async (req, res) => {
    const { email, papel, senha } = req.body

    try {
        const usuario = {
            email: email,
            senha: senha,
            papel: papel,
        }

        loginUsuarioModule(usuario, res)
    } catch (error) {
        console.error("[CONTROLLER] [USUARIOS] [LOGIN] Error: " + error);
        return returnRes("Erro ao realizar o login do usuário", 500, res);
    }
};

export default loginUsuario;
