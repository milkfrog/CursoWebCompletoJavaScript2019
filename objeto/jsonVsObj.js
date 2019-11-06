const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}

console.log(JSON.stringify(obj)) // exclui a função.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) ERRADO
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) ERRADO
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [3, 4, 5]}'))
