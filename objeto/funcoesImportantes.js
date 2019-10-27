const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna todas as chaves
console.log(Object.values(pessoa)) // retorna todos os valores
console.log(Object.entries(pessoa)) // retorna array com [['chave', 'valor']]

Object.entries(pessoa).forEach(e => {
    console.log(e[0]+': '+e[1])
})

// com destructuring:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(chave+': '+valor)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // não pode ser listado no Object.keys
    writable: false, // não pode ser alterado
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // nao vai trocar mas n vai gerar erro
console.log(pessoa.dataNascimento) // realmente n deixou alterar o dataNascimento
console.log(Object.keys(pessoa)) // de fato não lista o dataNascimento

// Object.assign (ECMAScrip 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)