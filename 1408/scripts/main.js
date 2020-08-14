function verdade() {
    
    var lindo = document.getElementsByName(`cara`)
    var res = document.querySelector(`#res`)
    
    // criação elemento img 
    var ima = document.createElement(`img`)
    if (lindo[0].checked) {
        ima.setAttribute(`src`, `imagens/lindo.jpg`)
        res.innerHTML = `És lindoooo!`
    } else if (lindo[1].checked) {
        ima.setAttribute(`src`, `imagens/feio.jpg`)
        res.innerHTML = `Que jeitoso tu és!`
    }else {
        ima.setAttribute(`src`, `imagens/sol.jpg`)
        res.innerHTML = `WoooooWWWWW....`
    }
    res.appendChild(ima)
}