let caixa = document.getElementById("mouse")

function entradaMouse() {
    caixa.style.backgroundColor = "purple"
}

function saidaMouse() {
    caixa.style.backgroundColor = "pink"
}

function mudaHtml(){
    let nome = document.querySelector("#nome").value
    caixa.innerHTML = nome
}