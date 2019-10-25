const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 4335
}

// Factory simples: Sempre retorna um objeto
function criarPesso() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}


console.log(criarPesso())