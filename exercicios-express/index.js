const express = require('express')
const app = express()

// use é pra qualquer tipo de requisição http
// ou até o app.all
app.use('/opa', (req, res) => {
    res.send('Estou <b>bem!</b>')
})


app.listen(5000, () => {
    console.log('Backend executando')
})