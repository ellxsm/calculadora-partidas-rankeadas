//Projeto Calculadora Partidas Rankeadas

//Dentro de um cenário de jogo, o nosso herói possui um número de vitórias e de derrotas. Vamos verificar o saldo do jogo e em qual nível o herói ficará.

//Variáveis

let = nivelHeroi = "";
let = resultado = calcularSaldo(120, 15);

//Funções

function calcularSaldo(qtdVitorias, qtdDerrotas) {
  return qtdVitorias - qtdDerrotas;
}

//Estrutura de Decisão

if (resultado <= 10) {
  nivelHeroi = "Ferro";
} else if (resultado >= 11 && resultado <= 20) {
  nivelHeroi = "Bronze";
} else if (resultado >= 21 && resultado <= 50) {
  nivelHeroi = "Prata";
} else if (resultado >= 51 && resultado <= 80) {
  nivelHeroi = "Ouro";
} else if (resultado >= 81 && resultado <= 90) {
  nivelHeroi = "Diamante";
} else if (resultado >= 91 && resultado <= 100) {
  nivelHeroi = "Lendário";
} else {
  nivelHeroi = "Imortal";
}

console.log(
  "O herói tem de saldo " + resultado,
  "e está no nível " + nivelHeroi,
  "!"
);
