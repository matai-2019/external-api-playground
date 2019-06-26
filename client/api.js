import request from 'superagent'

const URL = 'http://numbersapi.com/'

export function getNumberFact (num, fact) {
  const numberURL = URL + num
  if (fact !== null) {
    const numberFactURL = numberURL + `/${fact}`
    return request.get(numberFactURL)
      .then(res => res.text)
  }

  return request.get(numberURL)
    .then(res => res.text)
}
