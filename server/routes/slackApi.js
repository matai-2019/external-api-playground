import { key } from '../../apikey'
import request from 'superagent'
const express = require('express')
const router = express.Router()

const slackUrl = 'https://slack.com/' + key

router.get('/', (req, res) => {
  // get api
  request
    .get(slackUrl)
    .end((data) => {
      res.send(data)
    })
})

module.exports = router
