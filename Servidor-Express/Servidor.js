const express = require('express')
const server = express()

server.get('/', (req, res) =>{
    res.send('<h1>Casa</h1>')
})

server.get('/Home', (req, res) =>{
    res.send('<h1>Home</h1>')
})

server.listen(3000, () =>{
    console.log('Servidor hospedado em http://localhost:3000')
    console.log('Para derrubar o servidor: ctrl + c')
})