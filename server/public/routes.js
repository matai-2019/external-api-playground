const express = require('express')
const request = require('superagent')

const router = express.Router()
router.use(express.json())

const stapiURL = 'http://stapi.co/api/v1/rest/species/search'

router.get('/', (req, res) => {
  const url = `${stapiURL}/species/${req.params.id}`
  request
    .get(url)
    .then(stapires => {
      res.json(stapires.body)
    })
    .catch(err => {
      res.status(500).send('Consuming STAPI failed')
      console.error(err)
    })
})

module.exports = router
