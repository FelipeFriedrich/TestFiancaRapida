const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.usuario = decode;
        next();
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            return res.status(401).send("Falha na Autorização")
        }
        return res.status(400).end("Bad Request")
    }
}