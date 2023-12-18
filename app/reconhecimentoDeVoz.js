const elementoChute = document.getElementById('chute');
const SpeechRecognition =
    //window é um objeto global que representa a janela do navegador.
    window.SpeechRecognition || window.webkitSpeechRecognition; //Determina QUAL implementação da API será usada pelo no navegador usado

let boxVoceDisse = document.querySelector('.box');

//Instância do reconhecimento de voz
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(eventoDeFala) {
    chuteFalado = eventoDeFala.results[0][0].transcript;
    exibeChuteNaTela(chuteFalado);
    verificaSeOChutePossuiUmValorValido(chuteFalado);
}

function exibeChuteNaTela(chuteFalado) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chuteFalado}</span>
    `
}
