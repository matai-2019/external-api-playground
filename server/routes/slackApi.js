const key = require('../../apikey').key
const request = require('superagent')
const express = require('express')
const router = express.Router()

const urlChannel = 'https://slack.com/api/channels.list'
const urlAllUsers = 'https://slack.com/api/users.list'

const test = {
  hi: 'hi'
}

router.get('/channels', (req, res) => {
  // get api
  request
    .post(urlChannel)
    .set({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    })
    .send()
    .end((data) => {
      res.send(data)
    })
})

module.exports = router
