const  routes  = require('express').Router();
const controllers = require('../controllers');
const middlewares = require('../middlewares');

routes.get('/', (request, response) => { return response.json('Funcionando') });

routes.post('/signup', controllers.userController.createUser);

routes.post('/signin', controllers.userController.signinUser);

routes.get('/refreshToken', middlewares.tokenVerify, controllers.userController.refreshToken)

module.exports = routes;