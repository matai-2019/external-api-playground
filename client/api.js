import request from 'superagent'

const trumpApi = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q='
const proverbs = 'https://eda-te-reo.herokuapp.com/api/proverbs'

export function getTrumpTweet () {
  return request.get(trumpApi).then(res => res.body.message)
}

export function getProverb () {
  return request.get(proverbs).then(res => res.body.message)
}
