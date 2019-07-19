import request from 'superagent'
const sw_api_url = 'https://swapi.co/api/people/'

function getPeople() {
  return request.get(sw_api_url)
    .then(res => {
      console.log(res)
      return res
    })
}

module.exports = {
  getPeople
}
