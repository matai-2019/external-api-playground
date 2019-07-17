require('dotenv').config()
const fs = require('fs')
const request = require('superagent')
const express = require('express')
const router = express.Router()
const idUrl = 'https://www.slack.com/api/channels.info?channel=CJX8XUQLE'
const usersUrl = 'https://slack.com/api/users.list?team=T02SQPVAC'
let matai = []
let all = []
require.extensions['.txt'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8')
}

const auth = process.env.API_KEY

router.get('/', (req, res) => {
  request
    .get(idUrl)
    .set({
      Authorization: 'Bearer ' + auth
    })
    .then(channelRes => {
      console.log(channelRes.body)
      matai = channelRes.body.channel.members
      request
        .get(usersUrl)
        .set({
          Authorization: 'Bearer ' + auth
        })
        .then(userRes => {
          all = userRes.body.members
          const mataiNames = []
          matai.map(memberID => {
            all.forEach(member => {
              if (member.id === memberID) mataiNames.push(member.real_name)
            })
          })
          res.send(mataiNames)
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})

module.exports = router
