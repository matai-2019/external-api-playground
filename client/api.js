import request from 'superagent'

const spoonAPI = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random'
const trumpAPI = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q='
const moviesAPI = 'https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s='

export function getTrivia () {
  return request.get(spoonAPI)
    .set('X-RapidAPI-Key', '346fa7c002msh97d65e27ce9d193p147455jsn1c331c693727')
    .then(res => {
      return res.body.text
    })
}

export function getTrumpQuote (name) {
  return request.get(trumpAPI + name).then(res => res.body.message)
}

export function getMovie (name) {
  const title = name.split(' ').join('+')
  console.log(title)
  return request.get(moviesAPI + title)
    .set('X-RapidAPI-Key', '346fa7c002msh97d65e27ce9d193p147455jsn1c331c693727')
    .then (res => {
      return res.body.Search
    })
}
