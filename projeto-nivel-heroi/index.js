//Projeto Classificador de Nível de Herói

//O Herói inicia o jogo com XP 500, e a cada rodada ele ganha XP 2500. No final de cada rodada, é atualizado o nível atual do Herói.

//Variáveis
let xpHeroi = 500;
let nomeHeroi = "Capitão América";
let contador = 0;
let nivelHeroi = "";

while (contador < 5) {
  if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
  } else {
    nivelHeroi = "Radiante";
  }

  xpHeroi += 2500;
  contador++;

  console.log(
    "O Herói de nome " + nomeHeroi,
    "está no nível de " + nivelHeroi,
    "!"
  );
}
