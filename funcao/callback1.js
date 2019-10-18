const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice, indice2, indice3) {
    console.log((indice+1)+'.'+nome)
}


fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

fabricantes.forEach(function(a){
    console.log(a)
})