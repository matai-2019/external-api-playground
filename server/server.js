const path = require('path')
const express = require('express')
const cors = require('cors')

const slackApi = require('./routes/slackApi')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use(cors({ origin: 'http://localhost:3000' }))

server.use('/slack-api', slackApi)

module.exports = server
