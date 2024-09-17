/*
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

*/


function verificaFibonacci(number) {
    let a = 0;
    let b = 1;
    let c;

    for (c = 0; c <= number; c++) {

        c = a + b;
        if (c === number) {
            return true
        }
        a = b;
        b = c;
    }
    return false;
}


// const numberUsuario = parseInt(prompt('Digite um número: '));

if (verificaFibonacci(numberUsuario)) {
    console.log(numberUsuario + ' pertence à sequência de Fibonacci!')
} else {
    console.log(numberUsuario + ' Não pertence a sequência de Fibonacci!')
}