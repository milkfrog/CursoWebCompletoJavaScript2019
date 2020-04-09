const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')


// bodyParser não é mais necessário, o proprio express possui a mesma funcionalidade:
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(saudacao('Marcelo'))

// cadeia de responsabilidade, função middleware.
app.use((req, res, next) => {
    console.log('Antes')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})


app.post('/corpo2', (req, res) => {
    // res.send(JSON.stringify(req.body))
    res.send(req.body)
})

app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', (parte) => {
        corpo += parte
    })

    req.on('end', () => {
        res.send(corpo)
    })
    // req.on('end', () => {
    //     res.json(JSON.parse(corpo))
    // })
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

// use é pra qualquer tipo de requisição http
// ou até o app.all
app.get('/opa', (req, res, next) => {
    console.log('Durante')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

    // res.json([
        // {id: 7, name: 'Ana', position: 1},
        // {id: 34, name: 'Bia', position: 2},
        // {id: 73, name: 'Carlos', position: 3}
    // ])

    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // res.send('<h1>Estou bem!</h1><br><br><br><h2>Tipo é HTML!</h2>')
})

app.use((req, res) => {
    console.log('Depois')
})


app.listen(5000, () => {
    console.log('Backend executando')
})