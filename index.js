const express = require('express')
const router = require('./src/routes')
const app = express()

app.use(express.json())
app.use('/', router)

app.listen(3333,() =>{
    console.log("Servidor rodando na porta 3333")
})
module.exports = app
