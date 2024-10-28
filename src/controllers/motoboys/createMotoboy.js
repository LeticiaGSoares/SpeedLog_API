import returnRes from "../../helpers/returnRes.js";
import createMotoboyModule from "./modules/create.js";

const createMotoboy = async (req, res) => {
    const { nome, email, senha, data_nascimento, papel, cnh, cpf, moto_placa, moto_modelo } = req.body;
    const foto = req.files?.foto ? req.files.foto[0].path : null;

    const disponivel = true

    const motoboy = {
        nome,
        email,
        senha,
        foto,
        data_nascimento,
        papel, 
        cnh, 
        cpf, 
        moto_placa, 
        moto_modelo, 
        disponivel
    };

    try {
        return await createMotoboyModule(motoboy, res);
    } catch (error) {
        console.error("[CONTROLLER] [MOTOBOYS] [CREATE] Error: " + error);
        return returnRes("Erro ao criar motoboy", 500, res);
    }
};

export default createMotoboy;