function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = + chute;
    if (chuteNaoEUmNumero(numero)) {
        console.log('Valor invalido')
    }
}

function chuteNaoEUmNumero(numero) {
    return Number.isNaN(numero);
}
