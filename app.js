let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'

function mensagemConsole() {
    console.log('O botão foi clicado');
}

function mensagemAlert() {
    alert('Eu amo JS');
}

function mensagemPrompt() {
    let cidade = prompt('Digite o nome de uma cidade brasileira');
    alert('Estive em ' + cidade + ' e lembrei de você');
}

function mensagemSoma() {
    let num1 = parseInt(prompt('Digite o primeiro numero da soma'));
    let num2 = parseInt(prompt('Digite o segundo numero da soma'));
    let soma = num1 + num2;

    alert('A soma de '+num1+' e '+num2+' é '+soma );
}