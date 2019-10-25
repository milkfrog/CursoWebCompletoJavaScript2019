function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro)) 
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // consegue passar os parâmetros tbm.
// Sempre primeiro o contexto!!!

console.log(getPreco.apply(global, [0.17, '$'])) // passa igual ao call porém os parâmetros em um array!!
