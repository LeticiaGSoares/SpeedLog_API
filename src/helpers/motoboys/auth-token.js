import jwt from 'jsonwebtoken'
import "dotenv/config"
import Usuario, { typeOfUsers } from "../../models/Usuario.js"
import deleteArchive from '../deleteArchive.js'
import returnRes from '../returnRes.js'

const SECRET_KEY = process.env.JWT_PASS

const authToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    try {
        const verifyLengthAdmins = await Usuario.findAll({ where: { papel: "administrador" } })
        const verifyLengthMotoboys = await Usuario.findAll({ where: { papel: "motoboy" } })

        if (!token && verifyLengthAdmins.length < 1 || !token && verifyLengthMotoboys.length < 1) {
            return next()
        }

        if (!token && verifyLengthAdmins.length > 0 || !token && verifyLengthMotoboys.length > 0) {
            await deleteArchive(req.files.foto[0].path)
            return returnRes("Você não está autorizado e não aplicou um token válido", 401, res)
        }

        jwt.verify(token, SECRET_KEY, async (err, user) => {

            if (user.papel != typeOfUsers.administrador || user.papel != typeOfUsers.motoboy) {
                return returnRes("Você não está autorizado", 403, res)
            }

            next()
        });
    } catch (error) {
        console.error("[HELPERS] [MOTOBOYS] [TOKEN] Error: " + error);
        return returnRes("Erro ao autenticar token", 500, res);
    }
}
export default authToken;