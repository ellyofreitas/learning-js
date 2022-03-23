import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var b = await rl.question('Qual o valor do B: ');
var c = await rl.question('Qual o valor do C: ');

b = parseInt(b, 10);
c = parseInt(c, 10);

var resultado = b * b + c * c;

console.log('a2 =', resultado);
