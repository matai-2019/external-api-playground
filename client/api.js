import request from 'superagent'

export function getPeople (callback) {
  request
    .get('http://localhost:3000/s')
    .end((err, res) => {
      callback(err, res.body)
      if (err) {
        console.log(err)
      }
    })
}
