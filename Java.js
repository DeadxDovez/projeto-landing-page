var setadireita = window.document.getElementById("seta-direita")
var cardleonardo = window.document.getElementById("cardleonardo")
var cardsamantha = window.document.getElementById("cardsamantha")
var cardbruna = window.document.getElementById("cardbruna")
var setaesquerda = window.document.getElementById("seta-esquerda")

function rolarparadireita() {
    cardleonardo.style ="display:none"
    cardbruna.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex; margin: 70px -200px 0px 300px;"
}

function rolarparaesquerda(){
    cardleonardo.style ="display:flex"
    cardbruna.style ="display:none"
    setadireita.style ="display:flex"
    setaesquerda.style ="display:none"
}