function Pessoa(nome) {
    this.nome = nome

    this.trocarNome = function(nomeNovo) {
        this.nome = nomeNovo
    }

    this.falar = function() {
        console.log('Meu nome é '+this.nome)
    }
}

const p1 = new Pessoa('João')
p1.falar()