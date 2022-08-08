const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}', 
    '{ "nome": "Caderno", "preco": 13.90}', 
    '{ "nome": "Kit de Lapis", "preco": 41.22}', 
    '{ "nome": "Caneta", "preco": 7.50}', 
]

//queremos só os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)