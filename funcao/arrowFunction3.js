let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThis(global)
comparaComThisArrow(module.exports) 
// No Node dentro de uma func Arrow o this se refere ao modulo.
// E cada modulo é um arquivo.
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj) // Arrow function nao permite mudar o bind do this para outro!!!
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) // continua apontado pro module.
