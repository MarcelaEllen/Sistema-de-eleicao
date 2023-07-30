
/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco,
ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.
Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos 
de cada candidato, os brancos e nulos. */


const Candidato = {
    X: 889,
    Y: 847,
    Z: 515,
    branco: 0
};


const votos = {
    Candidato_X: 0,
    Candidato_Y: 0,
    Candidato_Z: 0,
    branco: 0,
};

function votar() {
    let voto = parseInt(prompt("Em quem você quer votar? Candidato X: vote 889, candidato Y: vote 847, candidato Z: vote 515, branco: vote 0"));

    if (isNaN(voto)) {
        alert("Voto inválido. Vote novamente.");
        votar();
    } else {
        switch (voto) {
            case Candidato.X:
                votos.Candidato_X++;
                break;
            case Candidato.Y:
                votos.Candidato_Y++;
                break;
            case Candidato.Z:
                votos.Candidato_Z++;
                break;
            case Candidato.branco:
                votos.branco++;
                break;
            default:
                alert("Voto nulo. Não corresponde a nenhum candidato.");
                break;
        }
    }
}

while (true) {
    votar();
    let finalizar = prompt("Deseja finalizar a votação? (s/n)").toLowerCase();
    if (finalizar === 's') {
        break;
    }
}

// Contagem de votos nulos
const votosNulos = votos.branco + votos.Candidato_X + votos.Candidato_Y + votos.Candidato_Z;

// Resultado dos votos e vencedor
let resultadoVotos = "Resultado dos votos:\n";
resultadoVotos += "Candidato X: " + votos.Candidato_X + "\n";
resultadoVotos += "Candidato Y: " + votos.Candidato_Y + "\n";
resultadoVotos += "Candidato Z: " + votos.Candidato_Z + "\n";
resultadoVotos += "Votos em branco: " + votos.branco + "\n";
resultadoVotos += "Votos nulos: " + votosNulos + "\n";

// Cálculo do total de votos válidos
const totalVotosValidos = votosNulos === 0 ? 1 : votosNulos;

// Encontrar o vencedor
let vencedor = 'Nenhum';
let maiorVotos = 0;

for (const candidato in votos) {
    if (votos[candidato] > maiorVotos && candidato !== 'branco') {
        vencedor = candidato;
        maiorVotos = votos[candidato];
    }
}

resultadoVotos += "\nVencedor: " + vencedor;

window.alert(resultadoVotos);
