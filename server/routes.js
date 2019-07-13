const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

const astroApiKey = require('./api-keys')
const astroUrl = 'https://api.ipgeolocation.io/astronomy'

router.get('/', (req, res) => {
  const url = `${astroUrl}?apiKey=${astroApiKey}`

  request.get(url)
    .then(
      astroData => {
        res.send(astroData.text)
      }
    )
    .catch(err => {
      res.status(500).send('Consuming Astro failed')
      console.error(err)
    })
})

module.exports = router