const request = require('supertest');
const app = require('../../src/app');
const loginServices = require('../../src/services/loginServices');

describe('Login', () => {
    it('Make Login', async () => {
        const res = await request(app).post('/signin').send({
            "email": "teste@gmail.com",
            "password": "Felipe123@"
        });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("token");
        expect(res.body.token).toHaveLength(163);
    })

    it('refresh Token', async () => {
        let token = loginServices.gerateToken("teste@gmail.com");
        const res = await request(app).get('/refreshToken').set('authorization', `Bearer ${token}`)
        console.log(res.body);
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("token");
        expect(res.body.token).toHaveLength(163);
    })

})