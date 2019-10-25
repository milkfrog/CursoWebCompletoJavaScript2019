console.log(soma(3, 4))
// console.log(sub(3, 4)) deve ser usado somente depois da declaracao
// pq foi declarado usando uma variavel
//console.log(mult(2, 2))

// function declaration (consegue utilizar as funções mesmo antes de declarar ela (nas linhas acima))
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult (x, y) {
    return x*y
}