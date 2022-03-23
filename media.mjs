import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// media de notas - (nota1 + nota2 + nota3 + nota4) / 4

var nota1 = await rl.question('qual e a nota 1?: ');
var nota2 = await rl.question('qual e a nota 2?: ');
var nota3 = await rl.question('qual e a nota 3?: ');

nota1 = parseInt(nota1, 10);
nota2 = parseInt(nota2, 10);
nota3 = parseInt(nota3, 10);

console.log('nota1 =', nota1, 'nota2 =', nota2, 'nota3 =', nota3);

/*
  soma -> +
  subtracao -> -
  multiplicacao -> *
  divisao -> /
*/

var media = (nota1 + nota2 + nota3) / 3;

console.log('a media das notas sao =', media);
