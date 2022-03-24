import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/* Construa um algoritmo para determinar se o indivíduo esta com um peso
favorável. Essa situação é determinada através do IMC (Índice de Massa Corpórea), que é
definida como sendo a relação entre o peso (PESO) e o quadrado da Altura (ALTURA) do
indivíduo. Ou seja
*/

var altura = await rl.question('qual a sua altura? ');
var peso = await rl.question('qual o seu peso? ');

altura = parseFloat(altura);
peso = parseFloat(peso);

var imc = peso / (altura * altura);

/*
    operadores logicos
    && - E
    || - OU
*/

if (imc < 20) {
    console.log('abaixo do peso');
} else if (imc >= 20 && imc < 25) {
    console.log('peso normal');
}
