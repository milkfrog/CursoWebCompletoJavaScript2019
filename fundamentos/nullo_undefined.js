const a = {name: 'Teste'}
const b = a // atribuição por referência (a aponta para endereço do objeto e assim tbm b)
b.name = 'Opa'
console.log(a)

let c = 3
let d = c // quando valor primitivo é feito cópia por valor
d++
console.log(c)