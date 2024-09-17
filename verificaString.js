// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.


function contarAs(string) {

    let contagem = string.toLowerCase().split('a').length - 1;

    if (contagem > 0) {
        console.log("A letra 'a' aparece ${contagem} vezes na string.");
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// const myString = prompt('Digite uma palavra: ');

console.log(contarAs(myString));