function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = + chute;
    if (chuteNaoEUmNumero(numero)) {
        console.log('Não é um número')
    }
    
    if(numeroForaDoRange(numero)) {
        console.log(`O valor precisa estar entre ${menorvalor} e ${maiorValor}`);
    }
}

function chuteNaoEUmNumero(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorvalor;
}