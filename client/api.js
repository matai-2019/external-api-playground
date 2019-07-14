const request = require('superagent')

const astro = 'http://localhost:3000/astro/'

const getAstro = () => { 
  return request.get(astro)
    .then(res => {
      return res.body
    })
    .catch(err => console.error(err))
}

module.exports = {
  getAstro
}