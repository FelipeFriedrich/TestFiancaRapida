module.exports = function verifyIsPassword(password) {
    let regexUpercase = new RegExp('[A-Z]');
    let regexLowercase = new RegExp('[a-z]');
    let regexExpecialcase = new RegExp('[@$!%*#?&]');

    let message = password.length < 6 ? { valid: false, reason: "mínimo 6 caracteres" } :
        password.length > 15 ? { valid: false, reason: "limite 15 caracteres" } :
            !regexUpercase.test(password) ? { valid: false, reason: "mínimo 1 caractere maiúsculo" } :
                !regexLowercase.test(password) ? { valid: false, reason: "mínimo 1 caractere minúsculo" } :
                    !regexExpecialcase.test(password) ? { valid: false, reason: "mínimo 1 caracter especial(@$!%*#?&)" } :
                        { valid: true };


    return message;
}
