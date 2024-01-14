//Projeto Calculadora de Partidas Rankeadas

//Um herói terá um quantidade de vitórias e de derrotas. Ao realizar uma operação com essas duas informações, a calculadora retornará o saldo do herói e em qual posição do rank está.

//Variáveis
let nivelHeroi = "";
let resultado = calcularSaldo(150, 20);

//Função
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
  "O Herói tem de saldo " + resultado,
  "e está no nível " + nivelHeroi,
  "!"
);
