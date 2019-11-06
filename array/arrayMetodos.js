const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa sai
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // tira da primeira posição!!!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no inicio!
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover 
pilotos.splice(3, 1) // Massa sai de novo
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice 2.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // do indice 1 (inclusive) até 4 (não entra o proprio)
console.log(algunsPilotos2)

