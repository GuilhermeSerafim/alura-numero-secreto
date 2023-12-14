const SpeechRecognition =
//window é um objeto global que representa a janela do navegador.
  window.SpeechRecognition || window.webkitSpeechRecognition; //Determina QUAL implementação da API será usada pelo no navegador usado

//Instância do reconhecimento de voz
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    console.log(e.results[0][0].transcript)
    const voceDisse = e.results[0][0].transcript;
    if(voceDisse == 20) {
        console.log('palmeiras n tem mundial')
    } else {
        console.log('fortnite lego é melhor que minecraft')
    }
}