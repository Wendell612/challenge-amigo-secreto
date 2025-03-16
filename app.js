let amigos = [];

function adicionarAmigo() {
    let inputJogador = document.getElementById("amigo");
    let nomeAmigo = inputJogador.value;

    if (nomeAmigo == "") {
        alert("Por favor, insira um nome.")
    } else if (amigos.includes(nomeAmigo)) {
        alert ("Esta nome já foi incluído na lista de sorteio")
    } else {
        amigos.push(nomeAmigo)
    }

    exibirNomes();
    limparCampo();
}

function limparCampo() {
    let campoInput = document.querySelector("input");
    campoInput.value = "";
}

function exibirNomes() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let nomeLista = document.createElement("li");
        nomeLista.textContent = amigos[i];
        listaAmigos.appendChild(nomeLista);
    }
}

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `${amigoSorteado} foi sorteado!`;
}