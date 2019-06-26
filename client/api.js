import request from 'superagent'

// const person = 'tam'
const Url = 'https://api.github.com/orgs/matai-2019/members/David'

export function getPeople (callback) {
  request
    .get(Url)
    .end((err, res) => {
      // callback(err, res.text)
      console.log(res)
      if (err) {
        console.log(err)
      }
    })
}
