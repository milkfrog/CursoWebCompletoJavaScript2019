let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2*a // quando tira os {} tem retorno implicito.

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // ignora parâmetros.
console.log(ola())