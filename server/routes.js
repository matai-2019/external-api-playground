const express = require('express')
const request = require('superagent')

const router = express.Router()
router.use(express.json())

// const insultURL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'

// router.get('/:id', (req, res) => {
//   const url = `${insultURL}/Insult/${req.params.id}`
//   request
//     .get(url)
//     .then(insultsres => {
//       // console.log('swapires.body:', swapires.body)
//       res.json(insultsres.body)
//     })
//     .catch(err => {
//       res.status(500).send('Consuming Insult failed')
//       console.error(err)
//     })
// })

module.exports = router
