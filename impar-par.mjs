import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// receber um numero, vai dizer se e impar ou par

var numero = await rl.question('digite o numero: ');

numero = parseInt(numero, 10);

/*
    resto da divisao -> %
*/

var resto = numero % 2;

console.log('resto = ', resto);

/*
    comparador igual -> ==
    comparador diferente -> !=
    comparador maior que -> ">"
    comparador menor que -> "<"
*/

/*
    if -> se isso for verdade
    else -> se o if nao for verdade
*/

if (resto == 0) {
    console.log('numero e par');
} else {
    console.log('numero e impar');
}
// se o resto for igual a 0, entao e par, senao e impar
