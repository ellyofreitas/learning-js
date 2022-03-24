import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/* Escreva um algoritmo que leia um número e informe se ele
é divisível
    por 10,
    por 5
    ou
    por 2
    ou se não é divisível por nenhum deles */
var numero = await rl.question('digite o numero: ');
numero = parseInt(numero, 10);

/*
    if -> se isso for verdade
    else -> se o `if` nao for verdade
    else if -> se o `if` nao for verdade, deixa eu ver se isso e verdade
                    ---- caso 1
    ---- situacao X ---- caso 2
                    ---- caso 3
*/

if (numero % 10 == 0) {
    console.log('numero divisível por 10');
} else if (numero % 5 == 0) {
    console.log('numero divisível por 5');
} else if (numero % 2 == 0) {
    console.log('numero divisível por 2');
} else {
    console.log('numero nao e divisível por nenhum deles');
}

rl.close();
