var a = window.document.getElementById("area")
    function clicar() {
        a.innerText ="Clicou!"
        a.style.background ="red"
    }
    function entrar() {
        a.innerText ="Entrou!"
    }
    function sair() {
        a.innerText ="Saiu!"
        a.style.background ="green"
    }
    
    // segundo elemento mas somente com JS

var b = window.document.getElementById("area2")
    b.addEventListener("click", clicar2 )
    b.addEventListener("mouseenter", entrar2 )
    b.addEventListener("mouseout", sair2 )
    function clicar2() {
        b.innerText ="Clicou!"
        b.style.color = "black"
        b.style.background ="yellow"
    }
    function entrar2() {
        b.innerText = "Entrou"
        b.style.color = "white"
    }
    function sair2() {
        b.innerText = "Saiu!"
        b.style.background = "blue"
        b.style.color = "white"
    }
