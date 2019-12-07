console.log(this === global) // false pq aponta para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    // dentro da funcao this nao aponta para exports!!
    console.log(this === module.exports)
    console.log(this === global)
    // this dentro de uma funcao aponta para global, e fora para module.exports!!!

    // this.perigo = '...' // colocando dentro do escopo global
}
    // this.perigo = '...' // coloca dentro do module.exports!!

logThis()
