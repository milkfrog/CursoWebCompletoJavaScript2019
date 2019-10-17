const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5) {
        break // break não age em cima de um bloco if. Age no tipo for, while e switch.
    } 
    console.log(x+' = '+ nums[x])
}
console.log('------')
for (let y in nums) {
    if (y == 5) {
        continue // pula para a próxima iteração, mas continua no mesmo laço. Apenas em for e while
    }
    console.log(y+' = '+nums[y])
}


externo:
for (let a in nums) {
    for (let b in nums){
        if (a == 2 && b == 3) break externo
        console.log('Par = '+a+','+b)
    }
}
console.log('Fim!')