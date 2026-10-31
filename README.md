# Numero-Secreto 🔢🎲

Neste jogo, os participantes tentam adivinhar um número secreto, utilizando reconhecimento de voz.


## Funcionalidades 🎮

- **Reconhecimento de Voz:** Utilização do reconhecimento de voz para inserção de palpites (recomendo que utilize o navegador Chrome).
- **Dicas:** As dicas aparecem na tela, indicando se o número secreto é maior ou menor que o palpite.
- **Validações:** O código JavaScript inclui validações para garantir que os palpites estejam dentro dos limites permitidos, ou se é um número.


## [Adivinhe o número!](https://guilhermeserafim.github.io/alura-numero-secreto/) <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="Cadeado" width="30" height="30">
Execute em um navegador compatível com a API Web Speech (como o Chrome) que utilizamos para o reconhecimento de voz. 

## Dependência do navegador

A entrada usa `SpeechRecognition` ou `webkitSpeechRecognition`, configurada para português brasileiro. É necessário permitir o uso do microfone. O código não oferece entrada alternativa quando essa API está indisponível; a recomendação de navegador acima não é uma garantia de compatibilidade em todas as versões.
