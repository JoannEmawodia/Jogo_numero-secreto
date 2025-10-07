alert('Bem vindo ao jogo do número secreto');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while ( chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 a ' + numeroMaximo);

    if (numeroSecreto == chute) {
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso mesmo, você descobriu o número secreto: ${numeroSecreto}! Com ${tentativas} ${palavraTentativa}`);


