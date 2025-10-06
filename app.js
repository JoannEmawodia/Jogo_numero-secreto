alert('Bem vindo ao jogo do número secreto');

//armazenamento do número secreto
let numeroSecreto = 2;
let chute = prompt('Escolha um número entre 1 á 3');

if (numeroSecreto == chute) {
    alert('Isso mesmo, você descobriu o número secreto');
} 
if (numeroSecreto > chute){
    alert('O número é mais alto')
}
if (numeroSecreto < chute){
    alert('O número é mais baixo')
}

