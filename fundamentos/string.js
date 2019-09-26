let escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // valor tabela unicode ou ASCII
console.log(escola.indexOf('3'))
console.log(escola.substring(1, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+escola+"!")
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(','))
