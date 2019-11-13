const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

function toObject(e) {
    return JSON.parse(e)
}

function apenasPreco(e) {
    return e['preco']
}

let resultado = carrinho.map(toObject).map(apenasPreco)
console.log(resultado)