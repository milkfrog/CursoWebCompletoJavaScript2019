const [g] = [10]
console.log(g)
const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [a, b, c, d, e, , , ,f ] = array
console.log(a, b, c, d, e, f)

const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)