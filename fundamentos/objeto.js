const prod1 = {} // objeto vazio; Parece um dict
prod1.nome = 'Celular ultra mega'
prod1.preco = 4998.90
prod1['desconto Legal'] = 0.40 // evitar chaves com espaço

console.log(prod1)

let prod2 = {
	nome: 'Camisa Polo',
	preco: 79.90,
	teste: {
		blabla: '1',
		outrobla: '22',
		obj: {
			blabla: '1'
		}
	}
}


// json q n é a mesma coisa q object:
'{"nome": "Camisa Polo", "preco": 79.90}' // json é um formato textual

console.log(prod2)
console.log(prod2['teste']['obj'])
