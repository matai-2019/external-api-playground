import request from 'superagent'

const slackUrl = 'https://localhost/slack-api'

export function getSlack (callback) {
  request
    .get(slackUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}
