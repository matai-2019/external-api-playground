const express = require('express')
const request = require('superagent')

const router = express.Router()
router.use(express(json()))

// const hpUrl = 'https://www.potterapi.com/v1/characters'

// router.get('/character/:id', (req, res) => {
//   const url = `${hpUrl}/${req.params.id}/?key=$2a$10$ZbeMuQMa5WtxQ4XOtqwywOFe.nwFFXu27Z3egbPP5gz59aIuvIWAS`
//   request
//     .get(url)
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//       res.status(500).send('Consuming SWAPI failed')
//       console.error(err)
//     })
// })

module.exports = router
