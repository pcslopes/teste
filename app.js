const express = require('express')
const app = express()
app.get('/', function (req, res) {
        res.send('Alou Paulo alguem chamou essa pagina com GET')
})

// POST method route
app.post('/', function (req, res) {
  res.send('Agora um POST foi enviado')
})
app.listen(4000, function(){
        console.log('essa aplicacao vai responder na porta 4000!')
})