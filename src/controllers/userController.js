const services = require('../services');


class userController{
    constructor() {

    }

    async createUser(req, res, next) {
        try{
            const { email, password } = req.body;
            const result = await services.userServices.createUser({email, password});
            return res.status(result.status).send({message: result.message, id:result.id})
        }catch(err){
            return res.status(500).send('Internal Error')   
        }
    }


    async signinUser(req, res, next){
        try{
            const { email, password } = req.body;
            const result = await services.loginServices.signin({email, password});
            return res.status(result.status).send({message: result.message, token: result.token})
        }catch{
            return res.status(500).send('Internal Error')   
        }
    }

    async refreshToken(req, res, next){
        try{
            const { email } = req.usuario;
            const result = await services.loginServices.refreshToken({email: email});
            return res.status(result.status).send({message: result.message, token: result.token})
        }catch{
            return res.status(500).send('Internal Error')   
        }
    }




}


module.exports = new userController();