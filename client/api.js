const request = require('superagent')
const swapiurl = 'https://swapi.co/api/people/'

function getPeople () {
  return request.get(swapiurl)
  .then(res => {
    return res.body.results
  })
  
}

module.exports = { getPeople }
