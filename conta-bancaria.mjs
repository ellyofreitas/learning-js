import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/* pedir para o usuario digitar o valor da conta bancaria dele?
   quanto voce quer sacar?
   se o valor a sacar, for maior do que o valor da conta, mostrar saldo insuficiente
   se o valor for igual ou menor do que o valor da conta, mostrar o saldo restante */

var valorDaConta = await rl.question('qual o valor da sua conta? ');
var valorDoSaque = await rl.question('quanto voce quer sacar? ');

valorDaConta = parseInt(valorDaConta, 10);
valorDoSaque = parseInt(valorDoSaque, 10);

if (valorDoSaque > valorDaConta) {
    console.log('saldo insuficiente');
    process.exit(1);
}

var restanteDaConta = valorDaConta - valorDoSaque;

console.log('o saldo da sua conta agora e =', restanteDaConta);
