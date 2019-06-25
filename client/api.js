import request from 'superagent'

const spoonAPI = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random'

export function getTrivia () {
  return request.get(spoonAPI)
    .set('X-RapidAPI-Key', '346fa7c002msh97d65e27ce9d193p147455jsn1c331c693727')
    .then(res => {
      return res.body.text
    })
}
