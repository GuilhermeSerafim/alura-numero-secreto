function verificaSeOChutePossuiUmValorValido(chuteEmFormatoDeString) {
    // Erros
    // para converter o chute em string usamos o sinal =+
    const numero =+ chuteEmFormatoDeString;
    if (chuteNaoEUmNumero(numero)) {
        elementoChute.innerHTML += '<div>Não é um número</div>'
    }
    
    if(numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `<div>O valor precisa estar entre ${menorvalor} e ${maiorValor}</div>`;
    }

    // Acerto
    if(numero === numeroSecreto) {
        document.body.innerHTML = 
        `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        
        `
    }
}

function chuteNaoEUmNumero(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorvalor;
}