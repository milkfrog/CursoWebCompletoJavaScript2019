const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: false},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

function caro(e) {
    if (e.preco >= 500) {
        return true
    }
    return false
}
const fragil = e => e.fragil

console.log(produtos.filter(caro))
console.log(produtos.filter(fragil))

console.log(produtos.filter(fragil).filter(caro))
