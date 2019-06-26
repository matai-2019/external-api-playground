const auth = require('../../auth')

const request = require('superagent')
const express = require('express')
const router = express.Router()
const url = 'https://www.slack.com/api/channels.list'

console.log('serverApi hit')

router.get('/', (req, res) => {
  console.log('slack home hit', { token: auth })
  
})

module.exports = router
