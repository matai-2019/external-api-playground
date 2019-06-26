import request from 'superagent'

const insultURL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'

export function getInsults() {
  return request.get(insultURL)
    .set('Content-Type', 'application/json')
    .then(res => {
      // console.log(res.body)
      return res.body
    })
}
