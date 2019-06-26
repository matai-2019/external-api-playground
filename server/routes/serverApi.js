const getAuth = require('../auth')
const request = require('superagent')
const express = require('express')
const router = express.Router()
const idUrl = 'https://www.slack.com/api/channels.info?channel=CJX8XUQLE'
const usersUrl = 'https://slack.com/api/users.list?team=T02SQPVAC'
const auth = 'xoxp-2908811352-589200241107-678188561735-d03d48af9d7f5631aa757065222759da'
let matai = []
let all = []

console.log('auth: ', getAuth)

router.get('/', (req, res) => {
  console.log('slack home hit', { token: auth })
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
