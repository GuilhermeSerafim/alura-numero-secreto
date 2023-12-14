const SpeechRecognition =
//window é um objeto global que representa a janela do navegador.
  window.SpeechRecognition || window.webkitSpeechRecognition; //Determina QUAL implementação da API será usada pelo no navegador usado

let boxVoceDisse = document.querySelector('.box');

//Instância do reconhecimento de voz
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    console.log(e.results[0][0].transcript)
    const capturaDeVoz = e.results[0][0].transcript;
    if(capturaDeVoz) {
        boxVoceDisse.textContent = capturaDeVoz;
    } else {
        boxVoceDisse.textContent = 'erro';
    }
}