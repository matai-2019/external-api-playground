const express = require('express')
const request = require('superagent')
const router = express.Router()
router.use(express.json())
const swapiurl = 'https://swapi.co/api/people'

router.get('/', (req, res) => {
  const URL = `${swapiurl}/people/${req.params.id}`
  request
    .get(URL)
    .then(sAPIr => {
      res.json(sAPIr.body)
    })
    .catch(err => {
      res.status(500).send('I find your lack of faith disturbing!')
      console.error(err)
    })
})

module.exports = router
