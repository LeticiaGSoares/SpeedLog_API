import jwt from "jsonwebtoken";
import "dotenv/config"
import {cookie} from 'cookie-parser';

const SECRET_KEY = process.env.JWT_PASS

const createToken = async (user, res)=>{

    try{
        const accessToken = jwt.sign({
            nome: user.nome,
            papel: user.papel,
            senha: user.senha
        }, SECRET_KEY, {expiresIn: '15m' } )
        const refreshToken = jwt.sign({user}, SECRET_KEY, {expiresIn: '30d' } )
        
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,    // Impede que o JavaScript do navegador acesse o cookie
            secure: true,      // Envia o cookie apenas em conexões HTTPS (ideal para produção)
            sameSite: 'Strict', // Protege contra CSRF ao restringir o envio do cookie a requisições do mesmo site
            maxAge: 30 * 24 * 60 * 60 * 1000 // Tempo de expiração do cookie (30 dias em milissegundos)
        });
        
        return accessToken;
    }catch(error){
        return res.status(500).json({message: "Erro interno do servidor" + error})
    }

}

export default createToken;