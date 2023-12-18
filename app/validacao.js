function verificaSeOChutePossuiUmValorValido(chuteEmFormatoDeString) {
    // Erros
    // para converter o chute em string usamos o sinal =+
    const numero = + chuteEmFormatoDeString;
    if (chuteNaoEUmNumero(numero)) {
        elementoChute.innerHTML += '<div>Não é um número</div>'
        // Early return
        return;
    }

    if (numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `<div>O valor precisa estar entre ${menorvalor} e ${maiorValor}</div>`;
        // Early return
        return;
    }

    // Acerto
    if (numero === numeroSecreto) {
        document.body.innerHTML =
            `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    // Dicas
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class=”fa-solid fa-down-long”></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class=”fa-solid fa-up-long”></i></div>`
    }
}

function chuteNaoEUmNumero(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorvalor;
}
