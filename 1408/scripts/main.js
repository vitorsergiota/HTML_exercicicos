function verdade() {
    var lindo = document.getElementsByName(`cara`)
    var res = document.querySelector(`#res`)
    var img = document.createElement(`img`)
    if (lindo[0].checked) {
        img.setAttribute(`src`, `imagens/lindo.jpg`)
        res.innerHTML = `És lindoooo!`
    } else if (lindo[1].checked) {
        img.setAttribute(`src`, `imagens/feio.jpg`)
        res.innerHTML = `Que jeitoso tu és!`
    }else {
        img.setAttribute(`src`, `imagens/sol.jpg`)
        res.innerHTML = `WoooooWWWWW....`
    }
    res.appendChild(img)
}