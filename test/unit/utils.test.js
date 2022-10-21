const utils = require('../../src/utils')

describe('email validations', () => {
    it('Valid Regex Email', async () => {
        const res = await utils.verifyIsEmail("teste@gmail.com");
        expect(res.valid).toBe(true);
    })

    it('Invalid Regex Email', async () => {
        const res = await utils.verifyIsEmail("teste@gmail");
        expect(res.valid).toBe(false);
        expect(res.reason).toEqual('regex');
    })
})

describe('password validations', () => {
    it('valid password', async () => {
        const res = await utils.verifyIsPassword("FiancaR@pida");
        expect(res.valid).toBe(true);
    })
    it('invalid password - minimum 6 characters', async () => {
        const res = await utils.verifyIsPassword("teste");
        expect(res.valid).toBe(false);
        expect(res.reason).toEqual('mínimo 6 caracteres');
    })

    it('invalid password - maximum 15 characters', async () => {
        const res = await utils.verifyIsPassword("teste12345678910");
        expect(res.valid).toBe(false);
        expect(res.reason).toEqual('limite 15 caracteres');
    })

    it('invalid password - no lower case', async () => {
        const res = await utils.verifyIsPassword("TESTE123");
        expect(res.valid).toBe(false);
        expect(res.reason).toEqual('mínimo 1 caractere minúsculo');
    })

    it('invalid password - no capital letter', async () => {
        const res = await utils.verifyIsPassword("teste123");
        expect(res.valid).toBe(false);
        expect(res.reason).toEqual('mínimo 1 caractere maiúsculo');
    })
    it('invalid password - no capital letter', async () => {
        const res = await utils.verifyIsPassword("teste123");
        expect(res.valid).toBe(false);
        expect(res.reason).toEqual('mínimo 1 caractere maiúsculo');
    })
})