import jwt from "jsonwebtoken";
import "dotenv/config"

const SECRET_KEY = process.env.JWT_PASS

const createToken = async (user, res) => {

    try {
        const accessToken = jwt.sign({
            id: user.usuario_id,
            nome: user.nome,
            papel: user.papel,
            senha: user.senha
        }, SECRET_KEY, { expiresIn: '30d' })

        console.log(`Token do tipo ${user.papel} do usuário ${user.nome} criado: \n ${accessToken}`)
        return true
    } catch (error) {
        return res.status(500).json({ message: "Erro interno do servidor" + error })
    }

}

export default createToken;