function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2, 5, 3, 2, 1, 45))
console.log(soma())
console.log(soma(1))
// bizarrices:
console.log(soma('oi', 'oids'))
console.log(soma('a', 'b', 'c'))