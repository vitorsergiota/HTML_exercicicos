var item = window.prompt(`Qual o item a adicionar ao srock?`)
p1.innerText = `${item}`
var stock = [`bananas`, `maças`, `laranjas`, `peras`, `melão`, `melancia` ]
stock.push(item)
st.innerText = `${stock}`