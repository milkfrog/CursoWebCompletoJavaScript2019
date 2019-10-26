//(aponta para endereço 123) pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//(tentando alterar o endereço q pessoa aponta) pessoa -> 456 -> {...}
// porem é uma const, ou seja, n pode alterar
// pessoa = {nome: 'Ana'}

// Congela o objeto, ou seja, nao consegue mais alterar o Objeto
Object.freeze(pessoa) // nao deixa excluir, alterar etc os valores do Object

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)
// nao da erro, mas mantém o valor que estava no freeze

const pessoaConstante = Object.freeze({nome: 'Joao', idade: 23})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)