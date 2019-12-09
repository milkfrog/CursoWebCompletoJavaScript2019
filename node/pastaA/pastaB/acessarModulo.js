const moduloA = require('../../moduloA.js')
console.log(moduloA.ola)

const saudacao = require('saudacao') // tem q ter o arquivo index.js dentro do node_modules
console.log(saudacao.ola)

const c = require('./pastaC') // procura dentro da pasta o index.js
console.log(c.ola2)
 
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)