const request = require('superagent')
const express = require('express')
const router = express.Router()

// const person = 'tam'
const key = require('../../auth')
const url = 'https://www.slack.com/api/channels.list'

console.log('botApi')

router.get('/channels', (req, res) => {
  console.log('channel hit')
})

router.get('/', (req, res) => {
  console.log('slack home hit')
})

module.export = router
