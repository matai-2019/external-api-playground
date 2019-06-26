const path = require('path')
const express = require('express')

const router = require('./routes/serverApi')
const server = express()

server.use(express.static(path.join(__dirname, './public')))
server.use('/s', router)

module.exports = server
