
// criar função soma(x1, x2) que faz a soma
// return ("O valor da soma é: " + resposta)

function soma(x1, x2) {
    var mensagem;
    mensagem = (x1 + x2);
    console.log("O valor da soma é: " + mensagem);
    return ("O valor da soma é: " + mensagem);

}
// soma(77, 8);

// criar função maior(x1, x2) que traz o maior valor
// return ("O maior valor é: " + resposta)

function maior(x1, x2) {
    var resposta;
    if (x1 > x2) {
        resposta = x1;
    }
    else {
        resposta = x2;
    }

    console.log("O maior valor é: " + resposta);
    return ("O maior valor é: " + resposta);

}