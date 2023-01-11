//criptografando senha
const DADOS_CRIPTOGRAFAR = {
    algoritmo: "aes256",
    segredo: "chaves",
    tipo: "hex"
};

const crypto = require("crypto");

function criptografar(senha: any) {
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    cipher.update(senha);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};

export default criptografar