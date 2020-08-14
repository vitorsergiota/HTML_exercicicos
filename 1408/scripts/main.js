function verdade() {
    var lindo = document.getElementsByName(`cara`)
    var res = document.querySelector(`#res`)
    var ima = document.createElement(`img`)
    ima = setAttribute(`id`, `foto`)
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
}