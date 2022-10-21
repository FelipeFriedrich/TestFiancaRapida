const utils = require('../utils');
const userModel = require('../models/users')
const bcrypt = require("bcrypt")

class userServices {
    constructor() {

    }

    async createUser(user) {
        try {
            const validEmail = await utils.verifyIsEmail(user.email);
            if (validEmail.valid == false) {
                return { status: 400, message: `Esté email não é valido, Razão: ${validEmail.reason}` }
            }

            const validPassword = utils.verifyIsPassword(user.password);
            if (validPassword.valid != true) {
                return { status: 400, message: `Esta senha não é valida, Razão: ${validPassword.reason}` }
            }

            const verifyHasAccount = await userModel.selectUserByEmail(user.email);
            if (verifyHasAccount.length < 1) {
                const hashPassword = await bcrypt.hash(user.password, 10,)
                const response = await userModel.create({ email: user.email, password: hashPassword })
                return { status: 201, message: 'Created user', id: response.dataValues.id }
            } else {
                //Se retornar algum e-mail       
                return { status: 400, message: `Conta já existente` }
            }
        } catch (err) {
            return { status: 500, message: `Internal Error` }
        }
    }
}


module.exports = new userServices();