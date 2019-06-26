import request from 'superagent'

let numberURL = 'http://numbersapi.com/'

export function getNumberFact (num) {
  numberURL = numberURL + num
  console.log(`\nHitting the getNumberFact(${num})\n`)
  console.log('Number url is: ', numberURL)
  return request.get(numberURL)
    .then(res => res.text)
}
