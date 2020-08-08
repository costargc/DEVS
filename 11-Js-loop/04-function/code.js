function valeapena(aluguel, compra) {
    var mensagem;

    if (compra * 0.5 / 100 < aluguel) {
        mensagem = "comprar"
    }
    else {
        mensagem = "alugar"
    }

    console.log("vale mais a pena " + mensagem)
    return ("vale mais a pena " + mensagem)

}

// valeapena(1000, 250000);
