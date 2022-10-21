const emailValidator = require('deep-email-validator');

module.exports = async function verifyIsEmail(email) {
    let test = await emailValidator.validate({email, validateSMTP: false});
    return test;
}
