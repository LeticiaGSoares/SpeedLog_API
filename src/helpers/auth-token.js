import jwt from 'jsonwebtoken'

const authToken = async (req, res, authType) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) return res.sendStatus(401); 

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); //403 = proibido
        res.json({ message: 'Você não está autenticado', user });

        if(!decoded || decoded.type !== authType) {
            return res.status(401).json({ message: "Você não está autorizado" })
        }
    });
}
export default authToken;