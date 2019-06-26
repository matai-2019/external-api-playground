const path = require('path')
const express = require('express')

const slackApi = require('./routes/botApi')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use('/', slackApi)

module.exports = server
