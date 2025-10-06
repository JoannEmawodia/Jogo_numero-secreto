alert('Bem vindo ao jogo do número secreto');

let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;

while ( chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 a 10');

    if (numeroSecreto == chute) {
        alert (`Isso mesmo, você descobriu o número secreto: ${numeroSecreto}`) ;
    } else {
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`)
        } else {
            alert(`O numero secreto é maior que ${chute}`)
        }
    }
}



