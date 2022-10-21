const request = require('supertest');
const app = require('../../src/app');
const generatorEmail = require('email-generator')

describe('Users', () => {
    it('create a new User', async () => {
        //algumas vezes esse generateEmail gera emails não VALIDOS.
        let email = generatorEmail.generateEmail()
        email = email.replace('"','').replace('"','');
        const res = await request(app).post('/signup').send({
            email,
            "password": "FiancaR@pida"
        });
        expect(res.status).toEqual(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body.message).toEqual("Created user");
    })

    it('incorrect email', async () => {
        let email = "test"        
        const res = await request(app).post('/signup').send({
            email,
            "password": "FiancaR@pida"
        });
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty("message");
    })
})