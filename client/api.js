import request from 'superagent'

// const person = 'tam'
const url = 'localhost:3000'

export function getPeople (callback) {
  request
    .get('http://localhost:3000/s')
    .end((err, res) => {
      // callback(err, res.text)
      console.log(res)
      if (err) {
        console.log(err)
      }
    })
}
