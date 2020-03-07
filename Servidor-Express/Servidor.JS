const express = require('express')
const server = express()

server.listen(3000, () => {
    console.log('Servidor de pé em http://localhost:3001')
    console.log('Para desligar o Servidor de um : ctrl + c')
})