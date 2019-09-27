let valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[10] = 10
console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]

console.log(valores.length)

valores = [7.7, 8.9, 6.3, 9.2, 10]
console.log(valores.length)
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores) // [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores) // object