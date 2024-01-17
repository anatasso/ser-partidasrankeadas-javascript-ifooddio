const prompt = require('prompt-sync')()
let vitorias = parseInt(prompt('Vitórias: '))
let derrotas = parseInt(prompt('Derrotas: '))

function calcularPartidasRankeadas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas
  let nivelHeroi

    if (saldoVitorias <= 10) {
      nivelHeroi = 'Ferro';
    } else if (saldoVitorias <= 20) {
        nivelHeroi = 'Bronze';
    } else if (saldoVitorias <= 50) {
        nivelHeroi = 'Prata';
    } else if (saldoVitorias <= 80) {
        nivelHeroi = 'Ouro';
    } else if (saldoVitorias <= 90) {
        nivelHeroi = 'Diamante';
    } else if (saldoVitorias <= 100) {
        nivelHeroi = 'Lendário';
    } else if (saldoVitorias > 100) {
        nivelHeroi = 'Imortal';
    }
    console.log(
      `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelHeroi}`
    );
}

calcularPartidasRankeadas(vitorias, derrotas);