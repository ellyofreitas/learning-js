import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var numero1 = await rl.question('Qual numero voce quer calcular?: ');
var numero2 = await rl.question('Qual o segundo numero voce quer calcular?: ');

numero1 = parseInt(numero1, 10);
numero2 = parseInt(numero2, 10);

var resultado = numero1 + numero2;
console.log('o resultado e =', resultado);
