let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2}
    );    
}

function exibirMensagemIniciais(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemIniciais();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = 'Você descobriu o numero secreto com ' + tentativas +' ' + palavraTentativa;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        chute > numSecreto ? exibirTextoNaTela('p', 'o numero secreto é menor') : exibirTextoNaTela ('p', 'O numero secreto é maior');
    }
    tentativas++;
    limparCampo();
}

function gerarNumAleatorio (){
    let numeroEsclhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEsclhido)){
        return gerarNumAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEsclhido);
        return numeroEsclhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIniciais();

    document.getElementById('reiniciar').setAttribute('disabled', true);
}