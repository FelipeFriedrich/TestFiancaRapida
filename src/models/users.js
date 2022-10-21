const Usuarios = require("../database/model/user")
const { Op } = require("sequelize");

class user {
    constructor() {
    }

    async create(user) {
        try {
            const { email, password } = user;
            return await Usuarios.create({ email, password })
        } catch (err) {
            return "Erro ao criar usuário";
        }
    }

    async selectUserByEmail(email) {
        const response = await Usuarios.findAll({
            where: { email: { [Op.eq]: email } }
        });
        return response
    }

    async deleteUserByEmail(email) {

        return await Usuarios.destroy({
            where: {
                email: email
            }
        });
    }
}




module.exports = new user();