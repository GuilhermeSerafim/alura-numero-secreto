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
            <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
        // Dicas
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></div>`
    } else {

        elementoChute.innerHTML += `<div>O número secreto é maior <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg></div>`
    }
}

// Validações
function chuteNaoEUmNumero(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorvalor;
}

// Para jogar novamente
document.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})