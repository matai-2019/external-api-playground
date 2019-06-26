const fs = require('fs')
const request = require('superagent')
const express = require('express')
const router = express.Router()
const idUrl = 'https://www.slack.com/api/channels.info?channel=CJX8XUQLE'
const usersUrl = 'https://slack.com/api/users.list?team=T02SQPVAC'
const auth = 'xoxp-2908811352-589200241107-670392999473-621348811b77f4d77e03fb0977432ef0'
let matai = []
let all = []

require.extensions['.txt'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

const token = require('../../auth.txt').slice(1)

console.log('auth: ', token)

router.get('/', (req, res) => {
  console.log('slack home hit |', auth)
  request
    .get(idUrl)
    .set({
      'Authorization': 'Bearer ' + auth
    })
    .then(channelRes => {
      console.log('channel url')
      matai = channelRes.body.channel.members
      request
        .get(usersUrl)
        .set({
          'Authorization': 'Bearer ' + auth
        })
        .then(userRes => {
          console.log('user url')
          all = userRes.body.members
          let mataiNames = []
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
