const elementoChute = document.getElementById('chute');
const SpeechRecognition =
    //window é um objeto global que representa a janela do navegador.
    window.SpeechRecognition || window.webkitSpeechRecognition; //Determina QUAL implementação da API será usada pelo no navegador usado

let boxVoceDisse = document.querySelector('.box');
let possoFalar = true;

//Instância do reconhecimento de voz
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(eventoDeFala) {
    chuteFalado = eventoDeFala.results[0][0].transcript;
    if(possoFalar) {     
        exibeChuteNaTela(chuteFalado);
        verificaSeOChutePossuiUmValorValido(chuteFalado);
        // Não pode falar até que reload a pag com o bt de jogar nvoamente
        if(chuteFalado == "game over" || chuteFalado == numeroSecreto) {
            possoFalar = false;
        }
    }
}

function exibeChuteNaTela(chuteFalado) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chuteFalado}</span>
    `
}

// Quando nossa função acabar, ligue novamente
recognition.addEventListener('end', () => recognition.start());
