const jwt = require('jsonwebtoken')
const userModel = require('../models/users')
const bcrypt = require("bcrypt")

class loginServices {
    constructor() {

    }

    async signin(user) {
        const { email, password } = user;
        const verifyHasAccount = await userModel.selectUserByEmail(user.email);
        if (verifyHasAccount.length > 0) {
            const passswordValid = await bcrypt.compare(password, verifyHasAccount[0].dataValues.password)
            if (passswordValid) {
                let token = this.gerateToken(email)
                return { status: 200, token, message: "Token Gerado com Sucesso" }
            }
        }


        return { status: 401, message: `Falha na Autorização` }
    }

    async refreshToken({email}) {
        let newToken = this.gerateToken(email)
        return { status: 200, token: newToken, message: "Novo Token Gerado com Sucesso" }
    }

    gerateToken(email){
        return jwt.sign({ email },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        )
    }


}


module.exports = new loginServices();