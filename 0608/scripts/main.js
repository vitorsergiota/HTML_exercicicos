function escolaridade() {
    var idd = window.document.querySelector(`#idad`)
    var res = window.document.querySelector(`#res`)
    var ida = Number(idd.value)
    if ( ida < 4 ) {
        res.innerText = `Pequenote ainda não precisas de ir para a escola pois só tens ${ida} anos`
    } else if ( ida >= 4 && ida < 6 ) {
        res.innerText = `Podes te inscrever na Pré-Primária pois já tens ${ida} anos`
    } else if ( ida >= 6 && ida <= 10 ) {
        res.innerText = `Já te podes inscrever na Primária pois tens ${ida} anos!`
    } else if ( ida > 10 && ida <= 12 ) {
        res.innerText = `Podes te inscrever na Preparatória!!`
    } else if ( ida > 12 && ida <= 18 ) {
        res.innerText = `Podes ir para o Liceu!!`
    } else if ( ida > 18 && ida <= 23 ) {
        res.innerText = `Podes te inscrever na Universidade!!`
    } else {
        res.innerText = `Vai arranjar trabalho Malandro! ${ida}`+ typeof(ida)
    }
}