let valor // nao inicializada
console.log(valor) // undefined (por n ter atribuido nada a variavel. valor padrao = undefined)

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // gera erro TypeError
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evitar atribuir undefined. melhor usar null
console.log(!!produto.preco)
console.log(produto.preco)
// delete produto.preco // se quiser tirar um atributo de um objeto
console.log(produto)

produto.preco = null // sem preço
console.log(produto)
console.log(!!produto.preco)
